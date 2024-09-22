import  jsPDF  from "jspdf";

// Function to download PDF
function downloadPDF() {
    const doc = new jsPDF();

    // Content to be added to PDF
    const content = `
        Interactive Editable Resume:
        Name: ${(document.getElementById('name') as HTMLInputElement).value}
        Age: ${(document.getElementById('age') as HTMLInputElement).value}
        Email: ${(document.getElementById('email') as HTMLInputElement).value}
        Education: ${(document.getElementById('edu') as HTMLInputElement).value}
        Work Experience: ${(document.getElementById('exp') as HTMLInputElement).value}
        Skills:
        ${(document.getElementById('ski') as HTMLInputElement).value},
        ${(document.getElementById('ski2') as HTMLInputElement).value},
        ${(document.getElementById('ski3') as HTMLInputElement).value},
        ${(document.getElementById('ski4') as HTMLInputElement).value},
        ${(document.getElementById('ski5') as HTMLInputElement).value}
    `;

    doc.text(content, 10, 10);
    doc.save('resume.pdf');
}

// Function to generate a shareable link
function generateShareableLink() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const age = (document.getElementById('age') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const exp = (document.getElementById('exp') as HTMLInputElement).value;
    const edu = (document.getElementById("edu") as HTMLInputElement).value;
    const ski = (document.getElementById("ski") as HTMLInputElement).value;
    const ski2 = (document.getElementById("ski2") as HTMLInputElement).value;
    const ski3 = (document.getElementById("ski3") as HTMLInputElement).value;
    const ski4 = (document.getElementById("ski4") as HTMLInputElement).value;
    const ski5 = (document.getElementById("ski5") as HTMLInputElement).value;

    // Base URL for shareable link
    const baseUrl = 'https://04-milestone-five.vercel.app/resume?';

    // Generate a unique link
    const uniqueLink = `${baseUrl}name=${encodeURIComponent(name)}&age=${age}&email=${encodeURIComponent(email)}&education=${encodeURIComponent(edu)}&experience=${encodeURIComponent(exp)}&skills=${encodeURIComponent(ski)},${encodeURIComponent(ski2)},${encodeURIComponent(ski3)},${encodeURIComponent(ski4)},${encodeURIComponent(ski5)}`;

    alert(`Shareable Link: ${uniqueLink}`);
}


// Add event listeners for the new buttons
document.getElementById("downloadPdf")?.addEventListener("click", downloadPDF);
document.getElementById("shareableLink")?.addEventListener("click", generateShareableLink);
