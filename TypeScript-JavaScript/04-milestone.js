
import jsPDF from "jspdf";
// Function to download PDF
function downloadPDF() {
    const doc = new jsPDF();
    // Content to be added to PDF
    const content = `
        Interactive Editable Resume:
        Name: ${document.getElementById('name').value}
        Age: ${document.getElementById('age').value}
        Email: ${document.getElementById('email').value}
        Education: ${document.getElementById('edu').value}
        Work Experience: ${document.getElementById('exp').value}
        Skills:
        ${document.getElementById('ski').value},
        ${document.getElementById('ski2').value},
        ${document.getElementById('ski3').value},
        ${document.getElementById('ski4').value},
        ${document.getElementById('ski5').value}
    `;
    doc.text(content, 10, 10);
    doc.save('resume.pdf');
}
// Function to generate a shareable link
function generateShareableLink() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const exp = document.getElementById('exp').value;
    const edu = document.getElementById("edu").value;
    const ski = document.getElementById("ski").value;
    const ski2 = document.getElementById("ski2").value;
    const ski3 = document.getElementById("ski3").value;
    const ski4 = document.getElementById("ski4").value;
    const ski5 = document.getElementById("ski5").value;
    // Base URL for shareable link
    const baseUrl = 'https://04-milestone-five.vercel.app/resume?';
    // Generate a unique link
    const uniqueLink = `${baseUrl}name=${encodeURIComponent(name)}&age=${age}&email=${encodeURIComponent(email)}&education=${encodeURIComponent(edu)}&experience=${encodeURIComponent(exp)}&skills=${encodeURIComponent(ski)},${encodeURIComponent(ski2)},${encodeURIComponent(ski3)},${encodeURIComponent(ski4)},${encodeURIComponent(ski5)}`;
    alert(`Shareable Link: ${uniqueLink}`);
}
// Add event listeners for the new buttons
document.getElementById("downloadPdf")?.addEventListener("click", downloadPDF);
document.getElementById("shareableLink")?.addEventListener("click", generateShareableLink);
