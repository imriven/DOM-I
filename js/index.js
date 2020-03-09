const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navbar = document.querySelector("nav");
Array.from(navbar.children).forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i + 1}`]
})

/*
navbar.children[0].textContent = siteContent.nav["nav-item-1"]
*/

let ctaHeading = document.querySelector('h1');
ctaHeading.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])


let topTextHead = document.querySelector("div.top-content div.text-content:nth-child(1) h4");
topTextHead.textContent = siteContent["main-content"]["features-h4"]

let topTextContent = document.querySelector("div.top-content div.text-content:nth-child(1) p");
topTextContent.textContent = siteContent["main-content"]["features-content"]

let topTextHead2 = document.querySelector("div.top-content div.text-content:nth-child(2) h4");
topTextHead2.textContent = siteContent["main-content"]["about-h4"]

let topTextContent2 = document.querySelector("div.top-content div.text-content:nth-child(2) p");
topTextContent2.textContent = siteContent["main-content"]["features-content"]

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomTextHead = document.querySelector("div.bottom-content div.text-content:nth-child(1) h4");
bottomTextHead.textContent = siteContent["main-content"]["services-h4"]

let bottomTextContent = document.querySelector("div.bottom-content div.text-content:nth-child(1) p");
bottomTextContent.textContent = siteContent["main-content"]["services-content"]

let bottomTextHead2 = document.querySelector("div.bottom-content div.text-content:nth-child(2) h4");
bottomTextHead2.textContent = siteContent["main-content"]["product-h4"]

let bottomTextContent2 = document.querySelector("div.bottom-content div.text-content:nth-child(2) p");
bottomTextContent2.textContent = siteContent["main-content"]["product-content"]

let bottomTextHead3 = document.querySelector("div.bottom-content div.text-content:nth-child(3) h4");
bottomTextHead3.textContent = siteContent["main-content"]["vision-h4"]

let bottomTextContent3 = document.querySelector("div.bottom-content div.text-content:nth-child(3) p");
bottomTextContent3.textContent = siteContent["main-content"]["vision-content"]

let contactAreaTitle = document.querySelector("section.contact h4");
contactAreaTitle.textContent = siteContent.contact["contact-h4"]

let contactAreaAddress = document.querySelectorAll("section.contact p");
contactAreaAddress[0].textContent = siteContent.contact.address

let contactPhone = document.querySelectorAll("section.contact p");
contactPhone[1].textContent = siteContent.contact.phone

let contactEmail = document.querySelectorAll("section.contact p");
contactEmail[2].textContent = siteContent.contact.email

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright

const navbarColor = document.querySelectorAll('nav a');
navbarColor.forEach(element => element.style.color = "green")

const newLink1 =  document.createElement("a");
newLink1.textContent = "New Link 1"
const parentElement = document.querySelector("nav")
parentElement.appendChild(newLink1)

const newLink2 =  document.createElement("a");
newLink2.textContent = "New Link 2"
const parentElement2 = document.querySelector("nav")
parentElement2.prepend(newLink2)

//Stretch 

const titleStyle = document.querySelector('.cta h1');
titleStyle.style.color = "slateBlue"
titleStyle.style.textShadow = "2px 2px 8px red"


const buttonStyle = document.querySelector('.cta button');
buttonStyle.style.backgroundImage = "linear-gradient(50deg, lightGreen, #788DDE, blue)"
buttonStyle.style.boxShadow = "2px 2px 8px red"

const imgStyle = document.querySelector('.cta img');
imgStyle.style.borderRadius = "100%"
imgStyle.style.boxShadow = "6px 6px 8px #788DDE"


const imgStyle2 = document.querySelector('.main-content img');
imgStyle2.style.boxShadow = "5px 5px 8px #788DDE"