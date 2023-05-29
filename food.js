const closeIcon = document.querySelector(".fa-x");
const hamburgerIcon = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const box = document.querySelectorAll(".sec2-box1");
const eyeIcon = document.querySelectorAll(".sec2-icons");
const hambBg = document.querySelectorAll(".hamburger-menu a")
const activeList = document.querySelectorAll(".nav li")
const searchConatiner = document.querySelector(".searchConatiner");
const closeIcon2 = document.querySelector(".fa-xmark");
const searchIcon = document.querySelector(".header-icon1");

/*   search remove         */

searchIcon.addEventListener("click", () => {
  searchConatiner.classList.add("activeicon");
});
closeIcon2.addEventListener("click", () => {
  searchConatiner.classList.remove("activeicon");
});


/* responsive  */

closeIcon.addEventListener("click", () => {
  hamburgerMenu.style.right = "-200vw";
});

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.style.right = "0";
});

/*    mouseover icon          */

box.forEach((icon) => {
  eyeIcon.forEach((item) => {
    icon.addEventListener("mouseover", () => {
      const boxsId = icon.getAttribute("id");
      const iconsId = item.getAttribute("id");
      if (boxsId == iconsId) {
        item.style.display = "flex";
      }
    });
  });
});

box.forEach((icon) => {
  eyeIcon.forEach((item) => {
    icon.addEventListener("mouseout", () => {
      const boxsId = icon.getAttribute("id");
      const iconsId = item.getAttribute("id");
      if (boxsId == iconsId) {
        item.style.display = "none";
      }
    });
  });
});

/*  hamburger background    remove       */ 

hambBg.forEach((list) =>{
  console.log(list)
  list.addEventListener("click",()=>{
    console.log("click")
     hamburgerMenu.style.right = "-200vw";
  })
})



/*      navbar active class          */

activeList.forEach((color) => {
  color.addEventListener("click", () => {
    activeList.forEach((color) => {
      color.classList.remove("active");
    });
    color.classList.add("active");
  });
});