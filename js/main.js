var current_slaid = 0;
var i_slaider = 0;
var next_fon =2;
var current_fon =1;
var set_size_timer;
var select_tab_x = 0;
var select_tab1_y = 115;
var select_tab2_y = 156;
var tmp_time = 0;
var delay_slide = 1000;
var delay_slide_right = 0;
var menu_tab = 0;
var number_elem_right_slider = 0;
var top_elem_right_slider = 0;
var y_elem_right_slider = 0;
var tab1_time = 0;
var y_login_form = -145;
var y_qwestion_form = -145;
var login_open = 0;
var login_close = 0;
var qwestion_open = 0;
var qwestion_close = 0;
var data_fild;
var calendar_open = 0;
var calendar_close = 0;
var calendar_left = -293;
var tab1_check_status = 0;
var tab1_people_open = 0;
var tab1_detail_open = 0;
var tab1_find_open = 0;
var tab2_people_open = 0;
var tab2_detail_open = 0;
var tab2_find_open = 0;
var start_bar_x = -1;
var select_bar = -1;
var calendar_move = 0;
var left_menu_tab1 = 1;
var left_menu_tab2 = 0;
var end_city = 0;
var current_tab = 1;
var main_page;
var article_width = 0;
var article_panel_open = 0;
var article_panel_close = 0;
var panel_type = 0;
var big_foto_opacity = 0;
var number_block = 0;
var another_block_height = 0;
var height_tmp = 0;
var slider_on = 0;
var manual_slide = -1;
var slider_pointer_top = 0;
var slider_step = 0;
var main_slogan_z = 0;
var main_price_x = 0;

window.onload = function() {	
	
	document.getElementsByClassName("left_column")[0].style.height = document.body.clientHeight + "px";
	document.getElementsByClassName("center_block")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_block")[0].style.width = document.body.clientWidth - 371 + "px";
	
	document.getElementsByClassName("order_tab1")[0].style.height = document.body.clientHeight - 65 + "px";
	document.getElementsByClassName("order_tab2")[0].style.height = document.body.clientHeight - 65 + "px";
	if(document.getElementById("page_number").innerHTML  == 1){
		document.getElementsByClassName("right_column")[0].style.height = document.body.clientHeight - 44 + "px";
		document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[1].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[1].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
		number_elem_right_slider = document.getElementsByClassName("right_ul")[0].getElementsByClassName("right_slider").length;
	}
	var set_size_timer = setTimeout(function() {js_set_size()}, 20);
	
	
	var set_size_timer = setTimeout(function() {js_set_size()}, 20);
	var slider_timer= setInterval(function() {js_main_slider()}, 5);
	
	/*jQuery('.order_tab1').jScrollPane();*/
}

window.onresize = function() {	
	var set_size_timer = setTimeout(function() {js_set_size()}, 20);	
}

