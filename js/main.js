var current_slaid = 0;
var i_slaider = 0;
var next_fon =2;
var current_fon =1;
var set_size_timer;

window.onload = function() {	
	
	document.getElementsByClassName("left_column")[0].style.height = document.body.clientHeight + "px";
	document.getElementsByClassName("right_column")[0].style.height = document.body.clientHeight - 44 + "px";
	document.getElementsByClassName("center_block")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_block")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("center_fon")[1].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[1].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
	
	var set_size_timer = setTimeout(function() {js_set_size()}, 20);
	var slider_timer=setTimeout(function() {js_main_slider()}, 3000);
}

window.onresize = function() {	
	var set_size_timer = setTimeout(function() {js_set_size()}, 20);	
}

function js_set_size(){
	document.getElementsByClassName("center_block")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_block")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("left_column")[0].style.height = document.body.clientHeight + "px";
	document.getElementsByClassName("right_column")[0].style.height = document.body.clientHeight - 44 + "px";
	document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("center_fon")[1].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[1].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";		
	
	clearInterval(set_size_timer);
	
	document.getElementsByClassName("center_block")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_block")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("left_column")[0].style.height = document.body.clientHeight + "px";
	document.getElementsByClassName("right_column")[0].style.height = document.body.clientHeight - 44 + "px";
	document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("center_fon")[1].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[1].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
	
}

function js_main_slider(){
	if(i_slaider < 100){
		i_slaider += 2;
		document.getElementById("fon" + current_fon).style.opacity = (100-i_slaider)/100;
		document.getElementById("fon" + next_fon).style.opacity = i_slaider/100;
		
		var slider_timer = setTimeout(function() {js_main_slider()}, 40);
	}
	if(i_slaider == 100){
		current_fon = next_fon;
		next_fon += 1;
		if(next_fon == 3)
			next_fon = 1;
		clearInterval(slider_timer);
		i_slaider = 0;
		
		var slider_timer=setTimeout(function() {js_main_slider()}, 3000);
	}
}