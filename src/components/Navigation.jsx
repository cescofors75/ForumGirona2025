import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import styles from './Navigation.module.css';

const Navigation = () => {
const generatePDF = async () => {
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length === 0) {
    alert('No slides found to generate PDF');
    return;
    }
    
    for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const canvas = await html2canvas(slide, {
        scale: 2,
        useCORS: true,
        logging: false
    });
    
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 297; // A4 landscape width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    if (i > 0) {
        pdf.addPage();
    }
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }
    
    pdf.save('ForumGirona2025_Presentation.pdf');
};

return (
    <nav className={styles.navigation}>
    <div className={styles.logo}>
        <h1>Forum Girona 2025</h1>
    </div>
    <div className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/schedule">Schedule</a>
        <a href="/speakers">Speakers</a>
        <a href="/contact">Contact</a>
        <button 
        className={styles.downloadBtn}
        onClick={generatePDF}
        >
        Download PDF
        </button>
    </div>
    </nav>
);
};

export default Navigation;