function js_set_size(){
	document.getElementsByClassName("center_block")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_block")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("left_column")[0].style.height = document.body.clientHeight + "px";
	
	document.getElementsByClassName("order_tab1")[0].style.height = document.body.clientHeight - 65 + "px";
	document.getElementsByClassName("order_tab2")[0].style.height = document.body.clientHeight - 65 + "px";
	if(document.getElementById("page_number").innerHTML  == 1){
		document.getElementsByClassName("right_column")[0].style.height = document.body.clientHeight - 44 + "px";
		document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[1].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[1].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
	}
	clearTimeout(set_size_timer);
	
	document.getElementsByClassName("center_block")[0].style.height = document.body.clientHeight - 104 + "px";
	document.getElementsByClassName("center_block")[0].style.width = document.body.clientWidth - 371 + "px";
	document.getElementsByClassName("left_column")[0].style.height = document.body.clientHeight + "px";
	
	document.getElementsByClassName("order_tab1")[0].style.height = document.body.clientHeight - 155 + "px";
	document.getElementsByClassName("order_tab1_main")[0].style.height = document.body.clientHeight - 155 - 70 + "px";
	document.getElementsByClassName("order_tab2_main")[0].style.height = document.body.clientHeight - 155 - 70 + "px";
	document.getElementsByClassName("order_tab1_back")[0].style.height = document.body.clientHeight - 155 - 70 + "px";
	document.getElementsByClassName("order_tab2_back")[0].style.height = document.body.clientHeight - 155 - 70 + "px";
	document.getElementsByClassName("order_tab2")[0].style.height = document.body.clientHeight - 155 + "px";
	document.getElementsByClassName("calendar_block")[0].style.height = document.body.clientHeight - 60 + "px";
	document.getElementsByClassName("calendar_cont")[0].style.height = document.body.clientHeight - 130 + "px";
	if(document.getElementById("page_number").innerHTML  == 1){
		document.getElementsByClassName("right_column")[0].style.height = document.body.clientHeight - 44 + "px";
		document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[1].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[1].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[0].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[2].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[2].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("center_fon")[3].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("center_fon")[3].style.width = document.body.clientWidth - 371 + "px";
		document.getElementsByClassName("slider_nav")[0].style.top = (document.body.clientHeight - 104)/2-65 + "px";
		
	}
	if(document.getElementById("page_number").innerHTML  == 2){
		document.getElementsByClassName("block_voyage")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("block_voyage")[0].style.width = document.body.clientWidth - 273 + "px";
		document.getElementsByClassName("voyage_right_block")[0].style.width = document.body.clientWidth - 273 - article_width + "px";
		document.getElementsByClassName("scroll_conteiner")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("voyage_article")[0].style.height = document.body.clientHeight - 178 + "px";
		jQuery('.voyage_article_body').jScrollPane();
		
		$(window).ready(function(){			
			$('#container_voyage').masonry({ // �������� �������-��������� � ������� ����������� ����� ��� ������������ �������
			  itemSelector: '.item', // ��������� ����� �������� ����������� ������ � ����� �����
			  singleMode: true, // true - ���� � ��� ��� ����� ���������� ������
			  resizeable: true, // ������������� ����� ��� ��������� �������� ����
			  isAnimated: !Modernizr.csstransitions // ��������� ������������ ������ ��� ������ css transitions � Modernizr
			}); 
		});
		/*  ��������� ������ ������� ��� �������� ����� � �����  */
		$(window).ready(function(){			
			$('#container_voyage').masonry({ // �������� �������-��������� � ������� ����������� ����� ��� ������������ �������
			  itemSelector: '.item', // ��������� ����� �������� ����������� ������ � ����� �����
			  singleMode: true, // true - ���� � ��� ��� ����� ���������� ������
			  resizeable: true, // ������������� ����� ��� ��������� �������� ����
			  isAnimated: !Modernizr.csstransitions // ��������� ������������ ������ ��� ������ css transitions � Modernizr
			}); 
		});
		
	}
	if(document.getElementById("page_number").innerHTML  == 3){
		document.getElementsByClassName("block_voyage")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("block_voyage")[0].style.width = document.body.clientWidth - 273 + "px";
		document.getElementsByClassName("block_voyage_detail")[0].style.width = document.body.clientWidth - 673 + "px";
		document.getElementsByClassName("voyage_article_open")[0].style.height = document.body.clientHeight - 178 + "px";
		jQuery('.voyage_article_body').jScrollPane();	
	}
	if(document.getElementById("page_number").innerHTML  == 4){
		document.getElementsByClassName("block_voyage")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("block_voyage")[0].style.width = document.body.clientWidth - 273 + "px";
		document.getElementsByClassName("block_about")[0].style.width = document.body.clientWidth - 673 + "px";
		document.getElementsByClassName("voyage_about_open")[0].style.height = document.body.clientHeight - 134 + "px";
		jQuery('.voyage_article_body').jScrollPane();	
	}
	if(document.getElementById("page_number").innerHTML  == 5){
		document.getElementsByClassName("block_search")[0].style.width = document.body.clientWidth - 273 + "px";
		document.getElementsByClassName("block_search_scroll")[0].style.height = document.body.clientHeight - 104 + "px";
		document.getElementsByClassName("block_search_scroll")[0].style.width = document.body.clientWidth - 273 + "px";
	/*	document.getElementsByClassName("search_rezult")[0].style.width = document.body.clientWidth - 300 + "px";  */
		$(".search_rezult").css("width", document.body.clientWidth - 300 + "px");
		$(".search_result_another").css("width", document.body.clientWidth - 362 + "px");
		$(".search_rezult_left").css("width", document.body.clientWidth - 460 + "px");
	/*	document.getElementsByClassName("search_rezult_left")[0].style.width = document.body.clientWidth - 460 + "px";
		document.getElementsByClassName("block_about")[0].style.width = document.body.clientWidth - 673 + "px";
		document.getElementsByClassName("voyage_about_open")[0].style.height = document.body.clientHeight - 134 + "px";*/
		jQuery('.block_search_scroll').jScrollPane();	
	}
	jQuery('.order_tab1_main').jScrollPane();
	jQuery('.order_tab2_main').jScrollPane();
	/*jQuery('.order_tab1').jScrollPane();*/
}

