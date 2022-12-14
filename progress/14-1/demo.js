var menuOpen = false; 

function showMenuItems (event){
	event.stopPropagation();
	let menuItems = $('nav > a:not(:first-of-type)');
	if(menuOpen) {
		//menuItems.css('display', 'none');
		menuItems.removeClass('open');
		$('nav > a >span').removeClass('rotated');
		menuOpen = false;
	}
	else {
		//menuItems.css('display', 'inline');
		$('nav > a >span').addClass('rotated');
		menuOpen = true;
	}
}
function hideMenuItems (){
	let menuItems = $('nav > a:not(:first-of-type)');
	//menuItems.css('display', 'none');
	menuItems.removeClass('open');
	$('nav > a >span').removeClass('rotated');
	menuOpen = false;
}

window.onload = function (){
	$('nav > a:first-of-type').on('click', showMenuItems);
	$(document).on('click', hideMenuItems);
};

