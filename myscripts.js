document.querySelector("#rates-bird").style.opacity = 0;
document.querySelector("#services-bird").style.opacity = 0;
document.querySelector("#what-to-bring-bird").style.opacity = 0;
setNavBarColors('first-nav-id', 'second-nav-id', 'third-nav-id','fourth-nav-id')

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var navbarHeight = document.querySelector('.navbar').getBoundingClientRect().height
    var startPosition = window.pageYOffset;

        var distance = targetPosition  - navbarHeight;

        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation)
        }

        function ease(t, b, c, d) {
            t /= d;
            t--;
            return -c * (t*t*t*t - 1) + b;
        }

        requestAnimationFrame(animation);


}

var section1 = document.querySelector('.section1')
section1.addEventListener('click', function(){
    smoothScroll('.target2', 500)
})

var firstnav = document.querySelector('.first-nav')
firstnav.addEventListener('click', function(){
    smoothScroll('.target1', 1000)
})

var secondnav = document.querySelector('.second-nav')
secondnav.addEventListener('click', function(){
    smoothScroll('.target2', 1000)
})


var thirdnav = document.querySelector('.third-nav')
thirdnav.addEventListener('click', function(){
    smoothScroll('.target3', 1000)
})


var fourthnav = document.querySelector('.fourth-nav')
fourthnav.addEventListener('click', function(){
    smoothScroll('.target4', 1000)
})





/*makes arrows disappear*/
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 100) {
        document.querySelector('#scroll-arrow-1').style.opacity = 0;
    }
    else {
        document.querySelector('#scroll-arrow-1').style.opacity = 1;
    }
});



function setNavBarColors(nav_id, non_focused_1, non_focused_2, non_focused_3){
    document.getElementById(nav_id).style.setProperty("background-color", "#f2f2d5", "important");
    document.getElementById(non_focused_1).style.setProperty("background-color", "#ffffe0", "important");
    document.getElementById(non_focused_2).style.setProperty("background-color", "#ffffe0", "important");
    document.getElementById(non_focused_3).style.setProperty("background-color", "#ffffe0", "important");

}
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll < 650){
        setNavBarColors('first-nav-id', 'second-nav-id', 'third-nav-id','fourth-nav-id')

    }
    if(currentScroll >= 650 && currentScroll < 1400){
        setNavBarColors('second-nav-id', 'first-nav-id', 'third-nav-id','fourth-nav-id')
    }

    if(currentScroll >= 1400 && currentScroll < 1900){
        setNavBarColors('third-nav-id', 'second-nav-id', 'first-nav-id','fourth-nav-id')
    }
    if(currentScroll >= 1900){
        setNavBarColors('fourth-nav-id', 'second-nav-id', 'first-nav-id','third-nav-id')

    }
});

//makes home page bird fade and reappear
const fadeOutMainBird = 300;
const fadeInServicesBird = 300;
const fadeOutServicesBird = 1000;
const fadeInWhatToBringBird = 1000;
const fadeOutWhatToBringBird = 1900;
const fadeInRatesBird = 1900;
window.addEventListener("scroll", () => {
    //main bird
    const currentScroll = window.pageYOffset;
    //fade out main bird
    if(currentScroll < fadeOutMainBird){
        document.querySelector("#big-bird").style.opacity = 1;
        document.querySelector("#services-bird").style.opacity = 0;
        document.querySelector("#rates-bird").style.opacity = 0;
        document.querySelector("#what-to-bring-bird").style.opacity = 0;
    }
    if (currentScroll >= fadeOutMainBird && currentScroll < fadeInServicesBird) {
        opacitybird1 = (currentScroll/fadeOutMainBird-1);
        document.querySelector("#big-bird").style.opacity = 1-4*opacitybird1;
        document.querySelector("#services-bird").style.opacity = 0;
        document.querySelector("#rates-bird").style.opacity = 0;
        document.querySelector("#what-to-bring-bird").style.opacity = 0;
    }
    //services bird (white bird)
    //fade in service bird
    else if (currentScroll >= fadeInServicesBird && currentScroll < fadeOutServicesBird) {
        opacitybird2 = 1-(fadeInServicesBird/currentScroll)/2; //2 = to make fade in faster
        document.querySelector("#services-bird").style.opacity = opacitybird2;
        document.querySelector("#big-bird").style.opacity = 0;
        document.querySelector("#rates-bird").style.opacity = 0;
        document.querySelector("#what-to-bring-bird").style.opacity = 0;
    }
    //fade out service bird
    else if (currentScroll >= fadeOutServicesBird && currentScroll < fadeInWhatToBringBird){
        opacitybird2 = (currentScroll/fadeOutServicesBird-1);
        document.querySelector("#services-bird").style.opacity = 1-4*opacitybird2;
        document.querySelector("#big-bird").style.opacity = 0;
        document.querySelector("#rates-bird").style.opacity = 0;
        document.querySelector("#what-to-bring-bird").style.opacity = 0;
    }
    else if (currentScroll >= fadeInWhatToBringBird && currentScroll<fadeOutWhatToBringBird){
        opacitybird3 = (currentScroll/fadeInWhatToBringBird-1);
        document.querySelector("#what-to-bring-bird").style.opacity = 4*opacitybird3;
        document.querySelector("#services-bird").style.opacity = 0;
        document.querySelector("#rates-bird").style.opacity = 0;
        document.querySelector("#big-bird").style.opacity = 0;
    }
    else if(currentScroll > fadeOutWhatToBringBird && currentScroll < fadeInRatesBird){
        opacitybird3 = (currentScroll/fadeInWhatToBringBird-1);
        document.querySelector("#what-to-bring-bird").style.opacity = 1-opacitybird3;
        document.querySelector("#services-bird").style.opacity = 0;
        document.querySelector("#rates-bird").style.opacity = 0;
        document.querySelector("#big-bird").style.opacity = 0;

    }
    else if (currentScroll > fadeInRatesBird) {
        opacitybird4 = (currentScroll / fadeInRatesBird - 1);
        document.querySelector("#rates-bird").style.opacity = 6 * opacitybird4;
        document.querySelector("#services-bird").style.opacity = 0;
        document.querySelector("#big-bird").style.opacity = 0;
        document.querySelector("#what-to-bring-bird").style.opacity = 0;
    }
});



$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-times").removeClass("fa-plus");
    });
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-times");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-times").addClass("fa-plus");
    });
});
