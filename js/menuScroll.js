/**
 * @package     Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
/* global $, window, setTimeout, document, DialogFx */

$(function () {

function resizeBrowser() {

	if ($('.is-fixed').length === 0) {
		var alturaDoc = $(window).height();
		var alturaBarra = $('.navbar').height();
		var altura = alturaDoc - alturaBarra;

		$('.topo').height(altura);
	}

	eventScroll();
}

resizeBrowser();

	$(window).resize(resizeBrowser);

function eventScroll() {
	//Menu Fixed Top com efeito
	var secondaryNav = $('.cd-secondary-nav'),
		secondaryNavTopPosition = secondaryNav.offset().top;

	$(window).on('scroll', function () {

		if ($(window).scrollTop() > secondaryNavTopPosition) {
			secondaryNav.addClass('is-fixed');
			setTimeout(function () {
                $('#bs-example-navbar-collapse-1').addClass('pull-right', 'fast');
                $('#bs-example-navbar-collapse-1').removeClass('pull-left', 'fast');
                $('#bs-example-navbar-collapse-1').addClass('animate-children', 'fast');
				$('#btn-social-media-menu-xs').addClass('animate-children', 'fast');

				$(".show-logo").slideDown("fast", function () {
				});
			}, 50);
		} else {
			secondaryNav.removeClass('is-fixed');
			setTimeout(function () {

				$(".show-logo").slideUp("fast", function () {
                    $('#bs-example-navbar-collapse-1').addClass('pull-left', 'fast');
                    $('#bs-example-navbar-collapse-1').removeClass('pull-right', 'fast');
					$('#bs-example-navbar-collapse-1').removeClass('animate-children', 'fast');
					$('#btn-social-media-menu-xs').removeClass('animate-children', 'fast');
				});

			}, 50);
		}
	});
}

});