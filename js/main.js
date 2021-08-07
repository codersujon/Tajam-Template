$(document).ready(function () {
  //BANNER SLIDER ACTIVATION - SLICK SLIDER
  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
  });

  //VIDEO PLAY PART - VENOBOX
  $('.venobox').venobox({
    border: '4px',
    share: ['facebook', 'download'],
    overlayColor: 'rgba(65, 61, 75, 0.8);'
  });

  //TEAM AREA ACTIVE - SLICK SLIDER
  $('.team-active').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 4,
    speed: 200,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
  });

  //PROJECT IMAGE - VENOBOX
  $('.project-active').venobox({
    border: '2px',
    overlayColor: 'rgba(65, 61, 75, 0.8);',
    spinner: 'three-bounce'
  });

  //PEOPLE SAY SLIDER
  $('.peopleSay-text-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.peopleSay-active'
  });
  $('.peopleSay-active').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.peopleSay-text-active',
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '.peopleSay-left',
    nextArrow: '.peopleSay-right',
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 5,
			slidesToScroll: 1
		  }
		}
	  ]
  });

  //STICKY TOP
  $(window).scroll(function(){
	var scrolling = $(this).scrollTop();
	var sticky = $('.sticky__top');

	if (scrolling >= 50) {
		sticky.addClass('nav-bg');
	} else {
		sticky.removeClass('nav-bg');
	}
  });

  //SCROLL TO TOP 
var scrolltotop = {
	setting: {
		startline: 100,
		scrollto: 0,
		scrollduration: 1e3,
		fadeduration: [500, 100]
	},
	controlHTML: '<img src="img/scroll.png" />',
	controlattrs: {
		offsetx: 5,
		offsety: 5
	},
	anchorkeyword: "#top",
	state: {
		isvisible: !1,
		shouldvisible: !1
	},
	scrollup: function() {
		this.cssfixedsupport || this.$control.css({
			opacity: 0
		});
		var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
		t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({
			scrollTop: t
		}, this.setting.scrollduration)
	},
	keepfixed: function() {
		var t = jQuery(window),
			o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx,
			s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
		this.$control.css({
			left: o + "px",
			top: s + "px"
		})
	},
	togglecontrol: function() {
		var t = jQuery(window).scrollTop();
		this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
			opacity: 1
		}, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
			opacity: 0
		}, this.setting.fadeduration[1]), this.state.isvisible = !1)
	},
	init: function() {
		jQuery(document).ready(function(t) {
			var o = scrolltotop,
				s = document.all;
			o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({
				position: o.cssfixedsupport ? "fixed" : "absolute",
				bottom: o.controlattrs.offsety,
				right: o.controlattrs.offsetx,
				opacity: 0,
				cursor: "pointer"
			}).attr({
				title: "Scroll to Top"
			}).click(function() {
				return o.scrollup(), !1
			}).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({
				width: o.$control.width()
			}), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function() {
				return o.scrollup(), !1
			}), t(window).bind("scroll resize", function(t) {
				o.togglecontrol()
			})
		})
	}
};
scrolltotop.init();


});

