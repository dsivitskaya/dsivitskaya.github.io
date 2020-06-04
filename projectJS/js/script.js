//плагин для слайдера css в header-slider.css
$(function () {
  $(".header-slider").slick({
    arrows: true,
    dots: true,
    speed: 1000,
    easing: "ease",
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
  });
//функция jQuery для бургер-меню на экране меньше 470px, css в style-media.css
  $(".header-burger").click(function (event) {
    $(".header-burger,.header-nav,.header-form").toggleClass("active");
  });
});

// js для подсказок при клике на слово
window.onload = function () {
  var textSocksInfo = document.querySelectorAll(".main-socks-info__block > p");
  textSocksInfo.forEach(function (elem, i) {
    if (textSocksInfo[i].getElementsByTagName("span")[0].dataset.tooltip) {
        textSocksInfo[i].getElementsByTagName("span")[0].style.fontWeight = "600";
        textSocksInfo[i].getElementsByTagName("span")[0].onclick = showTooltip;
    }
  });
  function showTooltip() {
    var obj = this;
    var elem = document.getElementById("podskazka");
    var txtTooltip = obj.dataset.tooltip;
   
    if (txtTooltip) {
      elem.style.display = "block";
      elem.style.top = obj.offsetTop + 20 + "px";
      elem.style.left = obj.offsetLeft + 10 +  "px";
      elem.style.borderRadius = 5 + "px";
      elem.innerHTML = txtTooltip;
      elem.onclick = function () {
        this.style.display = "none";
      };
    }
  }
};
