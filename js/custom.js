

// Menu accardion
jQuery.fn.initMenu = function() {  
    return this.each(function(){
        var theMenu = $(this).get(0);
        $('.collapsible .acitem', this).hide();
        // $('li.expand > .acitem', this).show();
        // $('li.expand > .acitem', this).prev().addClass('active');
        $('li span', this).click(
            function(e) {
                e.stopImmediatePropagation();
                var theElement = $(this).next();
                var parent = this.parentNode.parentNode;
                if($(parent).hasClass('noaccordion')) {
                    if(theElement[0] === undefined) {
                        window.location.href = this.href;
                    }
                    $(theElement).slideToggle('normal', function() {
                        if ($(this).is(':visible')) {
                            $(this).prev().addClass('active');
                        }
                        else {
                            $(this).prev().removeClass('active');
                        }    
                    });
                    return false;
                }
                else {
                    if(theElement.hasClass('acitem') && theElement.is(':visible')) {
                        if($(parent).hasClass('collapsible')) {
                            $('.acitem:visible', parent).first().slideUp('normal', 
                            function() {
                                $(this).prev().removeClass('active');
                            }
                        );
                        return false;  
                    }
                    return false;
                }
                if(theElement.hasClass('acitem') && !theElement.is(':visible')) {         
                    $('.acitem:visible', parent).first().slideUp('normal', function() {
                        $(this).prev().removeClass('active');
                    });
                    theElement.slideDown('normal', function() {
                        $(this).prev().addClass('active');
                    });
                    return false;
                }
            }
        }
    );
});
};


$(document).ready(function () {

   //подключение Menu accardion(выподающий) для мобильного меню 
    $('.menu').initMenu();

    //работа меню бургер - открыть/закрыть
    $('#hamburger').click(function (e) {
        $('.dropDownMenu').fadeToggle();
        $(this).toggleClass('active');
        $('.dropDownMenu').find('ul.menu').toggleClass('collapsible');
    });


    //Клик вне меню бургера
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#Topmenu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 
        && $('#hamburger').hasClass('active')) 
        { // и не по его дочерним элементам
			//div.hide(); // скрываем его
      $('.dropDownMenu').fadeOut();
      $('#hamburger').removeClass("active");
		}	
	});


