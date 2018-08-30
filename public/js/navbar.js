var navbar = {
    
    init: function() {
        var element = $('.mdc-top-app-bar')[0];
        mdc.topAppBar.MDCTopAppBar.attachTo(element);
        var height = $('.mdc-top-app-bar').css('height');
        $('.page-content').css('padding-top', height);
    }
    
};


$(document).ready(navbar.init());
