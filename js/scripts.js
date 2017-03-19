function al() {
	alert("ggggg");
	var bt = document.getElementById("bt");
	bt.innerHTML = "gggf";
}

//侧滑菜单
$('.button-collapse').sideNav(
	{
		menuWidth: 280, // Default is 300
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});

//滑动图片
$('.carousel.carousel-slider').carousel({fullWidth: true});
