// Check If There's Local Storage Color Option
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["11.jpg", "12.jpg", "13.jpg", "10.jpg", "9.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url 
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 10000);

  }

}

randomizeImgs();

$(window).scroll(function () {
        
    if ($(this).scrollTop() >= 700) {
        
        scrollButton.show();
        
    } else {
        
        scrollButton.hide();
    }
});    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
