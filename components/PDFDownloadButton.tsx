'use client';

import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FaDownload } from 'react-icons/fa';
import Slide0 from './slides/slide-0';
import Slide1 from './slides/slide-1';
import Slide2 from './slides/slide-2';
import Slide3 from './slides/slide-3';
import Slide4 from './slides/slide-4';

const PDFDownloadButton: React.FC = () => {
const generatePDF = async () => {
    try {
    // Create a new jsPDF instance in landscape orientation
    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
    });
    
    // Create a temporary container for rendering slides
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.width = '1280px'; // Standard presentation width
    // Allow height to be determined by content
    document.body.appendChild(tempContainer);
    
    // Array of slide components to render
    const slideComponents = [Slide0, Slide1, Slide2, Slide3, Slide4];
    const slideCount = slideComponents.length;
    
    // Show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.innerText = 'Generating PDF...';
    loadingIndicator.style.position = 'fixed';
    loadingIndicator.style.top = '50%';
    loadingIndicator.style.left = '50%';
    loadingIndicator.style.transform = 'translate(-50%, -50%)';
    loadingIndicator.style.background = 'rgba(0,0,0,0.7)';
    loadingIndicator.style.color = 'white';
    loadingIndicator.style.padding = '20px';
    loadingIndicator.style.borderRadius = '10px';
    loadingIndicator.style.zIndex = '9999';
    document.body.appendChild(loadingIndicator);
    
    // Process each slide component
    for (let i = 0; i < slideCount; i++) {
        // Clear previous slide content
        tempContainer.innerHTML = '';
        
        // Create a div for the current slide with the 'slide' class
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide';
        slideDiv.style.width = '100%';
        // Don't constrain height, let it fit content naturally
        tempContainer.appendChild(slideDiv);
        
        // Render the current slide component into the container
        const SlideComponent = slideComponents[i];
        const root = document.createElement('div');
        slideDiv.appendChild(root);
        
        // Use React to render the component
        const { createRoot } = await import('react-dom/client');
        const reactRoot = createRoot(root);
        reactRoot.render(<SlideComponent />);
        
        // Wait for slide to be fully rendered
        await new Promise(resolve => setTimeout(resolve, 1000));  // Increased wait time for better rendering
        
        // Create canvas from the slide
        const canvas = await html2canvas(slideDiv, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            logging: false,
            allowTaint: true,
            backgroundColor: null,
            height: slideDiv.scrollHeight, // Capture the full height
            windowHeight: slideDiv.scrollHeight // Ensure full slide is captured
        });
        
        // Convert canvas to image
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        
        // Add new page if not the first slide
        if (i > 0) {
        pdf.addPage();
        }
        
        // Calculate dimensions to fit slide in PDF while maintaining aspect ratio
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        
        const ratio = Math.min(
        pageWidth / imgWidth,
        pageHeight / imgHeight
        );
        
        const imgX = (pageWidth - imgWidth * ratio) / 2;
        const imgY = (pageHeight - imgHeight * ratio) / 2;
        
        // Add image to PDF
        pdf.addImage(
        imgData,
        'JPEG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
        );
        
        // Unmount React component
        reactRoot.unmount();
        
        // Update loading indicator
        loadingIndicator.innerText = `Generating PDF... (${i + 1}/${slideCount})`;
    }
    
    // Remove temporary container
    document.body.removeChild(tempContainer);
    
    // Remove loading indicator
    document.body.removeChild(loadingIndicator);
    
    // Save the PDF
    pdf.save('ForumGirona2025_Presentation.pdf');
    
    } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please check console for details.');
    }
};

return (
    <button
    onClick={generatePDF}
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
    aria-label="Download PDF"
    >
    <FaDownload /> Download PDF
    </button>
);
};

export default PDFDownloadButton;

