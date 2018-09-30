var card = {

    init_ripple: function() {
        var elements = $('.mdc-card__primary-action, .mdc-button');
        for (var i = 0; i < elements.length; i++)
            mdc.ripple.MDCRipple.attachTo(elements[i]);
    }

};


$(document).ready(card.init_ripple());
