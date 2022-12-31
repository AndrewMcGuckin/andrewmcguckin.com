function toggleMobileNav(){

    var toggle = document.getElementById("mobile-nav");
    var openNavToggle = document.getElementById("open-nav");
    var closeNavToggle = document.getElementById("close-nav");
    if (toggle.classList.contains("hidden") && openNavToggle.classList.contains("block")) {
      toggle.classList.replace("hidden","md:hidden");
      openNavToggle.classList.replace("block", "hidden");
      closeNavToggle.classList.replace("hidden", "block");
    } else {
      toggle.classList.replace("md:hidden", "hidden");
      openNavToggle.classList.replace("hidden", "block");
      closeNavToggle.classList.replace("block", "hidden");
    }
}