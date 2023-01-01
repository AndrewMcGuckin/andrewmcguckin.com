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
  
  const darkToggleBtn = document.getElementById("dark-toggle");
  
  const toggleSwitch = document.getElementById("theme-switch")
  
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
  const currentTheme = localStorage.getItem("theme");
  
  function darkMode(){
  
    //on page load
    let dark = checkDarkMode();
    let toggle = checkTogglePosition();
  
    if(!checkTogglePosition()) {
      document.documentElement.classList.add('dark');
      toggleSwitch.classList.replace("btn-left", "btn-right");
      console.log("dark on");
    }
    else if(checkTogglePosition()) { document.documentElement.classList.remove('dark'); console.log("dark off")}
    
  
  
    //dark mode off + button left = enable dark mode
  
    /* if(!checkTogglePosition()) {
      console.log("Enabling Dark mode....")
      console.log("Dark mode: " + dark + " Button position: " + toggle)
      
      document.documentElement.classList.add("dark");
      toggleSwitch.classList.replace("btn-left", "btn-right");
  
      console.log("Dark Mode enabled: " + checkDarkMode() + " Button position: " + checkTogglePosition());
    }
    else {
      console.log("Disabling dark mode...")
      console.log("Dark mode: " + dark + " Button position: " + checkTogglePosition())
  
      document.documentElement.classList.remove("dark");
      toggleSwitch.classList.replace("btn-right", "btn-left");
  
      console.log("Dark mode disabled: " + checkDarkMode() + " Button position: " + checkTogglePosition())
  
    } */
  
    //dark mode on + button right = disable dark mode
    
  
    
  
  
  
    //button right - dark mode
  
  
    /* if(dark) { 
      document.documentElement.classList.toggle("dark");
      console.log(dark);
      console.log("dark mode off");
    } 
    else { 
      document.documentElement.classList.add("dark")
      console.log(dark);
      console.log("dark mode on");
    }; */
  
    //toggle is off by default, class doesn't contain dark mode
    //find what position the toggle is in
      //if it is at "left" meaning off and dark is not present then light mode is enabled
      //if it is at left meaning off but dark is present, dark mode is on but toggle is at wrong position and must be moved
  
    //if toggle is at the right and dark mode is in body, dark mode is on
    //if toggle is at the right but light mode is on, toggle must be moved back to the left.
  
      //Toggle will change mode no matter which side it is currently on, an extra check of what side the toggle is on is needed
      //Add support for automatic switching based on browser preference
      //Add support for user preference to be stored locally and retrieved on page load.
  
  }
  
  function checkTogglePosition() {
  
      if(toggleSwitch.classList.contains("btn-left")){
        //btn is at the left position so dark mode is off
        return false;
      }
      else if(toggleSwitch.classList.contains("btn-right")) {
        //btn is at the right position so dark mode is on
        return true;
      }
  
    }
  
    function checkDarkMode() { 
  
      if(document.documentElement.classList.contains("dark")){ return true; }
      else { return false;}
  
    }
  
  
  
  /* if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme'); */
  
  /* darkToggleBtn.addEventListener("click", function() {
  
    /* if(toggleSwitch.classList.contains("unchecked")) {
  
      document.documentElement.classList.add("dark");
      //toggleSwitch.classList.replace("unchecked", "checked");
      console.log("dark mode enabled");
      localStorage.theme = 'dark';
  
    } else {
      document.documentElement.classList.replace("dark", "light");
      //toggleSwitch.classList.replace("checked", "unchecked");
      console.log("dark mode disabled");
      localStorage.theme = 'light';
    } */
  
    /* if (prefersDarkScheme.matches) {
  
      document.documentElement.classList.add('dark');
      console.log(toggleSwitch.classList.replace("unchecked", "checked"));
      var theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      var theme = 'light';
    }
  
    localStorage.setItem("theme", theme); */
  
  /* }) */