function js_main_slider(){
	
	
	
/*	if(document.getElementById("page_number").innerHTML  == 1 && slider_on == 1){*/
	if(slider_on == 1){
		main_slogan_z = -0.3;
		document.getElementsByClassName("slogan")[current_fon-1].style.opacity = main_slogan_z ;
		main_price_x = -200;
		document.getElementsByClassName("price")[current_fon-1].style.right = main_price_x + "px";
		if(manual_slide > -1){
			next_fon = manual_slide+1;
		}
		slider_step = 6;
		if(next_fon < current_fon){
			slider_step = -6;
		}
		
		for(i= 0; i < 4; i++){
			document.getElementsByClassName("slider_nav_li")[i].style.backgroundPosition = "0px -598px";
		}
		document.getElementsByClassName("slider_nav_li")[next_fon-1].style.backgroundPosition = "0px -623px";
		
		delay_slide -= 3;
		if(delay_slide <= 0){
			tmp_time += 1;
			if(i_slaider < 100){
				if(tmp_time%1 == 0){
					i_slaider += 5;
					document.getElementById("fon" + current_fon).style.opacity = (100-i_slaider)/100;
					document.getElementById("fon" + next_fon).style.opacity = i_slaider/100;
					slider_pointer_top += slider_step;
					if(slider_step > 0 && slider_pointer_top > (next_fon-1)*38){
						slider_pointer_top = (next_fon-1)*38;
						document.getElementsByClassName("slider_pointer_txt")[0].innerHTML = document.getElementsByClassName("slider_pointer_value")[next_fon - 1].innerHTML;
						
					}
					if(slider_step < 0 && slider_pointer_top < (next_fon-1)*38){
						slider_pointer_top = (next_fon-1)*38;
						document.getElementsByClassName("slider_pointer_txt")[0].innerHTML = document.getElementsByClassName("slider_pointer_value")[next_fon - 1].innerHTML;
					}
					document.getElementsByClassName("slider_pointer")[0].style.top = slider_pointer_top + "px";
					
					/*var slider_timer = setTimeout(function() {js_main_slider()}, 60); */
				}
				if(i_slaider >= 100){
					current_fon = next_fon;
					next_fon += 1;
					manual_slide = -1;
					if(next_fon == 5)
						next_fon = 1;
					/*clearInterval(slider_timer);*/
					i_slaider = 0;
					delay_slide = 3000;
					slider_on = 0;
					/*var slider_timer=setTimeout(function() {js_main_slider()}, 3000);*/
				}
			}	
		}
	}	
	else{
		delay_slide -= 3;
		if(delay_slide < 0){
			slider_on = 1;
		
		}
	if(main_slogan_z < 1){
		main_slogan_z +=0.01;
		document.getElementsByClassName("slogan")[current_fon-1].style.opacity = main_slogan_z;	
	}
	if(main_slogan_z >= 1 && main_price_x < 40){
		main_price_x += 6;
		document.getElementsByClassName("price")[current_fon-1].style.right = main_price_x + "px";
	}
/* ===========================================  BEGIN LEFT MENU ====================================================== */	
	if(menu_tab == 1){
		select_tab1_y -= 4;		
		select_tab2_y += 4;
		left_menu_tab1 +=0.09;
		left_menu_tab2 -=0.09;
		if(select_tab1_y < 115){
			select_tab1_y = 115;
			select_tab2_y = 156;
		}
		document.getElementsByClassName("order_tab1")[0].style.opacity = left_menu_tab1;
		document.getElementsByClassName("order_tab2")[0].style.opacity = left_menu_tab2;	
		if(left_menu_tab2 < 0){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "default";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "pointer";
			document.getElementsByClassName("select_tab")[0].style.top = 115 + "px";
			document.getElementsByClassName("select_tab2")[0].style.top = 156 + "px";
			document.getElementsByClassName("order_tab2")[0].style.display = "none";
			menu_tab = 0;
		}
		if(select_tab_x < 0){
			select_tab_x = 0;
		}
		if(left_menu_tab1 > 1){
			left_menu_tab1 = 1;
			left_menu_tab2 = 0;
		}
		document.getElementsByClassName("select_tab")[0].style.top = select_tab1_y + "px";
		document.getElementsByClassName("select_tab2")[0].style.top = select_tab2_y + "px";
	}
	if(menu_tab == 2){
		jQuery('.order_tab2_main').jScrollPane();
		select_tab1_y += 4;		
		select_tab2_y -= 4;		
		left_menu_tab1 -=0.09;
		left_menu_tab2 +=0.09;
		if(select_tab2_y < 115){
			select_tab2_y = 115;
		}
		document.getElementsByClassName("order_tab1")[0].style.opacity = left_menu_tab1;
		document.getElementsByClassName("order_tab2")[0].style.opacity = left_menu_tab2;
		document.getElementsByClassName("order_tab2")[0].style.display = "block";
		if(select_tab1_y > 156 && left_menu_tab2 >= 1){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "pointer";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "default";
			document.getElementsByClassName("select_tab")[0].style.top = 156 + "px";
			document.getElementsByClassName("select_tab2")[0].style.top = 115 + "px";
			select_tab1_y = 156;
			menu_tab = 0;
			return 0;
		}
		if(select_tab1_y == 156){
			jQuery('.order_tab2_main').jScrollPane();
			select_tab1_y = 156;
		}
		if(left_menu_tab1 < 0){
			left_menu_tab1 = 0;
			left_menu_tab2 = 1;
		}
		document.getElementsByClassName("select_tab")[0].style.top = select_tab1_y + "px";
		document.getElementsByClassName("select_tab2")[0].style.top = select_tab2_y + "px";
	}
/* ===============================================  END LEFT MENU ====================================================== */	
/* =============================================== BEGIN RIGNT SLIDER ================================================== */ 
	if(document.getElementById("page_number").innerHTML  == 1){
		delay_slide_right -= 1;
		if(delay_slide_right < 0){
			var top_elem = Math.floor(-y_elem_right_slider/75);		
			y_elem_right_slider -=0.7;
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
				delay_slide_right = 600;
			}
		}
	}	
/* =============================================== END RIGNT SLIDER ================================================== */ 
/* =============================================== BEGIN LOGIN FORM ============================================ */
	if(login_open == 1 && y_login_form < 60){
		y_login_form += 5;
		if(y_login_form >= 60){
			y_login_form = 60
			login_open = 0;
			document.getElementsByClassName("login_form_fon")[0].style.zIndex = 600;
		}
		document.getElementsByClassName("login_form")[0].style.top = y_login_form + "px";
		
		
	
	}
	if(login_close == 1){
		document.getElementsByClassName("login_form_fon")[0].style.zIndex = 500;
		y_login_form -= 5;
		document.getElementsByClassName("login_form")[0].style.top = y_login_form + "px";
		if(y_login_form < -205){
			login_close = 0;
			document.getElementsByClassName("login_form_fon")[0].style.display = "none";
		}
	}

/* =============================================== END LOGIN FORM ============================================ */
/* =============================================== BEGIN QWESTION FORM ============================================ */
	if(qwestion_open == 1 && y_qwestion_form < 44){
		y_qwestion_form += 4;
		if(y_qwestion_form >= 44){
			y_qwestion_form = 44
			qwestion_open = 0;
			document.getElementsByClassName("login_form_fon")[0].style.zIndex = 600;
		}
		document.getElementsByClassName("consultant")[0].style.bottom = y_qwestion_form + "px";
		
		
	
	}
	if(qwestion_close == 1){
		document.getElementsByClassName("login_form_fon")[0].style.zIndex = 500;
		y_qwestion_form -= 4;
		document.getElementsByClassName("consultant")[0].style.bottom = y_qwestion_form + "px";
		if(y_qwestion_form < -195){
			qwestion_close = 0;
			document.getElementsByClassName("login_form_fon")[0].style.display = "none";
		}
	}

/* =============================================== END QWESTION FORM ============================================ */
/* =============================================== BEGIN VIEW LEFT BLOCKS ============================================ */	
	if(tab1_time > 0 && tab1_time <1.1){
		tab1_time += 0.02;		
		document.getElementsByClassName("tab1_time_from")[0].style.opacity = tab1_time;		
		document.getElementsByClassName("tab1_time_back")[0].style.opacity = tab1_time;
		document.getElementsByClassName("tab1_timeline_from")[0].style.opacity = tab1_time;
		document.getElementsByClassName("tab1_timeline_back")[0].style.opacity = tab1_time;
		if(tab1_time == 1)
			tab1_time = 10;
	}
	if(tab1_people_open > 0 && tab1_people_open < 1.1){
		tab1_people_open += 0.02
		document.getElementsByClassName("tab1_people")[0].style.opacity = tab1_people_open;
		if(tab1_people_open == 1)
			tab1_people_open = 10;
	}
	if(tab2_people_open > 0 && tab2_people_open < 1.1){
		tab2_people_open += 0.02
			
		document.getElementsByClassName("tab2_people")[0].style.opacity = tab2_people_open;
		if(tab2_people_open == 1)
			tab2_people_open = 10;
	}
	if(tab1_detail_open > 0 && tab1_detail_open < 1.1){
		tab1_detail_open += 0.02
		document.getElementsByClassName("tab1_detail")[0].style.opacity = tab1_detail_open;		
		if(tab1_detail_open == 1)
			tab1_detail_open = 10;
	}
	if(tab2_detail_open > 0 && tab2_detail_open < 1.1){
		tab2_detail_open += 0.02
		document.getElementsByClassName("tab2_detail")[0].style.opacity = tab2_detail_open;		
		if(tab2_detail_open == 1)
			tab2_detail_open = 10;
	}
	if(tab1_find_open > 0 && tab1_find_open < 1.1){
		tab1_find_open += 0.02
		document.getElementsByClassName("tab1_find")[0].style.opacity = tab1_find_open;
		
		if(tab1_find_open == 1)
			tab1_find_open = 10;
	}
	if(tab2_find_open > 0 && tab2_find_open < 1.1){
		tab2_find_open += 0.02
		document.getElementsByClassName("tab2_find")[0].style.opacity = tab2_find_open;
		
		if(tab2_find_open == 1)
			tab2_find_open = 10;
	}
	
/* =============================================== END VIEW LEFT BLOCKS ============================================ */		
/* =============================================== BEGIN CALENDAR ================================================== */	
	if(calendar_open == 1){
		calendar_left += 8;
		if(calendar_left > 0){
			calendar_left = 0;
			calendar_open = 0;
		}
		document.getElementsByClassName("calendar_block")[0].style.left = calendar_left + "px";
		
	}
	if(calendar_close == 1){
		calendar_left -= 8;
		if(calendar_left < -293){
			calendar_left = -293;
			calendar_open = -293;
		}
		document.getElementsByClassName("calendar_block")[0].style.left = calendar_left + "px";
		
	}
	if(calendar_y_tmp > calendar_y_end){
		calendar_y_tmp -= 7;
		if(calendar_y_tmp < calendar_y_end){
			calendar_y_tmp = calendar_y_end;
		}
		for(i = 0; i< 13; i++){
			month_top_height = document.getElementById("month"+i).offsetHeight;
			var next_elem = i + 1;
			document.getElementById("month"+i).style.position = "absolute";
			document.getElementById("month"+i).style.top = month_height_all + calendar_y_tmp + "px";
			month_height_all += month_top_height;
		}		
		month_height_all = 0;
		if(calendar_y_tmp == calendar_y_end){
			calendar_move = 0;
		}
	}
	if(calendar_y_tmp < calendar_y_end){
		calendar_y_tmp += 7;
		if(calendar_y_tmp > calendar_y_end){
			calendar_y_tmp = calendar_y_end;
		}
		for(i = 0; i< 13; i++){
			month_top_height = document.getElementById("month"+i).offsetHeight;
			var next_elem = i + 1;
			document.getElementById("month"+i).style.position = "absolute";
			document.getElementById("month"+i).style.top = month_height_all + calendar_y_tmp + "px";
			month_height_all += month_top_height;
		}
		month_height_all = 0;
		if(calendar_y_tmp == calendar_y_end){
			calendar_move = 0;
		}
	}
	
	
	
	
/* =============================================== END CALENDAR ================================================== */	
/* =============================================== BEGIN NEWS ================================================== */	
	if(document.getElementById("page_number").innerHTML  == 2 && article_panel_open == 1){
		article_width += 10;
		if(article_width >= 400){
			article_width = 400;
			article_panel_open = 0;
		}
		document.getElementsByClassName("voyage_article")[0].style.left = -400 + article_width + "px";
		document.getElementById("container_voyage").style.marginLeft = article_width + 10 + "px";	
		document.getElementById("container_voyage").style.width = document.body.clientWidth - 273 - article_width + "px";
		if(panel_type == 'foto'){
			big_foto_opacity += 0.05;
			document.getElementsByClassName("voyage_big_foto")[0].style.display = 'block';
			document.getElementsByClassName("voyage_big_foto")[0].style.opacity = big_foto_opacity;
			voyage_big_foto
		}
		if(article_panel_open == 0){
			$(window).ready(function(){			
				$('#container_voyage').masonry({ // �������� �������-��������� � ������� ����������� ����� ��� ������������ �������
				itemSelector: '.item', // ��������� ����� �������� ����������� ������ � ����� �����
				singleMode: true, // true - ���� � ��� ��� ����� ���������� ������
				resizeable: true, // ������������� ����� ��� ��������� �������� ����
				isAnimated: !Modernizr.csstransitions // ��������� ������������ ������ ��� ������ css transitions � Modernizr
				}); 
			});
		}	
		
	}
	if(document.getElementById("page_number").innerHTML  == 2 && article_panel_close == 1){
		article_width -= 10;
		if(article_width <= 0){
			article_width = 0;
			article_panel_close = 0;
		}
		document.getElementsByClassName("voyage_article")[0].style.left = -400 + article_width + "px";
		document.getElementById("container_voyage").style.marginLeft = article_width + 10 + "px";	
		document.getElementById("container_voyage").style.width = document.body.clientWidth - 273 - article_width + "px";
		if(panel_type == 'foto'){
			big_foto_opacity -= 0.05;
			/**/
			document.getElementsByClassName("voyage_big_foto")[0].style.opacity = big_foto_opacity;
		}
		if(article_panel_close == 0){
			document.getElementsByClassName("voyage_big_foto")[0].style.display = 'none';
			$(window).ready(function(){			
				$('#container_voyage').masonry({ // �������� �������-��������� � ������� ����������� ����� ��� ������������ �������
				itemSelector: '.item', // ��������� ����� �������� ����������� ������ � ����� �����
				singleMode: true, // true - ���� � ��� ��� ����� ���������� ������
				resizeable: true, // ������������� ����� ��� ��������� �������� ����
				isAnimated: !Modernizr.csstransitions // ��������� ������������ ������ ��� ������ css transitions � Modernizr
				}); 
			});
		}	
		
	}
/* =============================================== END NEWS ================================================== */	
	if(document.getElementById("page_number").innerHTML  == 5){
		if(number_block > 0 && height_tmp < another_block_height){
			height_tmp += 11;
			if(height_tmp >= another_block_height){
				document.getElementsByClassName("another_cont")[number_block-1].style.height = another_block_height+ "px";
				number_block = 0;
				height_tmp  = 0;
				jQuery('.block_search_scroll').jScrollPane();	
			}
			document.getElementsByClassName("another_cont")[number_block-1].style.height = height_tmp + "px";
			
		}
	}
	}
}

