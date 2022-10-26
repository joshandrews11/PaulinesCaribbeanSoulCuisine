 //drop down hamburger menu
        hamburger = document.querySelector(".hamburger");
        hamburger.onclick = function () {
            navBar = document.querySelector(".navbar");
            navBar.classList.toggle("active");
        }

        //opens and closes X for hamburger menu
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
        });

        
// FUNCTION FOR CHANGING TEXT IN HERO
(function () {
    var words = [
        "Caribbean Food", 
        "Jerk Chicken",
        "Jerk Salmon",
        "Red Snapper",
        "Fried Plantains",
        "Brown Stew Chicken",
        "Curry Chicken",
        "Oxtails"
    ],
    i = 0;
    setInterval(function(){
        $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
        });
    }, 2000)
})();
