document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", mobile);
  window.addEventListener("resize", mobile);

  function mobile() {
    let wide = window.screen.width;
    var icon = document.getElementById("icon-container-2");
    var hamburger_container = document.getElementById("menu-container");
    console.log(wide);
    if (wide < 796) {
      icon.innerHTML = `<i class="fa-solid fa-bars fa-5x" style="color: #237262;"></i>`;
      hamburger_container.style.display = "none";
    } else {
      hamburger_container.innerHTML = ` <div class="menu-item"><a href="#home">Home</a></div>
                    <div class="menu-item"><a href="#about">About</a></div>
                    <div class="menu-item"><a href="#shop">Shop</a></div>
                    <div class="menu-item"><a href="#contact">Contact Us</a></div>`;

      icon.innerHTML = ``;
      hamburger_container.style.display = "flex";
      this.document.getElementById("mobile-view").innerHTML = ``;
    }
    //   hamburger_container.style.display = "flex";
    //   hamburger_container.style.justifyContent = "flex-end";
  }

  // function toggle() {
  //   console.log("ds");
  //   count++;
  //   var icon = document.getElementById("icon-container");
  //   var container = document.getElementById("mobile-view");
  //   if (count % 2 !== 0) {
  //     container.innerHTML = `<div class="menu-item"><a href="#home">Home</a></div>
  //                   <div class="menu-item"><a href="#about">About</a></div>
  //                   <div class="menu-item"><a href="#shop">Shop</a></div>
  //                   <div class="menu-item"><a href="#contact">Contact Us</a></div>`;
  //     container.style.opacity = 1;
  //     icon.innerHTML = `<i class="fa-solid fa-xmark fa-5x" style="color: #237262;" onclick=${toggle()}></i>
  //   <i class="fa-solid fa-magnifying-glass fa-5x" style="color: #237262;"></i>
  //               <i class="fa-solid fa-cart-shopping fa-5x" style="color: #237262;"></i>`;
  //   } else {
  //     container.innerHTML = ``;
  //     container.style.opacity = 0;
  //     icon.innerHTML = `<i class="fa-solid fa-bars fa-5x" style="color: #237262;" onclick=${toggle()}></i>
  //   <i class="fa-solid fa-magnifying-glass fa-5x" style="color: #237262;"></i>
  //               <i class="fa-solid fa-cart-shopping fa-5x" style="color: #237262;"></i>`;
  //   }
  // }
});