function js_menu_tab(tab){
	menu_tab = tab;
	if(tab == 1){
		/*var menu_tab_timer = setInterval(function() {js_menu_tab1()}, 5);*/
	}
	if(tab == 0){
		document.getElementsByClassName("select_tab")[0].style.left = select_tab_x + "px";
		select_tab_x -= 2;
		var menu_tab_timer = setTimeout(function() {js_menu_tab(tab)}, 5);
		if(select_tab_x < 0){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "default";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "pointer";
			document.getElementsByClassName("select_tab")[0].style.left = 0 + "px";
			clearInterval(menu_tab_timer);
		}
	}
	current_tab = tab;
}

function js_menu_tab1(){
	document.getElementsByClassName("select_tab")[0].style.left = select_tab_x + "px";
		select_tab_x += 2;		
		if(select_tab_x > 140){
			document.getElementsByClassName("menu_tab")[0].style.cursor = "pointer";
			document.getElementsByClassName("menu_tab")[1].style.cursor = "default";
			document.getElementsByClassName("select_tab")[0].style.left = 140 + "px";
			clearInterval(menu_tab_timer);
		}
}

function js_tab1_checkbox_status(){
	if(tab1_check_status == 0){
		tab1_check_status = 1;
		if(document.getElementsByClassName("tab1_time_back")[0].style.opacity > 0.9){
			document.getElementsByClassName("tab1_time_back")[0].style.display = "none";
			document.getElementsByClassName("tab1_timeline_back")[0].style.display = "none"; 
			document.getElementsByClassName("tab1_time_back")[1].style.display = "none";
			document.getElementsByClassName("tab1_timeline_back")[1].style.display = "none";
		}
		else{
			document.getElementsByClassName("tab1_time_back")[1].style.display = "none";
			document.getElementsByClassName("tab1_timeline_back")[1].style.display = "none";
		}
		return 0;
	}
	if(tab1_check_status == 1){
		tab1_check_status = 0;
		if(document.getElementsByClassName("tab1_time_back")[0].style.opacity > 0.9){
			document.getElementsByClassName("tab1_time_back")[0].style.display = "block";
			document.getElementsByClassName("tab1_timeline_back")[0].style.display = "block"; 
			document.getElementsByClassName("tab1_time_back")[1].style.display = "block";
			document.getElementsByClassName("tab1_timeline_back")[1].style.display = "block";
		}
		else{
			document.getElementsByClassName("tab1_time_back")[1].style.display = "block";
			document.getElementsByClassName("tab1_timeline_back")[1].style.display = "block";
		}
		return 0;
	}
	return 0;
}

