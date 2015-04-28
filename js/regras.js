/**
 * @package     Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
/* global $, window, setTimeout, document, DialogFx */

$(function () {

	preparaCarrossel();

	/* Ativador da "Wilma" */
	var dlgTrigger = document.querySelectorAll('[data-dialog]');
	var someDialog, dlg;
	for (var i = 0; i < dlgTrigger.length; i++) {
		someDialog = document.getElementById(dlgTrigger[i].getAttribute('data-dialog'));
		dlg = new DialogFx(someDialog);
		dlgTrigger[i].addEventListener('click', dlg.toggle.bind(dlg));

	}


	var travarMouseOver = false;
	$('.ativar-shadow-videos').mouseover(function () {
		if (travarMouseOver === false) {
			$(this).find('.efeito-img-shadow').removeClass('container-slider-videos-img');
			$(this).find('.efeito-img-shadow').addClass('container-slider-videos-img-active');

			$(this).find('.txt-slider-videos').animate({
				"bottom": "+=7px"
			}, 200);

			$(this).addClass('img-shadow-videos');
			travarMouseOver = true;
		}

	});
	$('.ativar-shadow-videos').mouseleave(function () {
		$(this).find('.efeito-img-shadow').removeClass('container-slider-videos-img-active');
		$(this).find('.efeito-img-shadow').addClass('container-slider-videos-img');
		$(this).find('.txt-slider-videos').animate({
			"bottom": "-=7px"
		}, 200);
		$(this).removeClass('img-shadow-videos');
		travarMouseOver = false;
	});

	$('ul.menuprincipal > li').hover(
		function () {
			var self = $('ul', this);
			$(self).stop(true, true).fadeIn("fast");
			$(self).toggleClass('open');

			var meioUl = $('ul', this).width() / 2;
			var meioLi = $(this).width() / 2;

			var margin = $(this).hasClass('dropdown') ? 0 : 30;

			var left = ((meioLi - meioUl) / 2) - margin;

			$('ul', this).css('left', left);
		},
		function () {
			var self = $('ul', this);
			$(self).stop(true, true).fadeOut("fast");
			$(self).toggleClass('open');
			// $('ul', this).css('left', '');
		});

	resizeBrowser();

	$(window).resize(resizeBrowser);

});

function resizeBrowser() {

	if ($('.is-fixed').length === 0) {
		var alturaDoc = $(window).height();
		var alturaBarra = $('.navbar').height();
		var altura = alturaDoc - alturaBarra;

		$('.topo').height(altura);
	}

	eventScroll();
}

function eventScroll() {
	//Menu Fixed Top com efeito
	var secondaryNav = $('.cd-secondary-nav'),
		secondaryNavTopPosition = secondaryNav.offset().top;

	$(window).on('scroll', function () {

		if ($(window).scrollTop() > secondaryNavTopPosition) {
			secondaryNav.addClass('is-fixed');
			setTimeout(function () {
				$('#bs-example-navbar-collapse-1').addClass('animate-children', 'fast');
				$('#btn-social-media-menu-xs').addClass('animate-social-menu', 'fast');

				$(".show-logo").slideDown("fast", function () {
				});
			}, 50);
		} else {
			secondaryNav.removeClass('is-fixed');
			setTimeout(function () {

				$(".show-logo").slideUp("fast", function () {
					$('#bs-example-navbar-collapse-1').removeClass('animate-children', 'fast');
					$('#btn-social-media-menu-xs').removeClass('animate-social-menu', 'fast');
				});

			}, 50);
		}
	});
}

function preparaCarrossel() {
	// Carrossel em qualquer div com nome slider-*
	$("div[id*='slider-']").owlCarousel({
		singleItem: true,
		pagination: false
	});

	// Navegadores dos carrosseis (avançar e voltar)
	$('i[class*="slider-seta-direita-"]').on('click', function () {
		var carrossel = $(this)
			.parents('span')
			.next('div')
			.data('owlCarousel');
		carrossel.next();
	});

	$('i[class*="slider-seta-esquerda-"]').on('click', function () {
		var carrossel = $(this)
			.parents('span')
			.next('div')
			.data('owlCarousel');
		carrossel.prev();
	});
}
