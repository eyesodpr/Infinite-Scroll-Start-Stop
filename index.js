// ==UserScript==
// @name         Infinite Scroll Start/Stop
// @namespace    http://doitfast4u.net/
// @version      2.0
// @description  Scrolling shouldnt be this Hard
// @author       Eyes`Only
// @include      http*://*.youtube*
// @grant        GM_openInTab
// @run-at       context-menu
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
/* globals jQuery, $ */

//console.clear();
var body = document.body;
var hgt=$(document).height();
var tout=0;

console.log('Starting script');
//document.body.style.overflow = "unset"; //log able to grow
  $(document).scrollTop($(document).height()+2);

$('ytd-subscription-notification-toggle-button-renderer').toggle();

if ($('ytd-subscription-notification-toggle-button-renderer').is(":hidden")){
  toast('Starting Endless Scroll');
    tout=setTimeout(start,2000);
    toast('starting in 2secs');
}
else {
    toast('Stopping Script');
     toast('Stopping Script');
     toast('Stopping Script');
     toast('Stopping Script');
     toast('Stopping Script');
     toast('Stopping Script');
    clearTimeout(tout);
}

function start() {
  if ($('ytd-subscription-notification-toggle-button-renderer').is(":hidden")) {
       hgt=$(document).height();
       toast('New page height is ',hgt);
       tout=setTimeout(scroll,1000);
     }
    else {
        toast('Script stopped.');
        toast('Script stopped.');
        toast('Script stopped.');
        toast('Script stopped.');
        clearTimeout(tout);
    }
  }

function scroll() {
  $(document).scrollTop($(document).height()*2);
    //toast('Scrolling now');
    setTimeout(start,1000);
}

function toast(m1)
{
	var d = document.createElement("div");
	var msg = m1;
	var i;
	for (i = 1; i < arguments.length; i++)
	{
		if (arguments[i])
		{
			msg = msg + " " + arguments[i];
		}
	}
	$(d).addClass("toast");
	$(d).html(msg);
	$(body).prepend($(d)); //main div
    var col=Math.random()*16777215;
	$(d).css(
	{
		margin: "auto",
        transform: "translateX(-50%)",
		width: "50%",
		opacity: "70%",
		border: "3px solid white",
		padding: "10px",
		"background-color": "black",
		outline: "1",
		"vertical-align": "middle",
		"text-decoration": "none",
		color: "yellow",
		"text-align": "center",
        "font-size": "3em",
		position: "fixed",
		top: "50%",
        left: "50%",
		"z-index": "99999999"
	});
	$(d).hide();
	$(d).slideToggle(300);
	$(d).delay(1000);
	$(d).slideToggle(300);
	$(d).queue(function ()
	{
		$(this).remove();
			console.log('toasted: ', msg);
	});

}