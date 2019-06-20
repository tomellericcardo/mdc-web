var home = {
    
    init: function() {
        home.init_menu();
        home.init_about();
        home.init_ripple();
    },
    
    init_menu: function() {
        var element = $('.mdc-menu')[0];
        var menu = new mdc.menu.MDCMenu(element);
        $('#menu-icon').on('click', function() {
            menu.open = !menu.open;
        });
    },
    
    init_about: function() {
        $('#about').on('click', function() {
            window.location.href = '/about';
        });
    },
    
    init_ripple: function() {
        var elements = $('.mdc-list-item');
        for (var i = 0; i < elements.length; i++)
            mdc.ripple.MDCRipple.attachTo(elements[i]);
    }
    
};


$(document).ready(home.init());
