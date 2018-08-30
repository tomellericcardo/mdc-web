var button = {
    
    init_ripple: function() {
        var elements = $('button');
        for (var i = 0; i < elements.length; i++)
            mdc.ripple.MDCRipple.attachTo(elements[i]);
    }
    
};


$(document).ready(button.init_ripple());
