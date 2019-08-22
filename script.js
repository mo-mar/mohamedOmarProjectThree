

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
myApp.userName = $('.landingPage input').val()
myApp.scrollTo = function(location){
        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 800)
    }

myApp.yesQuizQuestion1 = `<form action=""><fieldset>
                                <legend>Well, look at you! Did you take a selfie at the polling station?</legend>
                                <input type="radio" name="yesQuiz1" id="yes1">
                                <label for="yes1">Of course I did!</label>
                                <input type="radio" id="no1" name="yesQuiz1">
                                <label for="no1">No, selfies are pain.</label>
                                <input type="radio" id="yes2" name="yesQuiz1">
                                <label for="yes2">I wanted to, but couldn't because the polling officer said ~PRIVACY~ is important.</label>
                                <label for="submitYesQuiz1"></label>
                                <input type="submit" id="submitYesQuiz1" name="yesQuiz1" value="Submit">
                            </fieldset>
                        </form>`;
myApp.noQuizQuestion1 = `<form action=""><fieldset>
                                <legend>Uh, what? Did you just say you didn't vote, ${myApp.userName}?</legend>
                                <input type="radio" name=noQuiz1" id="no1">
                                <label for="no1">You heard me. I'm throwing my vote away.</label>
                                <input type="radio" id="no2" name="noQuiz1">
                                <label for="no2">I wanted to, but I just couldn't find the time for this event that happens once every four years.</label>
                                <input type="radio" id="no3" name="noQuiz1">
                                <label for="no3">Sorry, I can't finish this quiz, I'm too busy DESTROYING DEMOCRACY.</label>
                                <label for="submitNoQuiz1"></label>
                                <input type="submit" id="submitNoQuiz1" name="noQuiz1" value="Submit">
                            </fieldset>
                        </form>`                       

    // this function is what happens when user either clicks yes
myApp.userPressedYes = function(event){
    $('.mainButtons input.yesButton').on('click', function(event){
        $('.yesQuestion1').css("height", "100vh").append(myApp.yesQuizQuestion1);
    myApp.scrollTo("#yesQuiz1");
        $('input.yesButton').off("click");
    })
}
myApp.userPressedNo = function(event){
    $('.mainButtons input.noButton').on('click', function (event) {
        $('.noQuestion1').css("height", "100vh").append(myApp.noQuizQuestion1);
        if ($('yesQuestion1').css("height", "100vh"){
            $('yesQuestion1').hide();
        })
        myApp.scrollTo("#noQuiz1");
    })
}




myApp.init = function(){
    myApp.submitLandingForm();
    myApp.userPressedYes();
    myApp.userPressedNo();
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