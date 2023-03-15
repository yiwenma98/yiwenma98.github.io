// JavaScript Document
$(function () {
	let a = $(".dropdown").find("a").eq("0");
	a.mouseover(function () {
		a.attr("aria-expanded",true);
		a.next().addClass("show");
	})
	a.mouseout(function () {
		a.attr("aria-expanded",false);
		a.next().removeClass("show");
	})
})