function js_focus(elem){
	elem.style.backgroundColor = "#fff";
}

function js_blur(elem){
	elem.style.backgroundColor = "#e4e8eb";
}

function js_tab1_clear(block_class){
	document.getElementsByClassName(block_class)[0].value = "";
}

function js_next_block(fild_1, fild_2){
	if(document.getElementsByClassName(fild_1)[0].value != "" && document.getElementsByClassName(fild_2)[0].value != ""){
		if(tab1_time == 0){
			document.getElementsByClassName("tab1_time_from")[0].style.display = "block";
			document.getElementsByClassName("tab1_time_from")[1].style.opacity = 0;
			document.getElementsByClassName("tab1_time_back")[1].style.opacity = 0;
			document.getElementsByClassName("tab1_timeline_from")[0].style.display = "block";
			document.getElementsByClassName("tab1_timeline_from")[1].style.opacity = 0;
			if(tab1_check_status == 0){
				document.getElementsByClassName("tab1_timeline_back")[0].style.display = "block";
				document.getElementsByClassName("tab1_time_back")[0].style.display = "block";				
			}
			else{
				document.getElementsByClassName("tab1_timeline_back")[0].style.display = "none";
				document.getElementsByClassName("tab1_time_back")[0].style.display = "none";	
			}
			document.getElementsByClassName("tab1_timeline_back")[1].style.opacity = 0;
			tab1_time = 0.2;
			jQuery('.order_tab1_main').jScrollPane();
		}
	}
		
}

