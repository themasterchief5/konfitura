const circleOne = document.getElementById("circle1");
const circleTwo = document.getElementById("circle2");
const circleThree = document.getElementById("circle3");
const circleFour = document.getElementById("circle4");
const circleFive = document.getElementById("circle5");
const cakeLore = document.getElementById("cake-text-space");
const cakeImg = document.getElementById("cakes-img");
const torty = document.getElementById("torty");
const theImg = document.getElementById("cake-single-img")

circleOne.addEventListener('mouseover', () => {
    cakeImg.style.height = "17vw";
    const heightInPx = (17 / 100) * window.innerWidth;
    if (heightInPx < 120) cakeImg.style.height = "0";
    torty.style.backgroundColor = "rgba(0,0,0,0.6)"; //kolor popraw
    cakeLore.textContent = "Ciasto pistacjowe – Delikatne i aromatyczne, z dodatkiem prawdziwych pistacji, które nadają mu wyjątkowego smaku i orzechowego charakteru. Idealne dla miłośników subtelnych słodkości.";
    theImg.src = "imgs/pistacjaprzekroj.png";
    torty.style.borderColor="#6E8E59"
});
circleTwo.addEventListener('mouseover', () => {
    cakeImg.style.height = "17vw";
    const heightInPx = (17 / 100) * window.innerWidth;
    if (heightInPx < 120) cakeImg.style.height = "0";
    torty.style.backgroundColor = "rgba(0,0,0,0.6)"; //kolor popraw
    cakeLore.textContent = "Ciasto czekoladowe – Wilgotne, intensywnie czekoladowe, rozpływające się w ustach. Doskonałe na każdą okazję, dla prawdziwych fanów czekolady.";//opis popraw
    theImg.src = "imgs/czekoprzekroj.png";
    torty.style.borderColor="#7C444F";
});
circleThree.addEventListener('mouseover', () => {
    cakeImg.style.height = "17vw";
    const heightInPx = (17 / 100) * window.innerWidth;
    if (heightInPx < 120) cakeImg.style.height = "0";
    torty.style.backgroundColor = "rgba(0,0,0,0.6)"; //kolor popraw
    cakeLore.textContent = "Sernik – Kremowy i lekki, na delikatnym spodzie, z dodatkiem wanilii lub owoców. Klasyczna propozycja, która zawsze zachwyca.";
    theImg.src = "imgs/sernikprzekroj.png";//opis popraw
    torty.style.borderColor="#FFFFFF";
});
circleFour.addEventListener('mouseover', () => {
    cakeImg.style.height = "17vw";
    const heightInPx = (17 / 100) * window.innerWidth;
    if (heightInPx < 120) cakeImg.style.height = "0";
    torty.style.backgroundColor = "rgba(0,0,0,0.6)"; //kolor popraw
    cakeLore.textContent = "Tiramisu – Włoski deser na bazie biszkoptów nasączonych kawą, przełożonych aksamitnym kremem mascarpone i oprószonych kakao. Pełne elegancji i smaku.";
    theImg.src = "imgs/tirumisuprzekroj.png";//opis popraw
    torty.style.borderColor="#9F5255";
});
circleFive.addEventListener('mouseover', () => {
    cakeImg.style.height = "17vw";
    const heightInPx = (17 / 100) * window.innerWidth;
    if (heightInPx < 120) cakeImg.style.height = "0";
    torty.style.backgroundColor = "rgba(0,0,0,0.6)"; //kolor popraw
    cakeLore.textContent = "Ciasto owocowe – Pełne świeżych, soczystych owoców, które idealnie komponują się z lekkim, puszystym ciastem. Świeżość i słodycz w jednym kawałku.";//opis popraw
    theImg.src = "imgs/owocoweprzekroj.png";
    torty.style.borderColor="#C84C05";
});



function cakeReset(){
    cakeImg.style.height = "0px";
    cakeLore.textContent = "Najedź na kółko z ciastem aby dowiedzieć się o nim więcej";
    torty.style.borderColor="rgb(217, 201, 154)";
    torty.style.color="#FEF9E1";
    torty.style.backgroundColor="rgba(210,190,160,0.3)";
    
}
cakeReset();
