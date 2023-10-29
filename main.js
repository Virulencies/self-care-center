/* Plan: an site with a little hero that offers affirmations
Steps:
1. Create/edit basic HTML structure
2. Get the appropiate art assets
3. Style elements with CSS 
4. Make the JS to hold the arrays and handle overall functionality
*/

//elements
var affirmationButtonA = document.getElementById("give-me-some-affirmations");
var affirmationButtonB = document.getElementById("give-me-more-affirmations");
var affirmations1 = document.getElementById("here-are-your-affirmations");
var affirmations2 = document.getElementById("here-are-your-affirmations-2");
var affirmationHero = document.getElementById("affirmation-hero");
var affirmationHero2 = document.getElementById("affirmation-hero-2");
var affirmationHeroA1 = document.getElementById("affirmation-heroA1");
var affirmationHeroB1 = document.getElementById("affirmation-heroB1");
var darkerModeButton = document.getElementById("darker-mode-button");
var bothButtons = document.querySelectorAll(".button1, .button2");


//event listeners
affirmationButtonA.addEventListener("click", () => {
    var randomAffirmation = affirmationsA[Math.floor(Math.random() * affirmationsA.length)];
    affirmationHero.src = "https://i.imgur.com/c8QQGFN.png";
    affirmationHero.style.display = "none";
    affirmationHeroA1.style.display = "block";
    affirmations1.textContent = randomAffirmation;
});

affirmationButtonB.addEventListener("click", () => {
    var randomAffirmationB = affirmationsB[Math.floor(Math.random() * affirmationsB.length)];
    affirmationHero2.src = "https://i.imgur.com/0uDzDXT.png";
    affirmationHero2.style.display = "none";
    affirmationHeroB1.style.display = "block";
    affirmations2.textContent = randomAffirmationB
})

var isDarkestMode = false;
darkerModeButton.addEventListener("click", () => {
    if (isDarkestMode) {
        document.body.style.backgroundColor = "#121212";
        darkerModeButton.src = "https://i.imgur.com/RsM3Qre.png";
        document.querySelectorAll(".button1, .button2").forEach((button) => {
            button.style.backgroundColor = "darkblue";

            document.body.classList.remove("lantern-mode");
            
    });
    } else {
        document.body.style.backgroundColor = "#000";
        darkerModeButton.src = "https://i.imgur.com/a2Bzzo6.png";
        document.querySelectorAll(".button1, .button2").forEach((button) => {
            button.style.backgroundColor = "#121212"

            document.body.classList.add("lantern-mode");    
        })
    }

isDarkestMode = !isDarkestMode;    
});



//affirmation arrays
var affirmationsA = [
    "Onward! We don't give up out here.",
    "Great! There are still dragons to defeat in the dungeon!",
    "That's right, fight! Fight until you're where you need to be! Earn your victory!",
    "I knew you weren't done. You've got too much moxie to give up that easily!",
    "Good! Remember: Even small progress is still progress!",
    "The night is dark and full of terrors - you remain a beacon of light in that darkness.",
    "That's right - stand firm! Face your challenges with courage!",
    "Do not lose heart, victory is right around the corner!",
    "Look at you go! Seriously, how do you do it? I'm jealous.",
    "Scale that mountain. Climb that peak. Pry your victory from the jaws of defeat!",

]

var affirmationsB = [
    "Thats ok! Remember: A warrior needs their rest!",
    "The final failure only comes when you give up. Keep going!",
    "Pain is inevitable, but suffering is a choice. You got this!",
    "Go easy on yourself! Take a break! The sun will still rise, and you'll still grow - just don't give up!",
    "Rest up! When you wake up, you'll be at least one step closer than you are now.",
    "I'll keep watch this shift, take a break! Relax, you've got this.",
    "This is the part where the world tests you, hero. But it has to happen this way - otherwise, the ending wont feel as rewarding.",
    "Dig deep! Dont let the grind end up grinding you down.",
    "Life will sometimes punch you right in the face. You can lie there for a second, even cry if you need to, but get back on your feet. It's the getting back up that counts.",
    "Fall down seven times, get back up eight. I'll be right there with you.",
    "This too shall pass.",
    "Take a deep breath. Unclench your jaw. Relax your shoulders. Chill. You've got this.",
    "When you think your light is going dim, remember this: There is stardust in your veins. You are the child of a star. There is always more to burn."

]