

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

    $(".select2").select2({
         minimumResultsForSearch: Infinity
    });

    $('.menu').initMenu();


    $('#hamburger').click(function (e) {
        $('.dropDownMenu').fadeToggle();
        $(this).toggleClass('active');
        $('.dropDownMenu').find('ul.menu').toggleClass('collapsible');
    });

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





    $('.bpopup').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(href).bPopup({
            follow: [ true , false ], // x, y 
                closeClass:'close'
            });
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
    

    $('.Forgot__password').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#Tab2').hide();
        $(href).show();
    });
    $('.Backlogin__link').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#Tab3').hide();
        $(href).show();
    });


    ///Select 
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


    $(function($){
        // $("#field_2").mask("8(999)999-99-99");
        $('[name="phone"]').mask('+7 (999) 999-99-99');
       });
       
       
   




    
//$(document).ready(function () {
});



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
    
    $(document).on('click', function(e){
        if (!$(e.target).closest('.ListTab').length && $('body').hasClass('body_pointer') ){
            $('body').removeClass('body_pointer');
            $('.ListTab .ListTab__head').slideUp(200);
        }
    });
    
});


$('.ListTab__tab').on('click', function(e){
    if($('.ListTab__head').hasClass('active') && $('body').hasClass('body_pointer') ){
        $(".selectlink-control").html($(this).text());
        $('.ListTab .ListTab__head').slideUp(200);
    
    } else if  ( $('body').hasClass('body_pointer') ) {
        // $(this).addClass('active');
        $(".selectlink-control").html($(this).text());
        $('.ListTab .ListTab__head').slideUp(200);
        
    } 
    
});


$(window).resize(function(){
    var width = $(window).innerWidth();
    console.log(width);
    if (width > 510) {
        $('body').removeClass('body_pointer');
    }else{
        $('body').addClass('body_pointer');
    }

}).resize();

/*
 * Replace all SVG images with inline SVG
 */

$(document).ready(function () {





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
});