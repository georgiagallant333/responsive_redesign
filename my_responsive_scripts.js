setNavBarColors('first-nav-id', 'second-nav-id', 'third-nav-id','fourth-nav-id', 'fifth-nav-id', 'sixth-nav-id', 'seventh-nav-id')

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

var fifthnav = document.querySelector('.fifth-nav')
fifthnav.addEventListener('click', function(){
    smoothScroll('.target5', 1000)
})
var sixthnav = document.querySelector('.sixth-nav')
sixthnav.addEventListener('click', function(){
    smoothScroll('.target6', 1000)
})

var seventhnav = document.querySelector('.seventh-nav')
seventhnav.addEventListener('click', function(){
    smoothScroll('.target7', 1000)
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



function setNavBarColors(nav_id, non_focused_1, non_focused_2, non_focused_3, non_focused_4, non_focused_5, non_focused_6){
    document.getElementById(nav_id).style.setProperty("filter", "brightness(90%)", "important");
    document.getElementById(non_focused_1).style.setProperty("filter", "brightness(100%)", "important");
    document.getElementById(non_focused_2).style.setProperty("filter", "brightness(100%)", "important");
    document.getElementById(non_focused_3).style.setProperty("filter", "brightness(100%)", "important");
    document.getElementById(non_focused_4).style.setProperty("filter", "brightness(100%)", "important");
    document.getElementById(non_focused_5).style.setProperty("filter", "brightness(100%)", "important");
    document.getElementById(non_focused_6).style.setProperty("filter", "brightness(100%)", "important");

}

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll < 650){
        setNavBarColors('first-nav-id', 'second-nav-id', 'third-nav-id','fourth-nav-id', 'fifth-nav-id', 'sixth-nav-id', 'seventh-nav-id')
    }
    if(currentScroll >= 650 && currentScroll < 1400){
        setNavBarColors('second-nav-id', 'first-nav-id', 'third-nav-id','fourth-nav-id', 'fifth-nav-id', 'sixth-nav-id', 'seventh-nav-id')
    }

    if(currentScroll >= 1400 && currentScroll < 2800){
        setNavBarColors('third-nav-id', 'second-nav-id', 'first-nav-id','fourth-nav-id', 'fifth-nav-id', 'sixth-nav-id', 'seventh-nav-id')
    }
    if(currentScroll >= 2800 && currentScroll < 4600){
        setNavBarColors('fourth-nav-id', 'second-nav-id', 'first-nav-id','third-nav-id', 'fifth-nav-id', 'sixth-nav-id', 'seventh-nav-id')
    }
    if(currentScroll >= 4600 && currentScroll < 5600){
        setNavBarColors('fifth-nav-id', 'second-nav-id', 'first-nav-id','third-nav-id', 'fourth-nav-id', 'sixth-nav-id', 'seventh-nav-id')
    }
    if(currentScroll >=5600 && currentScroll < 6100){
        setNavBarColors('sixth-nav-id', 'second-nav-id', 'first-nav-id','third-nav-id', 'fourth-nav-id', 'fifth-nav-id', 'seventh-nav-id')

    }
    if(currentScroll >= 6100){
        setNavBarColors('seventh-nav-id', 'second-nav-id', 'first-nav-id','third-nav-id', 'fourth-nav-id', 'fifth-nav-id', 'sixth-nav-id')

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