function js_calendar(fild_name){
	data_fild = fild_name;
	document.getElementsByClassName("calendar_block")[0].style.display = "block";
	createCalendar("month1", 2013, 2);
	
	
/*	document.getElementsByClassName("tab1_people")[0].style.display = "block";
	document.getElementsByClassName("tab1_people")[1].style.opacity = 0;   */
	
	bild_calendar();
	calendar_open = 1;
	calendar_close = 0;
}

function js_number_up(fild_name){
	var tmp = parseInt(document.getElementsByClassName(fild_name)[0].value);
	if(document.getElementsByClassName(fild_name)[0].value == "")
		tmp = 0;
	tmp += 1;
	document.getElementsByClassName(fild_name)[0].value = tmp;
	js_next_detail(fild_name)
}

function js_number_up2(fild_name){
	var tmp = parseInt(document.getElementsByClassName(fild_name)[0].value);
	if(document.getElementsByClassName(fild_name)[0].value == "")
		tmp = 0;
	tmp += 1;
	document.getElementsByClassName(fild_name)[0].value = tmp;
	js_next_detail2(fild_name);
}

function js_number_dwn(fild_name){
	var tmp = parseInt(document.getElementsByClassName(fild_name)[0].value);
	tmp -= 1;
	if (tmp > -1)
		document.getElementsByClassName(fild_name)[0].value = tmp;
	js_next_detail(fild_name)
}