//показ поля по радио кнопке - другое
    $('#RadioAuto1, #RadioAuto2, #RadioAuto3 ').change(function(){
        $('.Field-Otherauto').hide();
        $('.Field-Otherauto input').val('');
    });	
    $('#RadioAuto4').change(function(){
        $('.Field-Otherauto').show();
    });	
    $('#RadioKomand1').change(function(){
        $('.Field-OtherKomand').hide();
        $('.Field-OtherKomand input').val('');
    });	
    $('#RadioKomand2').change(function(){
        $('.Field-OtherKomand').show();
    });	

    //добавление коментария
    $('#AddNewComet').click(function(e) {
        $(this).parent().hide();
        $('#AddComField').addClass('active');
        $('#commenttext').focus();
    });	

    $('#deleteAddComField').click(function(e) {
        $('#AddNewComet').parent().show();
        $('#AddComField').removeClass('active');
    });	

    $('.Coment-edit').click(function(e) {
        $(this).parent().parent().find('.AddComField__info').removeClass('hide');
        $(this).parent().addClass('hide');
    });	

    $('.btn-back-js').click(function(e) {
        $(this).parent().parent().addClass('hide');
        $(this).parent().parent().parent().find('.Coment-item__info').removeClass('hide');
    });	


   
    
    //Вкладки на форме modal авторизации
    $("#Tabs .Tab__head .Tab__tab").on("click", function(){
        var tabs = $("#Tabs .Tab__head .Tab__tab")
            cont = $("#Tabs .Tab__body .Tab__cont");
        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });

    //Вкладки на странице - список заданий
    $("#ListTabs .ListTab__head .ListTab__tab").on("click", function(){
        var tabs = $("#ListTabs .ListTab__head .ListTab__tab")
            cont = $("#ListTabs .ListTab__body .ListTab__cont");
        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });

    //Вкладки на странице - Настройки профиля
    $("#ProfTabs .ProfTab__head .ProfTab__tab").on("click", function(){
        var tabs = $("#ProfTabs .ProfTab__head .ProfTab__tab")
            cont = $("#ProfTabs .ProfTab__body .ProfTab__cont");
        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });

   //выводит плейсхолдер у input - date
    // $('input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="time"], input[type="week"]').each(function() {
    //     var el = this, type = $(el).attr('type');
    //     if ($(el).val() == '') $(el).attr('type', 'text');
    //     $(el).focus(function() {
    //         $(el).attr('type', type);
    //         el.click();
    //     });
    //     $(el).blur(function() {
    //         if ($(el).val() == '') $(el).attr('type', 'text');
    //     });
    // });
    $('.inputdate').on('focus', function() {
        $(this).attr('type', 'date') }
      ).on('blur', function() {
        $(this).attr('type', 'date') }
      ).on('mouseover', function() {
        $(this).attr('type', 'date') }
      )
    //   .on('mouseout', function() {
    //     $(this).attr('type', 'text') }
    //   )
      ;
    
    //клик по ссылке - забыли пароль
    $('.Forgot__password').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#Tab2').hide();
        $(href).show();
    });

    //клик по ссылке - назад ко входу в систему
    $('.Backlogin__link').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#Tab3').hide();
        $(href).show();
    });


    ///Select  во вкладке регистарции в модал окошке
    $('.Select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="Select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });

    //Маска на номере телефона
    $(function($){
        // $("#field_2").mask("8(999)999-99-99");
        $('[name="phone"]').mask('+7 (999) 999-99-99');
       });
       
   //подключение плагина select2 lkz select полей  
   $(".select2").select2({
         minimumResultsForSearch: Infinity,
         width : 'resolve' 
         
    });


    //переписывает все SVG из images src="" в inline SVG
     $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
      });
    
    

     //Включение и отключение кнопки сохрание через чекбокс 
    $('#Agree').click(function() { 
         if ($(this).prop( "checked" )) {
            $('#save_profile').removeAttr('disabled');
            } else {
                $('#save_profile').attr("disabled","disabled");
            }
    });

 



    //  вкл и выкл  гуппы чекбоксов через главный чекбокс
    $('.specialization-list > ul > li label input[type=checkbox]').change(function () {
        if ($(this).is(':checked')) {
            $(this).closest('li').find('ul input[type=checkbox]').prop('checked', true);
        } else {
            $(this).closest('li').find('ul input[type=checkbox]').prop('checked', false);
        }
    });

    // отключение главноего чекбокса если не выбран не один из группы чекбокса
        $('.specialization-list  input.checkgroup').change(function () {
            var checkmain = $(this).parent().parent().parent().parent().find('.ListParent:first input[type=checkbox]');
            var checkgroup = $(this).parent().parent().parent().find('input.checkgroup:checked'); 
            if(!checkgroup.length){
                checkmain.prop('checked', false);
            }  else {
                checkmain.prop('checked', true);
            }
        });

    // выподание групы чекбоксов
        $('.specialization-list .icon-angle-wrap').click(function () {
            $(this).closest('li').toggleClass('open').find('ul').stop().slideToggle();
        });

    //Включение и отключение кнопки сохранить во вкладки специализации через чекбокс 
    $('.specialization-list input[type=checkbox] ').change(function () {
        var check = $('.specialization-list input[type=checkbox]:checked'); 
        if(!check.length){
            $('#save_specialization').attr("disabled","disabled");
        }  else {
                $('#save_specialization').removeAttr('disabled');
        }
    });


    //Включение и отключение кнопки сохранить для пароля
    $(".Field > input[type=password]").on('keyup',function(){ 

        if ($('input#password1').val() && $('input#password2').val()){
            $("#save_ppassword").removeAttr('disabled'); 
            
        } else {
            $('#save_ppassword').attr("disabled","disabled");
        }
     });
     

});// end - $(document).ready(function () {


