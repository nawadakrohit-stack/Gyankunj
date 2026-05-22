// Har class ke saare subjects aur unke PDF files ka data yahan hai
const classData = {
    class10: {
        title: "Class 10th Study Material",
        subjects: [
            { name: "Class 10th ", pdf: "https://drive.google.com/drive/folders/1-1mWPzPz9f3HqzyxoitWOcUi9XjZ_8vx" },
        ]
    },
    class9: {
        title: "Class 9th Study Material",
        subjects: [
            { name: "Class 9th", pdf: "https://drive.google.com/drive/folders/1-zZ6UDX1Y_wTB7y7RDOS9-xfaxemcCkX" },
         
        ]
    },
    class8: {
        title: "Class 8th Study Material",
        subjects: [
             { name: "Class 8th", pdf: "https://drive.google.com/drive/folders/101XdVKd9DtQDEYHR1vGV8qeeWDzGF8ed" },
            
        ]
    },
    class7: {
        title: "Class 7th Study Material",
        subjects: [
          { name: "Class 7th", pdf: "https://drive.google.com/drive/folders/102pEO_nZFgfdngyfOJM4vQSR2uC6-bS9" },
           
        ]
    },
    class6: {
        title: "Class 6th Study Material",
        subjects: [
            { name: "Class 6th", pdf: "https://drive.google.com/drive/folders/10QoE8hM1vXyArCkXuKOVRuEZ1i74kux1" },
            
        ]
    }
};

// Card click hone par subjects dikhane ka function
function showSubjects(className) {
    const box = document.getElementById("subject-material-box");
    const title = document.getElementById("selected-class-title");
    const container = document.getElementById("subject-links-container");

    const data = classData[className];

    if (data) {
        title.innerText = data.title;
        container.innerHTML = ""; 

        data.subjects.forEach(sub => {
            const btn = document.createElement("a");
            btn.href = sub.pdf;
            btn.target = "_blank"; 
            btn.className = "pdf-download-btn";
            btn.innerText = `📄 ${sub.name} PDF`;
            container.appendChild(btn);
        });

        box.style.display = "block";
        box.scrollIntoView({ behavior: 'smooth' });
    }
}
// Mobile Menu Toggle logic
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        // Menu links ko kholne/band karne ke liye 'active' class switch karega
        navMenu.classList.toggle("active");
        // Hamburger bars ko 'X' banane ke liye 'open' class switch karega
        menuToggle.classList.toggle("open");
    });

    // Agar bacha kisi link par click kare, toh menu automatic band ho jaye
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("open");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Navbar ke Image link aur Gallery section ko select kiya
    const imageLink = document.querySelector('a[href="#images"]');
    const gallerySection = document.getElementById('images');

    if (imageLink && gallerySection) {
        imageLink.addEventListener("click", function(event) {
            event.preventDefault(); // Default jump ko rokne ke liye

            // 1. Gallery section ko show karne waali class lagayi
            gallerySection.classList.add("show");

            // 2. Section dikhne ke baad smoothly wahan scroll karwaya
            setTimeout(() => {
                gallerySection.scrollIntoView({ behavior: 'smooth' });
            }, 50); // Chhota sa delay taaki display block hone ka time mile
        });
    }
});
