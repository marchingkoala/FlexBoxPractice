
const bestseller = document.getElementsByClassName('bestsellerButton')[0];
const skincare = document.getElementsByClassName('skincareButton')[0];
const fragrance = document.getElementsByClassName('fragranceButton')[0];
const mainphotoOne = document.getElementsByClassName("rose_photo")[0];
const mainphotoTwo = document.getElementsByClassName("chanel_photo")[0];
const dropdown = document.getElementsByClassName('mobile-menu')[0];
const shopall = document.getElementsByClassName("shopAllButton")[0];
const contact = document.getElementsByClassName('contactButton')[0];

bestseller.addEventListener("click", changeImage);
skincare.addEventListener('click', changeImage);
fragrance.addEventListener('click', changeImage);
dropdown.addEventListener('change', changeImage);
shopall.addEventListener('click', changeImage);

//when a menu option is clicked it replaces two main images on the main
// each menu option will have an event listener with a function that will change the photo
// function will dive into the main photo and replace img src link

function changeImage(event){
  let target = event.target;
  if ((header.style.color === "white")) {
    if (
      target.className === "bestsellerButton" ||
      target.value === "moBest"
       ) {
      mainphotoOne.src = "https://i.postimg.cc/KYHCP2p5/2-1.jpg";
      mainphotoTwo.src = "https://i.postimg.cc/FzjqXJrP/2-2.jpg";
       } else if (
      target.className === "skincareButton" ||
      target.value === "moSkin"
       ) {
      mainphotoOne.src = "https://i.postimg.cc/FKR2kRpR/1-1.png";
      mainphotoTwo.src = "https://i.postimg.cc/Y9LZ8sJB/1-2.jpg";
       } else if (
      target.className === "fragranceButton" ||
      target.value === "moFrag"
       ) {
      mainphotoOne.src = "https://i.postimg.cc/ryW7r71S/3-1.jpg";
      mainphotoTwo.src = "https://i.postimg.cc/j2V91hbw/3-2.jpg";
       } else if (
      target.className === "shopAllButton" ||
      target.value === "dropdowns"
       ) {
      mainphotoOne.src = "https://i.postimg.cc/ZnTkRRvw/dark1.jpg";
      mainphotoTwo.src = "https://i.postimg.cc/28SRN1D6/dark2.jpg";
       }
  } else {
    if (target.className === "bestsellerButton" || target.value === "moBest") {
      mainphotoOne.src = "https://i.postimg.cc/W3mLTrzD/beseseller2.jpg";
      mainphotoTwo.src = "https://i.postimg.cc/WzSBJvMT/bestseller1.jpg";
    } else if (
      target.className === "skincareButton" ||
      target.value === "moSkin"
    ) {
      mainphotoOne.src = "https://i.postimg.cc/RZ2jtGn6/skincare1.png";
      mainphotoTwo.src = "https://i.postimg.cc/gkt9zGzK/skincare2.jpg";
    } else if (
      target.className === "fragranceButton" ||
      target.value === "moFrag"
    ) {
      mainphotoOne.src = "https://i.postimg.cc/QdF2VvVZ/perfume2.jpg";
      mainphotoTwo.src = "https://i.postimg.cc/QMrfszTb/perfume2.png";
    } else if (
      target.className === "shopAllButton" ||
      target.value === "dropdowns"
    ) {
      mainphotoOne.src =
        "https://i.postimg.cc/Prx5y6gG/photo-1518895949257-7621c3c786d7.jpg";
      mainphotoTwo.src =
        "https://i.postimg.cc/L4vszd0B/80eb1bf2b3b20b6799635301447b6481.jpg";
    }
  }

}



// ======= DARK MODE ========= 

const changebutton = document.getElementsByClassName('click')[0];
const header = document.getElementsByTagName('h1')[0];
const background = document.getElementsByTagName('body')[0];
const letter = document.getElementsByClassName("text_main")[0];
const textTitle = document.getElementsByClassName("text_title")[0]
const secondbody = document.getElementById("about");
const ending = document.getElementById("ending");





changebutton.addEventListener("click", darkmode);


function darkmode(event){
let target = event.target;
if ( target.className === 'click'){
    header.innerHTML = `The Apothecary`
    header.style.color = 'white';
    bestseller.style.color = 'white';
    skincare.style.color = 'white';
    fragrance.style.color = 'white';
    shopall.style.color = 'white';
    contact.style.color = 'white';
    background.style.backgroundColor = 'black';
    letter.style.color = 'white';
    letter.innerHTML =
      'Do not Send help because this is working out very well. Darkness everywhere, that is what I want. Come in. I am sure our shop carries something of your desier. For love potions, please contact us. Please keep in mind that We do not take working currency for love potions';
    textTitle.style.color = 'white';
    textTitle.innerHTML = 'Welcome to the Dark Side'
    changebutton.style.color = 'white';
    changebutton.innerHTML = 'No turning back now'
    mainphotoOne.src = 'https://i.postimg.cc/ZnTkRRvw/dark1.jpg';
    mainphotoTwo.src = 'https://i.postimg.cc/28SRN1D6/dark2.jpg';
    secondbody.style.backgroundColor = "dimgray";
    document.getElementsByClassName('second_title')[0].style.color = 'white';
    document.getElementsByClassName('abouttext')[0].style.color = 'white';
    document.getElementsByClassName("firstprod")[0].src =
      "https://i.postimg.cc/T1kjZd8y/Gothic-Antiques-Jewelry-Vintage-Victorian-Occult-Decor.jpg";
    document.getElementsByClassName("secondprod")[0].src =
      "https://i.postimg.cc/C5MHPZ2T/image.jpg";
    document.getElementsByClassName("thirdprod")[0].src =
      "https://i.postimg.cc/ryg9dJd8/Underwater.jpg";
    document.getElementsByClassName("fourthprod")[0].src =
      "https://i.postimg.cc/MTmmm0dm/image.jpg";
    document.getElementsByClassName('per_name')[0].innerHTML = "Crystal";
    document.getElementsByClassName("per_name")[1].innerHTML = "Wild Nymph"
    document.getElementsByClassName("per_name")[2].innerHTML = "Water Fairy"
    document.getElementsByClassName("per_name")[3].innerHTML = "Mana Potion"
    document.getElementsByClassName("per_name").style.color = "white";
    ending.style.backgroundColor = "dimgray";
    dropdown.style.backgroundColor = "black";
}
}
