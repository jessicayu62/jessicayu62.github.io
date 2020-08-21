//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// $(document).scroll(function () {
//     //Show element after user scrolls 800px
//     var y = $(this).scrollTop();
//     if (y > 0) {
//         $('.bottomMenu').fadeIn();
//     } else {
//         $('.bottomMenu').fadeOut();
//     }

//     // Show element after user scrolls past 
//     // the top edge of its parent 
//     $('.container').each(function () {
//         // var t = $(this).parent().offset().top;
//         if (y > 100) {
//             $(this).fadeIn();
//         } else {
//             $(this).fadeOut();
//         }
//     });
// });