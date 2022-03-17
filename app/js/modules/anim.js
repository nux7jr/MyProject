const animation = () => {
  const moreInfoBnt = document.querySelector(".btn-more-info");
  moreInfoBnt.addEventListener("click", function () {
    const mainInfo = document.querySelector(".main-info-hr");
    mainInfo.scrollIntoView({
      behavior: "smooth",
      top: 2000,
    });
  });
};
animation();
