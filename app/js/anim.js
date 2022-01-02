var moreInfoBnt = document.querySelector(".btn-more-info");
moreInfoBnt.addEventListener("click", function () {
  var mainInfo = document.querySelector(".main-info-hr");
  mainInfo.scrollIntoView({
    behavior: "smooth",
    top: 2000,
  });
});
