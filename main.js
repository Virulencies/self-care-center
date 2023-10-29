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


//event listeners
affirmationButtonA.addEventListener("click", () => {
    var randomAffirmation = affirmationsA[Math.floor(math.random() * affirmationsA.length)];
    affirmationHero.src = "imageA1.jpg";
    affirmationText.textContent = randomAffirmation;

});

affirmationButtonB.addEventListener("click", () => {
    var randomAffirmationB = affirmationsB[Math.floor(math.random() * affirmationsB.length)];
    affirmationHero2.src = "imageB1.jpg";
    affirmationText2.textContent = randomAffirmationB
})

//affirmation arrays
var affirmationsA = [
    "Onward! We don't give up out here.",
    "Great! There are still dragons to defeat in the dungeon!",
    "You got this!",
    "I knew you weren't done. You've got too much moxie to give up that easily!",
    "Good! Remember: Even small progress is still progress!",
    "The night is dark and full of terrors - you remain a beacon of light in that darkness",
    "That's right - stand firm! Face your challenges with courage!",
    "Do not lose heart, victory is right around the corner!"
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
    "Fall down seven times, get back up eight. I'll be right there with you."
]