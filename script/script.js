const preloaderPage = document.querySelector('.preloader')
const preloaderContent = document.querySelector('.preloader-mask')

window.onload = function (){
    preloaderPage.classList.add('preloader-hidden') 
}

gsap.to(document.querySelectorAll('.service-row'),{
    opacity: 1,
    stagger: .1,
    duration: .4,
    opacity: 1
})

const haircut = document.querySelector(".woman-haircut");
const hairStyling = document.querySelector(".hair-styling");
const hairTwist = document.querySelector(".hair-twist")
const hardLevel = document.querySelector(".hard-level")
const hairBraiding = document.querySelector(".hair-braiding")
const hairCut = document.querySelector(".haircut")
const mensHaircut = document.querySelector(".mens-haircut")
const HairStraightening = document.querySelector(".Hair-straightening")
const SpaForHair = document.querySelector(".spa-for-hair")
const HairPaint = document.querySelector('.hair-paint')
const HairPaintClient = document.querySelector(".hair-paint-client")
const highlighting = document.querySelector(".highlighting")
const manicure = document.querySelector(".manicure")
const solarium = document.querySelector(".solarium")

const womanHairCut = document.getElementById('1');
const hairStylingScroll = document.getElementById('2')
const hairTwistScroll = document.getElementById('3')
const hardLevelScroll = document.getElementById("4")
const hairBraidingScroll = document.getElementById("5")
const hairCutScroll = document.getElementById("6")
const mensHaircutScroll = document.getElementById("7")
const HairStraighteningScroll = document.getElementById("8")
const SpaForHairScroll = document.getElementById("9")
const hairPaintScroll = document.getElementById("10")
const hairPaintClientScroll = document.getElementById("11")
const highlightingScroll = document.getElementById("12")
const manicureScroll = document.getElementById("13")
const solariumScroll = document.getElementById("14")


function handleButtonClick() {
    haircut.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairStylingYakor() {
    hairStyling.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairTwistYakor() {
    hairTwist.scrollIntoView({block: "center", behavior: "smooth"});
}
function hardLevelYakor() {
    hardLevel.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairBraidingYakor() {
    hairBraiding.scrollIntoView({block: "center", behavior: "smooth"});
}
function hairCutYakor() {
    hairCut.scrollIntoView({block: "center", behavior: "smooth"});
}
function mensHaircutYakor() {
    mensHaircut.scrollIntoView({block: "center", behavior: "smooth"});
}
function HairStraighteningYakor (){
    HairStraightening.scrollIntoView({block: "center", behavior: "smooth"});
}
function SpaForHairYakor (){
    SpaForHair.scrollIntoView({block: "center", behavior: "smooth"});
}
function HairPaintYakor (){
    HairPaint.scrollIntoView({block: "center", behavior: "smooth"});
}
function HairPaintClientYakor (){
    HairPaintClient.scrollIntoView({block: "center", behavior: "smooth"});
}
function highlightingYakor (){
    highlighting.scrollIntoView({block: "center", behavior: "smooth"});
}
function manicureYakor (){
    manicure.scrollIntoView({block: "center", behavior: "smooth"});
}
function solariumYakor (){
    solarium.scrollIntoView({block: "center", behavior: "smooth"});
}


womanHairCut.addEventListener('click', handleButtonClick);
hairStylingScroll.addEventListener('click', hairStylingYakor);
hairTwistScroll.addEventListener('click', hairTwistYakor);
hardLevelScroll.addEventListener('click', hardLevelYakor);
hairBraidingScroll.addEventListener('click', hairBraidingYakor);
hairCutScroll.addEventListener('click', hairCutYakor);
mensHaircutScroll.addEventListener('click', mensHaircutYakor);
HairStraighteningScroll.addEventListener('click', HairStraighteningYakor);
SpaForHairScroll.addEventListener('click', SpaForHairYakor);
hairPaintScroll.addEventListener('click', HairPaintYakor);
hairPaintClientScroll.addEventListener('click', HairPaintClientYakor);
highlightingScroll.addEventListener('click', highlightingYakor);
manicureScroll.addEventListener('click', manicureYakor);
solariumScroll.addEventListener('click', solariumYakor);

// parallax block, array and function

var previewBlock = document.getElementsByTagName('body')


let arrayParallaxRight = [document.querySelectorAll('.parallax-right')]
let arrayParallaxLeft = [document.querySelectorAll('.parallax-left')]

let arrayLeftSecondLvl = arrayParallaxLeft[0]
let arrayRightSecondLvl = arrayParallaxRight[0]


let userScrollAnimation;

function userScrollTitle () {
    userScrollRight = window.pageYOffset / 10;
    userScrollleft = window.pageYOffset / 6;
    for (let i = 0; i < arrayRightSecondLvl.length; i++) {
        arrayRightSecondLvl[i].style.transform = `translateY(${-userScrollRight}px)`
      }
      for (let i = 0; i < arrayLeftSecondLvl.length; i++) {
        arrayLeftSecondLvl[i].style.transform = `translateY(${-userScrollleft}px)`
      }

    userScrollAnimation = requestAnimationFrame(userScrollTitle);
    //console.log(userScrollRight)
}
userScrollTitle(0);

    //gallery look

    

const galleryBtn = document.querySelector('.gallery-btn')

let mainPage = document.querySelector('.main-price')

function addACtive(){
    if (event.target.closest('.gallery-btn')){
        event.target.classList.toggle('btn-active')
        mainPage.classList.toggle('hidden-visibility')
        for (let i = 0; i < arrayLeftSecondLvl.length; i++) {
            arrayLeftSecondLvl[i].classList.toggle('gallery-left-photo')
        }
        for (let i = 0; i < arrayRightSecondLvl.length; i++) {
            arrayRightSecondLvl[i].classList.toggle('gallery-right-photo')
        }
    }
};

galleryBtn.addEventListener('click', addACtive)

