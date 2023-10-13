const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navMenuOverlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navMenuOverlay.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navMenuOverlay.classList.remove("active");
}

const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.nav-item .nav-link');

navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        const duration = 20000;
        const delay = 100;
        setTimeout(() => {
            window.scroll({
                top: targetPosition,
                left: 0,
                behavior: 'smooth',
                duration: duration
            });
        }, delay);
    });
});

function randomValues() {
    anime({
        targets: '.shape-container .el',
        translateX: function () {
            return anime.random(-20, 20) + 'vw';
        },
        translateY: function () {
            return anime.random(-20, 20) + 'vh';
        },
        scale: function () {
            return anime.random(0.3, 1.6);
        },
        rotate: function () {
            return anime.random(-360, 360);
        },
        duration: function () {
            return anime.random(2000, 4000);
        },
        borderRadius: [
            {
                value: '10%'
            },
            {
                value: anime.random(10, 15) + '%', duration: 50
            },
            {
                value: '50%', duration: 500
            }
        ],
        easing: 'easeOutElastic(1, .9)',
    });
}

window.addEventListener('load', function () {
    randomValues();
    setInterval(randomValues, 4000);
});

const subContent1 = document.querySelector(".m-1-content");
const subContent2 = document.querySelector(".m-2-content");
const subContent3 = document.querySelector(".t-1-content");
const subContent4 = document.querySelector(".t-2-content");
const subContent5 = document.querySelector(".t-3-content");
const subContent6 = document.querySelector(".w-1-content");
const subContent7 = document.querySelector(".w-2-content");
const subContent8 = document.querySelector(".w-3-content");
const subContent9 = document.querySelector(".th-1-content");
const subContent10 = document.querySelector(".th-2-content");
const subContent11 = document.querySelector(".f-1-content");
const subContent12 = document.querySelector(".f-2-content");
const subContent13 = document.querySelector(".sat-1-content");

const subContent1Button = document.querySelector(".m-1");
const subContent2Button = document.querySelector(".m-2");
const subContent3Button = document.querySelector(".t-1");
const subContent4Button = document.querySelector(".t-2");
const subContent5Button = document.querySelector(".t-3");
const subContent6Button = document.querySelector(".w-1");
const subContent7Button = document.querySelector(".w-2");
const subContent8Button = document.querySelector(".w-3");
const subContent9Button = document.querySelector(".th-1");
const subContent10Button = document.querySelector(".th-2");
const subContent11Button = document.querySelector(".f-1");
const subContent12Button = document.querySelector(".f-2");
const subContent13Button = document.querySelector(".sat-1");

const subContent1Close = document.querySelector(".close-m-1");
const subContent2Close = document.querySelector(".close-m-2");
const subContent3Close = document.querySelector(".close-t-1");
const subContent4Close = document.querySelector(".close-t-2");
const subContent5Close = document.querySelector(".close-t-3");
const subContent6Close = document.querySelector(".close-w-1");
const subContent7Close = document.querySelector(".close-w-2");
const subContent8Close = document.querySelector(".close-w-3");
const subContent9Close = document.querySelector(".close-th-1");
const subContent10Close = document.querySelector(".close-th-2");
const subContent11Close = document.querySelector(".close-f-1");
const subContent12Close = document.querySelector(".close-f-2");
const subContent13Close = document.querySelector(".close-sat-1");

handleSubcontent(subContent1, subContent1Button, subContent1Close);
handleSubcontent(subContent2, subContent2Button, subContent2Close);
handleSubcontent(subContent3, subContent3Button, subContent3Close);
handleSubcontent(subContent4, subContent4Button, subContent4Close);
handleSubcontent(subContent5, subContent5Button, subContent5Close);
handleSubcontent(subContent6, subContent6Button, subContent6Close);
handleSubcontent(subContent7, subContent7Button, subContent7Close);
handleSubcontent(subContent8, subContent8Button, subContent8Close);
handleSubcontent(subContent9, subContent9Button, subContent9Close);
handleSubcontent(subContent10, subContent10Button, subContent10Close);
handleSubcontent(subContent11, subContent11Button, subContent11Close);
handleSubcontent(subContent12, subContent12Button, subContent12Close);
handleSubcontent(subContent13, subContent13Button, subContent13Close);

function handleSubcontent(subContent, button, closeButton) {
    button.addEventListener("click", () => {
        subContent.classList.toggle("active");
    });
    closeButton.addEventListener("click", () => {
        subContent.classList.remove("active");
    });
}

const daysAndSubjects = {
    "m_1_content": "cc101",
    "m_2_content": "komfil",
    "t_1_content": "sts",
    "t_2_content": "pathfit",
    "t_3_content": "purcom",
    "w_1_content": "cc100",
    "w_2_content": "itnet",
    "w_3_content": "cc101",
    "th_1_content": "itnet",
    "th_2_content": "komfil",
    "f_1_content": "sts",
    "f_2_content": "mmw",
    "sat_1_content": "nstp"
};

for (const day in daysAndSubjects) {
    const element = document.getElementById(day);
    if (element) {
        element.style.whiteSpace = "pre-line";
        
        switch (daysAndSubjects[day]) {
            case "cc101":
                element.innerHTML = announcement.cc101;
                break;

            case "komfil":
                element.innerHTML = announcement.komfil;
                break;

            case "sts":
                element.innerHTML = announcement.sts;
                break;
                
            case "itnet":
                element.innerHTML = announcement.itnet;
                break;

            case "pathfit":
                element.innerHTML = announcement.pathfit;
                break;

            case "purcom":
                element.innerHTML = announcement.purcom;
                break;

            case "cc100":
                element.innerHTML = announcement.cc100;
                break;

            case "mmw":
                element.innerHTML = announcement.mmw;
                break;

            case "nstp":
                element.innerHTML = announcement.nstp;
                break;
            default:
                element.innerHTML = "";
                break;
        }
    }
}

// m2.style.whiteSpace = "pre-line";

// const weightInput = document.getElementById("weight");
// const heightInput = document.getElementById("height");
// const result = document.getElementById("bmi");
// const meaning = document.getElementById("meaning");

// weightInput.addEventListener("input", calculateBMI);
// heightInput.addEventListener("input", calculateBMI);

// function calculateBMI() {
//     const weight = parseFloat(weightInput.value);
//     const height = parseFloat(heightInput.value);

//     if (!isNaN(weight) && !isNaN(height) && height > 0) {
//         const bmi = weight / (height * height);
//         result.innerHTML = `Your BMI is: ${bmi.toFixed(3)}`;

//         if (bmi >= 30) {
//             meaning.innerHTML = "OBESE";
//         } else if (bmi >= 25 ) {
//             meaning.innerHTML = "OVERWEIGHT";
//         } else if (bmi >= 18.6) {
//             meaning.innerHTML = "NORMAL";
//         } else {
//             meaning.innerHTML = "UNDERWEIGHT";
//         }
//     } else {
//         result.innerHTML = "Enter Valid Weight and Height";
//     }

// }