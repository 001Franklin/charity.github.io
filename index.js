const navbar = document.getElementById("main-navbar")

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll")
  } else {
    navbar.classList.remove("navbar-after-scroll")
  }
})


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add fade-in class when elements scroll into view
function checkFadeIn() {
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  fadeInSections.forEach(section => {
      if (isInViewport(section)) {
          section.classList.add('fade-in');
      }
  });
}

// Listen for scroll events and check if elements should fade in
window.addEventListener('scroll', checkFadeIn);

// Initial check in case any sections are already in view
checkFadeIn();

// let currentProgress = 10;  // Start at 10%

// function makeDonation() {
//     if (currentProgress < 100) {
//         currentProgress += 10;  // Increase by 10% for each donation
//         if (currentProgress > 100) {
//             currentProgress = 100;
//         }
//         updateProgressBar();
//     }
// }

// function updateProgressBar() {
//     const progressBar = document.getElementById("progress-bar");
//     const progressText = document.getElementById("progress-text");

//     progressBar.style.width = currentProgress + "%";
//     progressText.innerText = currentProgress + "% of the goal reached";
// }

window.onload = function() {
  let currentProgress = 1;
  const maxProgress = 50;
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");

  const progressInterval = setInterval(() => {
      if (currentProgress <= maxProgress) {
          progressBar.style.width = currentProgress + "%";
          progressText.innerText = currentProgress + "% donated";
          currentProgress++;
      } else {
          clearInterval(progressInterval);  // Stop the interval once 50% is reached
      }
  }, 100);  // Adjust this value for a smoother or faster transition

  
}

window.onload = function() {
  // Set initial progress values for each card
  let progress1 = 0;
  let progress2 = 0;
  let progress3 = 0;
  
  const maxProgress = 50;  // Progress will go up to 50%
  
  const progressBar1 = document.getElementById("progress-bar-1");
  const progressText1 = document.getElementById("progress-text-1");
  
  const progressBar2 = document.getElementById("progress-bar-2");
  const progressText2 = document.getElementById("progress-text-2");
  
  const progressBar3 = document.getElementById("progress-bar-3");
  const progressText3 = document.getElementById("progress-text-3");

  const progressInterval = setInterval(() => {
      if (progress1 <= maxProgress) {
          progress1++;
          progressBar1.style.width = progress1 + "%";
          progressText1.innerText = progress1 + "% donated";
      }
      if (progress2 <= maxProgress) {
          progress2++;
          progressBar2.style.width = progress2 + "%";
          progressText2.innerText = progress2 + "% donated";
      }
      if (progress3 <= maxProgress) {
          progress3++;
          progressBar3.style.width = progress3 + "%";
          progressText3.innerText = progress3 + "% donated";
      }
      
      // Stop once all progress bars reach 50%
      if (progress1 === maxProgress && progress2 === maxProgress && progress3 === maxProgress) {
          clearInterval(progressInterval);
      }
  }, 50);  // Adjust this interval for speed
}
