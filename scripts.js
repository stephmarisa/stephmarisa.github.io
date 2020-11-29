
// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//       $(".zoom img").css({
//           width:(100+scroll/5)+"%"
//       });
//   });

AOS.init({
    duration: 1200,
  })

window.onscroll = function() {myFunction()};

const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const { target } = entry;
    console.log(entry, target)
    
    if (entry.intersectionRatio >= 0.25) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});

window.onload(removeClass());