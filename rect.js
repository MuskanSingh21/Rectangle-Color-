var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  var rectanglelocation = rect.getBoundingClientRect();
  var insideretval = details.clientX - rectanglelocation.left;

  if (insideretval < rectanglelocation.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      255,
      0,
      insideretval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      rectanglelocation.width / 2,
      rectanglelocation.width,
      0,
      255,
      insideretval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
