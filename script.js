

$(document).ready(function(){
    screen_switcher('home')
    $('.sidenav').sidenav();
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem);
    
    $('#next').on("click", function(){
        instance.prev()
    })

    $('#previous').on("click", function(){
        instance.next()
    })

    $('.home-btn').on("click", function(){
        location.reload()
        
    })

    $('.carousel-item').on("click", function() {
        var carousel_id = $(this).attr('data-project')
        console.log(carousel_id)
        screen_switcher(carousel_id)
    })

    $('#resume-click').on("click", function() {
        screen_switcher('resume')
    })

    screen_switcher('home')
  });
  


function screen_switcher(target_id) {
    var main_divs = $('main');
    for (const main of main_divs) {
        if ($(main).attr('id') === target_id) {
            $(main).show()
        }
        else {
            $(main).hide()
        };
    };
};




