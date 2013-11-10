var current_slaid = 0;
var i_slaider = 0;
var next_fon =2;
var current_fon =1;
var set_size_timer;
var select_tab_x = 0;
var tmp_time = 0;
var delay_slide = 1000;
var delay_slide_right = 0;
var menu_tab = 0;
var number_elem_right_slider = 0;
var top_elem_right_slider = 0;
var y_elem_right_slider = 0;

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
	document.getElementsByClassName("order_tab1")[0].style.height = document.body.clientHeight - 155 + "px";
	document.getElementsByClassName("order_tab2")[0].style.height = document.body.clientHeight - 155 + "px";
	
	var set_size_timer = setTimeout(function() {js_set_size()}, 20);
	
	number_elem_right_slider = document.getElementsByClassName("right_ul")[0].getElementsByClassName("right_slider").length;
	var set_size_timer = setTimeout(function() {js_set_size()}, 20);
	var slider_timer= setInterval(function() {js_main_slider()}, 15);
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
	document.getElementsByClassName("order_tab1")[0].style.height = document.body.clientHeight - 155 + "px";
	document.getElementsByClassName("order_tab2")[0].style.height = document.body.clientHeight - 155 + "px";
	
	clearTimeout(set_size_timer);
	
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
	document.getElementsByClassName("order_tab1")[0].style.height = document.body.clientHeight - 154 + "px";
	document.getElementsByClassName("order_tab2")[0].style.height = document.body.clientHeight - 154 + "px";
	
}

function js_main_slider(){
	delay_slide -= 3;
	if(delay_slide <= 0){
		tmp_time += 1;
		if(i_slaider < 100){
			if(tmp_time%1 == 0){
				i_slaider += 2;
				document.getElementById("fon" + current_fon).style.opacity = (100-i_slaider)/100;
				document.getElementById("fon" + next_fon).style.opacity = i_slaider/100;
				
				/*var slider_timer = setTimeout(function() {js_main_slider()}, 60);*/
			}
			if(i_slaider >= 100){
				current_fon = next_fon;
				next_fon += 1;
				if(next_fon == 3)
					next_fon = 1;
				/*clearInterval(slider_timer);*/
				i_slaider = 0;
				delay_slide = 1000;
				/*var slider_timer=setTimeout(function() {js_main_slider()}, 3000);*/
			}
		}	
	}
/* ===========================================  BEGIN LEFT MENU ====================================================== */	
	if(menu_tab == 1){
		select_tab_x -= 23;
		document.getElementsByClassName("select_tab")[0].style.left = select_tab_x + "px";
			
		if(select_tab_x < 0){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "default";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "pointer";
			document.getElementsByClassName("select_tab")[0].style.left = 0 + "px";
			menu_tab = 0;
		}
	}
	if(menu_tab == 2){
		select_tab_x += 23;	
		document.getElementsByClassName("select_tab")[0].style.left = select_tab_x + "px";
		
		if(select_tab_x > 140){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "pointer";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "default";
			document.getElementsByClassName("select_tab")[0].style.left = 140 + "px";
			menu_tab = 0;
		}
	}
/* ===============================================  END LEFT MENU ====================================================== */	
/* =============================================== BEGIN RIGNT SLIDER ================================================== */ 
	delay_slide_right -= 1;
	if(delay_slide_right < 0){
		var top_elem = Math.floor(-y_elem_right_slider/75);		
		y_elem_right_slider -=3;
		for(i = 0; i < number_elem_right_slider; i++){
			if(i < top_elem){
				document.getElementsByClassName("right_slider")[i].style.top = (number_elem_right_slider)*75 + y_elem_right_slider + i * 75 + "px";	
			}
			else{
				document.getElementsByClassName("right_slider")[i].style.top = y_elem_right_slider + i * 75 + "px";	
			}
		}
		if(y_elem_right_slider <= -(number_elem_right_slider)*75 )
			y_elem_right_slider = 0;
		
		if(top_elem < Math.floor(-y_elem_right_slider/75) || (Math.floor(-y_elem_right_slider/75 == 0 ))){
			delay_slide_right = 100;
		}
	}	
/* =============================================== END RIGNT SLIDER ================================================== */ 
	
}

function js_menu_tab(tab){
	menu_tab = tab;
	if(tab == 1){
		/*var menu_tab_timer = setInterval(function() {js_menu_tab1()}, 5);*/
	}
	if(tab == 0){
		document.getElementsByClassName("select_tab")[0].style.left = select_tab_x + "px";
		select_tab_x -= 4;
		var menu_tab_timer = setTimeout(function() {js_menu_tab(tab)}, 5);
		if(select_tab_x < 0){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "default";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "pointer";
			document.getElementsByClassName("select_tab")[0].style.left = 0 + "px";
			clearInterval(menu_tab_timer);
		}
	}
	
}

function js_menu_tab1(){
	document.getElementsByClassName("select_tab")[0].style.left = select_tab_x + "px";
		select_tab_x += 4;		
		if(select_tab_x > 140){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "pointer";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "default";
			document.getElementsByClassName("select_tab")[0].style.left = 140 + "px";
			clearInterval(menu_tab_timer);
		}
}