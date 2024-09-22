
let imageUrl: string | null = null; 

function previewImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        const img: any = document.getElementById('img');
        img.src = reader.result as string; 
        img.style.display = 'block';
        imageUrl = reader.result as string; 
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("btn1") as HTMLButtonElement;
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;

    function validateForm(): boolean {
        const requiredInputs = resumeForm.querySelectorAll("input[required]");
        for (let input of requiredInputs) {
            const inputElement = input as HTMLInputElement;
            if (!inputElement.value.trim()) {
                return false;
            }
        }
        return true;
    }

    button1.addEventListener("click", (event) => {
        event.preventDefault();
        if (validateForm()) {
            const newTab = window.open();
            if (newTab) {
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

                newTab.document.write(`
                    <style>
                        #div2 {
                            background-color: rgb(46, 151, 107);
                            font-size: xx-large;
                            font-family: cursive;
                            padding-block-end: 180px;
                        }
                            .p1{
                            background-color:white;
                            }
                    </style>
                    <hr>
                    <div id="div2" align="center">
                        <h2><u><label>Interactive Editable Resume:</label></u></h2>
                        <img src="${imageUrl}" alt="Uploaded Image" style="width:150px; height:150px;" /><hr>
                        <b><label>Name:</label></b> <i class="p1" contenteditable="true">${name}</i><hr>
                        <b><label>Age:</label></b> <i class="p1" contenteditable="true">${age}</i><hr>
                        <b><label>Email Address:</label></b> <i class="p1" contenteditable="true">${email}</i><hr>
                        <b><label>Education:</label></b> <i class="p1" contenteditable="true">${edu}</i><hr>
                        <b><label>Work Experience:</label></b> <i class="p1" contenteditable="true">${exp}</i><hr>
                        <b><label>Skill/s:</label></b><br>
                        <label>1-</label><i class="p1" contenteditable="true">${ski}</i><br>
                        <label>2-</label><i class="p1" contenteditable="true">${ski2}</i><br>
                        <label>3-</label><i class="p1" contenteditable="true">${ski3}</i><br>
                        <label>4-</label><i class="p1" contenteditable="true">${ski4}</i><br>
                        <label>5-</label><i class="p1" contenteditable="true">${ski5}</i> <hr>
                    </div>
                `);
                newTab.document.close();
            }
        } else {
            alert("Please fill out all the required fields * before generating resume.");
        }
    });
});
