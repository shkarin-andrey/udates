$(document).ready(function(){
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize()
        }).done(function() {
        $(this).find('input').val('');
        $('.modal').fadeIn('slow');

        $('form').trigger('reset');
        });
        return false;
    });

    $('.header__sign').click(() => {
        $('.modal').fadeIn();
        $('body').css({'overflow' : 'hidden'});
    });

    $('.modal__close').click(() => {
        $('.modal').fadeOut();
        $('body').css({'overflow' : 'visible'});
    });


    function cleanSelect (select) {
        return $(select).removeClass('icon-en').removeClass('icon-ru');
    }
        
    function formSelect() {
        const select = cleanSelect('.select-events');

        select.addClass(select.val() == '1' ? 'icon-en' : 'icon-ru');
        select.css({ height: 'auto', overflow: 'hidden', zIndex: '40000' });

        select.on('mouseleave', function () {
            this.size = 1;
            cleanSelect(this).addClass($(this).val() == '1' ? 'icon-en' : 'icon-ru');
        });

        select.on('mouseover', function () {
            cleanSelect(this);
            this.size = $(this).find('option').length;
        });
    }
    
    $(function () {
        formSelect();
    });
});