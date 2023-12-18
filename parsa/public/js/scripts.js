new SmoothScroll('a[href*="#"]', {
  easing: "linear",
  speed: 1000,
});

new WOW().init();

$("#toggler").on("click", function () {
  var nav = $("#nav");
  var toggler = $("#toggler i");
  if (nav.css("right") === "0px") {
    nav.css("right", "-240px");
    toggler.removeClass("fa-times").addClass("fa-bars");
  } else {
    nav.css("right", "0");
    toggler.removeClass("fa-bars").addClass("fa-times");
  }
});

$(window).on("scroll load", function () {
  if ($(window).scrollTop() > 120) {
    $("#navbar")
      .css("background-color", "rgba(20 , 40 , 60 , 0.7)")
      .css("padding", "15px 40px");
  } else {
    $("#navbar")
      .css("background-color", "rgba(0 , 0 , 0 , 0)")
      .css("padding", "20px 40px");
  }

  if ($(window).scrollTop() > 250) {
    $("#go-to-top").css("opacity", "1").css("visibility", "visible");
  } else {
    $("#go-to-top").css("opacity", "0").css("visibility", "hidden");
  }
});

$(".counter").counterUp({
  delay: 10,
  time: 1500,
});

$("#skills-content").waypoint(
  function () {
    $(".progress .progress-bar").each(function () {
      var width = $(this).data("val");
      $(this).css("width", width + "%");
    });
  },
  { offset: "80%" },
);

lightbox.option({
  resizeDuration: 300,
  albumLabel: "تصویر %1 از %2",
});

var portfolio = $("#portfolio-container").isotope({
  originLeft: false,
});

$("#portfolio-filter li").on("click", function () {
  $("#portfolio-filter li").removeClass("filter-active");
  $(this).addClass("filter-active");

  portfolio.isotope({
    filter: $(this).data("filter"),
  });
});

portfolio.on("arrangeComplete", function () {
  if ($(window).scrollTop() % 2 == 0)
    $(window).scrollTop($(window).scrollTop() - 1);
  else {
    $(window).scrollTop($(window).scrollTop() + 1);
  }
});

$(".owl-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  rtl: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    },
  },
});
var currentScreenSize = null;

function checkScreenSize() {
  var video1 = document.getElementById("video1");
  var video2 = document.getElementById("video2");

  if (window.matchMedia("(min-width: 100px) and (max-width: 450px)").matches) {
    // For screen sizes between 100px and 450px
    if (currentScreenSize !== "small") {
      video1.play();
      video2.pause();
      video2.style.display = "none";
      video1.style.display = "block";
      currentScreenSize = "small";
    }
  } else if (
    window.matchMedia("(min-width: 451px) and (max-width: 1200px)").matches
  ) {
    // For screen sizes between 451px and 1200px
    if (currentScreenSize !== "medium") {
      video1.pause();
      video2.play();
      video1.style.display = "none";
      video2.style.display = "block";
      currentScreenSize = "medium";
    }
  } else {
    // For other screen sizes
    if (currentScreenSize !== "none") {
      video1.pause();
      video2.pause();
      video1.style.display = "block";
      video2.style.display = "block";
      currentScreenSize = "none";
    }
  }
}

// Call the function on page load and whenever the screen size changes
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
