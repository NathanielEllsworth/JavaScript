/**
 *
 * Code-Cadamy jQuery course
 *
 * 5/27/2017
 *
 * 7.5 Hours to complete
 *
 *
 */






/**
 * button fade
 */
$(document).ready(function(){

    $('div').mouseenter(function(){

        $('div').fadeTo('fast', 1);

        $('div').mouseleave(function(){

            $('div').fadeTo('fast', 0.5);

        });

    });
});

/**
 * object fade out
 */

$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});


/**
 * fade in slow
 */

$(document).ready(function(){
    $('div').fadeIn('slow')

});


/**
 * button click fade out
 */

$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});


/**
 * using: $(this) handler to fadeOut a clicked object
 */

$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});


/**
 * Moving elements around
 */

$(document).ready(function() {
    $('#one').after("<p>any text I like</p>");
    var $paragraph = $('p');
    $('#two').after($paragraph);
});


/**
 * removing elements
 */

$(document).ready(function() {
    $('#one').after("<p>any text I like</p>");
    var $paragraph = $('p');
    $('#two').after($paragraph);
    $('p').remove();
});

/**
 * Adding and removing classes
 */

$(document).ready(function(){
    $("#text").click(function(){
        $(this).addClass("highlighted");
    });
});

/**
 * Toggling Classes
 */

$(document).ready(function(){
    $("#text").click(function(){
        $(this).toggleClass("highlighted");
    });
});


/**
 * Changing your style
 */

$(document).ready(function(){

    $("div").height("200px");
    $("div").width("200px");
    $("div").css("border-radius","10px");

});


/**
 * Modifying Content
 */

$(document).ready(function(){

    $('p').html("jQuery magic in action!");

});

/**
 * Click da button! do it naoughw!
 */

$(document).ready(function(){

    $('#button').click(function(){

        var toAdd = $('input[name=checkListItem]').val();

    });
});


/**
 * Append to body
 */

$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>' );
    });
});

/**
 * Remove what's been clicked
 */

$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>' );
    });

    $(document).on('click', '.item', function(){
        $(this).remove(this);

    });
});

/**
 *  Adding an event handler
 */

$(document).ready(function(){

    $('div').click(function(){

        $(this).fadeOut('fast');
    });

});


/**
 * Combining .click() and .hover()
 */

$(document).ready(function(){

    $('div').click(function(){

        $(this).fadeOut('fast');

        $('div').addClass('red');   // or $(this).addClass('red');

    });

});

/**
 *  The .dblclick() Event
 */

$(document).ready(function(){

    $('div').dblclick(function(){

        $(this).fadeOut('fast');

    });

});


/**
 * Hover (color of buttons change when mouse goes over them)
 */

$(document).ready(function(){

    $('div').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    );

});


/**
 * Let's .focus()! turn a text box's highlight blue into another color when clicked
 */

$(document).ready(function(){

    $('input').focus(function(){

        $(this).css('outline-color', '#FF0000');

    });

});


/**
 * The .keydown() Event
 */

$(document).ready(function(){

    $(document).keydown(function(){

        $('div').animate({left:'+=10px'}, 500);

    });

});


/**
 * Filling out the cases
 */

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({down: "-=10px"}, 'fast');
                // Put our code here
                break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left: "+10px"}, 'fast');
                // Put our code here
                break;
            // Down Arrow Pressed
            case 40:
                $('img').animate({down: "+10px"}, 'fast');
                // Put our code here
                break;
        }
    });
});


/**
 *  More Practice with .animate()
 */

$(document).ready(function() {
    $('img').animate({top:'+=100px'},1000);
});


/**
 *  jQuery UI Link --------------------------------------------------------------
 */

//    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>


/**
 *  Introducing: jQuery UI
 */

$(document).ready(function(){

    $('div').click(function(){

        $(this).effect('explode');

    });

});


/**
 * .bounce()
 */

$(document).ready(function(){

    $('div').click(function(){

        $(this).effect('bounce', {times:3}, 500);

    });

});


/**
 * .slide()
 */

$(document).ready(function(){

    $('div').click(function(){

        $(this).effect('slide');

    });

});


/**
 *  Special Effects (the menu bar)
 */

$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});


/**
 *  Drag Racing
 */

$(document).ready(function(){

    $('#car').draggable()

});


/**
 *  One resize fits all
 */

$(document).ready(function(){

    $('div').resizable()

});



/**
 *  A greater selection (can select things inside a list)
 */


$(document).ready(function(){

    $('ol').selectable()

});


/**
 *  Let's sort things out (can move things inside a list up and down)
 */

$(document).ready(function(){

    $('ol').sortable()

});


/**
 *  Break out your .accordion()! (click on item in list and sublist will drop down)
 */

$(document).ready(function(){

    $('#menu').accordion()

});