// преключение вкладок в select поле под телефоны и его работа 
$(function() {
    $(".selectlink-control").click(function(){
        var $menu_popup = $(this).next();
        $menu_popup.slideToggle(200, function(){
            $('.ListTab .ListTab__head').not($menu_popup).slideUp(200);
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
                $('.ListTab__head').removeClass('active')
            }					
        });  
        return false;
    });		
    
    // $(document).on('click', function(e){
    //     if (!$(e.target).closest('.ListTab').length && $('body').hasClass('body_pointer') ){
    //         $('body').removeClass('body_pointer');
    //         $('.ListTab .ListTab__head').slideUp(200);
    //     }
    // });
    
});

$(function() {
    $(".selectlink-control2").click(function(){
        var $menu_popup = $(this).next();
        $menu_popup.slideToggle(200, function(){
            $('.ProfTab .ProfTab__head').not($menu_popup).slideUp(200);
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
                $('.ProfTab__head').removeClass('active')
            }					
        });  
        return false;
    });		
    
});


// работа вкладок в режиме select - замена названия активной вкладки
$('.ListTab__tab').on('click', function(e){
    if($('.ListTab__head').hasClass('active') && $('body').hasClass('body_pointer') ){
        $(".selectlink-control2").html($(this).text());
        $('.ListTab .ListTab__head').slideUp(200);
    
    } else if  ( $('body').hasClass('body_pointer') ) {
        // $(this).addClass('active');
        $(".selectlink-control2").html($(this).text());
        $('.ListTab .ListTab__head').slideUp(200);
    } 
    
});
$('.ProfTab__tab').on('click', function(e){
    if($('.ProfTab__head').hasClass('active') && $('body').hasClass('body_pointer') ){
        $(".selectlink-control2").html($(this).text());
        $('.ProfTab .ProfTab__head').slideUp(200);
    
    } else if  ( $('body').hasClass('body_pointer') ) {
        // $(this).addClass('active');
        $(".selectlink-control2").html($(this).text());
        $('.ProfTab .ProfTab__head').slideUp(200);
    } 
    
});


// изменения класс в зависемости от ширины экрана
$(window).resize(function(){
    var width = $(window).innerWidth();
    //console.log(width);
    if (width > 510) {
        $('body').removeClass('body_pointer');
    }else{
        $('body').addClass('body_pointer');
    }

}).resize();



$(document).ready(function () {

 // Подключение modal окна
 $('.bpopup').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $(href).bPopup({
        follow: [ true , false ], // x, y 
            closeClass:'close'
        });
});

$('.bpopup2').click(function(e) {
    e.preventDefault();
    var href = $(this).data('name');
    var idmodal = '#' + href;
    $(idmodal).bPopup({
        follow: [ true , false ], // x, y 
        closeClass:'close, closeModal'
       });
});

$('.bpopup3').click(function(e) {
    e.preventDefault();
    var href = $(this).data('name');
    var idmodal = '#' + href;
    $(idmodal).bPopup({
        positionStyle: 'fixed', 
            closeClass:'closeModal'
        });
});


$('#regions a').click(function (e) {
    e.preventDefault();
    $('#popup-location-city').bPopup({
        follow: [ true , true ], // x, y 
            closeClass:'close-back'
        });
});

$('.close5').click(function() { 
    $('#Cooke').hide();
    
});


$('#btnpay').click(function(e) { 
    var input = $('input#datapay');
    if(input.val().length) {

     } else {
         e.preventDefault();
        $('#NoDate').bPopup({
            positionStyle: 'fixed', 
            closeClass:'closeModal'
        });
    }
});


//отказать в оплате
$("#btnback").click(function(e){
    // поле не заполнено;
    e.preventDefault();
    $('#MoneyBack').bPopup({
        positionStyle: 'fixed' ,
        closeClass:'closeModal'
    });
 
});


});