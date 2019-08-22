

myApp = {};
// this is the main function that takes users away from landing page
myApp.submitLandingForm = function(){
    $('.landingPage form').on('submit', function(event){
        let userName = $('input').val();
        if (userName !== '') {
            event.preventDefault();
            console.log(userName);
            $('.landingPage').addClass('hideLanding');
            $('main').removeClass('hideMain');
            $('.mainHed').append(`<h2>Right, of course. So, ${userName}, have you voted yet?</h2>`);
            $('.mainHed').append(`<h3>(Answer honestly. This choice has dire consequences, ${userName}.)</h3>`);
        }
        else {
            event.preventDefault();
            $('form').append(`<h3>YOU NEED TO USE A NAME. COME ON. FOLLOW THE INSTRUCTIONS.</h3>`)
        }
    })
    }
    // this function is what happens when user either clicks yes or no on main page
myApp.userPressedYes = function(event){
    $('.mainButtons input.yesButton').on('click', function(){
        $('.yesQuestion1').removeClass('hideQuiz');
    })
}


myApp.init = function(){
    myApp.submitLandingForm();
    myApp.userPressedYes()
}

$(document).ready(function(){
    myApp.init();
    let scroll = new SmoothScroll('a[href*="#"]');
})

// set up a prompt asking for user's name on page load.

// save that name as a variable to be used in the H1, which should read 'Have you voted yet, ${userName}?`
// Set up an event listener for the YES button being submitted
// when pressed, YES should slide the other button away/out of the DOM.
// pressing YES should also smooth scroll down the page. 
// pressing YES should also set off a sound and animation
// Fade in elements already set up in the HTML markup, like images, headings and paragraphs.
// the YES button should also add links to share the website.



// the NO button, when clicked, will fade out the YES button.
// It will then smooth scroll down the page.
// pressing NO will also set off a sound and animation.
// It should then fade in elements already in the html markup