function js_number_dwn2(fild_name){
	var tmp = parseInt(document.getElementsByClassName(fild_name)[0].value);
	tmp -= 1;
	if (tmp > -1)
		document.getElementsByClassName(fild_name)[0].value = tmp;
	js_next_detail2(fild_name);
}

function js_next_detail(fild_name){
	if(document.getElementsByClassName(fild_name)[0].value != ""){
		if(tab1_detail_open == 0)
			tab1_detail_open = 0.2;
		document.getElementsByClassName("tab1_detail")[0].style.display = "block";
		document.getElementsByClassName("tab1_detail")[1].style.opacity = 0;
		
		jQuery('.order_tab1_main').jScrollPane();
	}
}

function js_next_detail2(fild_name){
	if(document.getElementsByClassName(fild_name)[0].value != ""){
		if(tab2_detail_open == 0)
			tab2_detail_open = 0.2;
		document.getElementsByClassName("tab2_detail")[0].style.display = "block";
		document.getElementsByClassName("tab2_detail")[1].style.opacity = 0;
		
		jQuery('.order_tab2_main').jScrollPane();
	}
}

function js_login_open_fon() {
	  
	document.getElementsByClassName("login_form_fon")[0].style.display = "block";
	document.getElementsByClassName("login_form")[0].style.display = "block";
	
	if(y_login_form < -143){
		login_open = 1;
		y_login_form = -144;
	}
}

function js_login_close_fon(event) {
  // �������� ������ �������
  event = event || window.event
  var t = event.target || event.srcElement
  
  if(t.className == "login_form_fon"){
		if(y_login_form > 40){
			login_close = 1;  
		}
		if(y_qwestion_form > 40){
			qwestion_close = 1;
		}
	}
}
 
 function js_qwestion_open() {
	document.getElementsByClassName("consultant")[0].style.bottom = - 140 + "px";  
	document.getElementsByClassName("login_form_fon")[0].style.display = "block";
	document.getElementsByClassName("consultant")[0].style.display = "block";
	
	if(y_qwestion_form < -143){
		qwestion_open = 1;
		y_qwestion_form = -144;
	}
}

function js_qwestion_close(event) { 
	qwestion_close = 1; 
} 
 
function js_select_form(t, number){
	document.getElementsByClassName("tab1_class_select_ul")[number].style.display = "block"
	if(number == 1){	
		var br = t.getBoundingClientRect();
		document.getElementsByClassName("tab1_class_select_ul")[number].style.top = br.top -135 + "px";
		document.getElementsByClassName("tab1_class_select_ul")[number].style.left = 22 + "px";
		
		document.getElementsByClassName("select_form")[0].style.display = "block"
		jQuery('.tab1_class_select_ul').jScrollPane();
	}
	/*document.getElementsByClassName("tab1_class_select_ul")[number].style.display = "block"*/
}

function js_select_form2(t, number){
	document.getElementsByClassName("tab2_class_select_ul")[number].style.display = "block"
	if(number == 1){	
		document.getElementsByClassName("tab2_class_select_ul")[number].style.display = "block"
		var br = t.getBoundingClientRect();
		document.getElementsByClassName("tab2_class_select_ul")[number].style.top = br.top -135 + "px";
		document.getElementsByClassName("tab2_class_select_ul")[number].style.left = 22 + "px";
		
		document.getElementsByClassName("select_form")[0].style.display = "block"
		jQuery('.tab2_class_select_ul').jScrollPane();
	}
	/*document.getElementsByClassName("tab1_class_select_ul")[number].style.display = "block"*/
}

