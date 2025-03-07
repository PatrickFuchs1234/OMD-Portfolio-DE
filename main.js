$('.slider-container').slick({
  autoplay: true,        // Do we want it to autoplay? true or false
	autoplaySpeed: 2000,   // How long between each slide when autoplaying
	speed: 500,            // How fast is the transition 
  arrows: true,          // Do you want to show arrows to trigger each slide
  accessibility: true,   // Enables tabbing and arrow key navigation 
  dots: true,            // Enables the dots below to show how many slides
  fade: false,           // Changes the animate from slide to fade if true
  infinite: true,       // When true, means that it will scroll in a circle
  pauseOnHover: true,   // When true means the autoplay pauses when hovering
  pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Cookie Banner Skript

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}

function runCookiedCodes() {
  // Add tracking scripts here
  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TTER589G1V');
   // End tracking scripts

  console.log("cookies ran");
}

if (readCookie("cookie-notice-accepted") == "true") {
  runCookiedCodes();
document.querySelector(".reshow-button").classList.add("hide-button");
  
} else {
  
  document.getElementById("cookie-notice").style.display = "block";
}

document
  .getElementById("cookie-notice-accept")
  .addEventListener("click", function () {
    createCookie("cookie-notice-accepted", "true", 31);
    document.getElementById("cookie-notice").style.display = "none";
    document.getElementById("cookie-notice").classList.add("hide-button");
    runCookiedCodes();
  });

document
  .querySelector("#close-cookie-banner")
  .addEventListener("click", (e) => {
    eraseCookie("cookie-notice-accepted")
    document.getElementById("cookie-notice").style.display = "none";

    console.log("cookies erased")
  });

document.querySelector(".reshow-button")
  .addEventListener("click", function() {
  document.getElementById("cookie-notice").style.display = "block";
})
  