function js_select_form_li(t, number){
	if(current_tab == 1){                         /*  ������ ������ ���  */
		document.getElementsByClassName("tab1_class_select_fild")[number].value = t.innerHTML;
		document.getElementsByClassName("tab1_class_select_ul")[number].style.display = "none"
		
		if(number == 1){
			document.getElementsByClassName("select_form")[0].style.display = "none"
		}
	}
	if(current_tab ==2){						/*  ������ ������ ���  */
		document.getElementsByClassName("tab2_class_select_fild")[number].value = t.innerHTML;
		document.getElementsByClassName("tab2_class_select_ul")[number].style.display = "none"
		
		if(number == 1){
			document.getElementsByClassName("select_form")[0].style.display = "none";
		}
	
	}

	
	if(document.getElementsByClassName("tab1_class_select_fild")[0].value != "" && document.getElementsByClassName("tab1_class_select_fild")[1].value != ""){		
		tab1_find_open = 0.2;
	}
	if(document.getElementsByClassName("tab2_class_select_fild")[0].value != "" && document.getElementsByClassName("tab2_class_select_fild")[1].value != ""){		
		tab2_find_open = 0.2;
	}
}
  
function js_route_city_del(t){
	t.parentNode.style.display = "none";
	document.getElementsByClassName("tab2_route")[1].style.height = document.getElementsByClassName("tab2_route")[0].offsetHeight - 11 + "px"; 
}

function js_tab2_continue(){
	document.getElementsByClassName("tab2_route")[0].style.display = "block";
	document.getElementsByClassName("tab2_route")[1].style.display = "block";
	if(end_city == 0){
		document.getElementsByClassName("tab2_route")[0].innerHTML += '<span class="tab2_route_city">'+   
								document.getElementsByClassName("tab2_from_fild")[0].value+
								'<span class="tab2_route_city_del" onClick="js_route_city_del(this)"></span>'+
								'<span class="arrow_next"></span>'+
								'</span>';
		
		end_city = document.getElementsByClassName("tab2_to_fild")[0].value;
	}
	document.getElementsByClassName("tab2_from_fild")[0].value = document.getElementsByClassName("tab2_to_fild")[0].value;
	document.getElementsByClassName("tab2_route")[0].innerHTML += '<span class="tab2_route_city">'+   
								document.getElementsByClassName("tab2_to_fild")[0].value+
								'<span class="tab2_route_city_del" onClick="js_route_city_del(this)"></span>'+
								'<span class="arrow_next"></span>'+
								'</span>';
	document.getElementsByClassName("tab2_to_fild")[0].value = "";
	document.getElementsByClassName("tab2_route")[1].style.height = document.getElementsByClassName("tab2_route")[0].offsetHeight - 11 + "px"; 
	
	jQuery('.order_tab2_main').jScrollPane();
}

function js_tab2_people_open(){
	document.getElementsByClassName("tab2_people")[0].style.display = "block";	
	document.getElementsByClassName("tab2_people")[1].style.opacity = 0;
	tab2_people_open = 0.2;
}

function js_article_panel_close(){
	article_panel_close = 1;
	
/*	document.getElementsByClassName("voyage_article")[0].style.left = -400 + "px";	
	document.getElementById("container_voyage").style.marginLeft = 0 + "px";	
	document.getElementById("container_voyage").style.width = document.body.clientWidth - 273 + "px";
	
	
	$(window).ready(function(){			
		$('#container_voyage').masonry({ // �������� �������-��������� � ������� ����������� ����� ��� ������������ �������
		itemSelector: '.item', // ��������� ����� �������� ����������� ������ � ����� �����
		singleMode: true, // true - ���� � ��� ��� ����� ���������� ������
		resizeable: true, // ������������� ����� ��� ��������� �������� ����
		isAnimated: !Modernizr.csstransitions // ��������� ������������ ������ ��� ������ css transitions � Modernizr
		}); 
	});   */
}

function js_article_panel_open(q){
	article_panel_open = 1;
	panel_type = q;
}

function js_add_result_another(n){
	
	number_block = n;	
	another_block_height = document.getElementsByClassName("search_result_another")[number_block-1].offsetHeight;
	 /*   document.getElementsByClassName("another_cont")[number_block].style.height  */
}

$(function(){
    $('#r1').change(function(){       
		document.getElementById("another_select1").style.display = "block";
		document.getElementById("another_select2").style.display = "none";
    });
});

$(function(){
    $('#r2').change(function(){       
		document.getElementById("another_select2").style.display = "block";
		document.getElementById("another_select1").style.display = "none";
    });
});

function js_slider_nav(number){
	for(i= 0; i < 4; i++){
		document.getElementsByClassName("slider_nav_li")[i].style.backgroundPosition = "0px -598px";
	}
	document.getElementsByClassName("slider_nav_li")[number].style.backgroundPosition = "0px -623px";
	slider_on = 1;
	delay_slide = 0;
	manual_slide = number;
}