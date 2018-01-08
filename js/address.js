var back = document.querySelector('.back');
	var main2=  document.querySelector('.main2');
	
	back.onclick=function(){
		location.href='index.html';
	}
	var btn = document.querySelector('.main_bottom>button');
	btn.onclick=function(){
		location.href='add.html'
	}
	
	//增加一条收货地址
	function add(){
			var list = document.createElement('div');
			var main2_img =document.createElement('div');
			var main2_top =document.createElement('div');
			var main2_center =document.createElement('div');
			var main2_buttom =document.createElement('div');
			var shxx = document.createElement('div');
			var tel = document.createElement('div');
			var adres =document.createElement('div');
			var name  =document.createElement('div');
			var oUl  =document.createElement('ul');
			var li1 = document.createElement('li');
			var adres = document.createElement('div');
			var num = document.createElement('div');
			var oDiv = document.createElement('div');
			var oD1 = document.createElement('div');
			var oD2 = document.createElement('div');
			var oD3 = document.createElement('div');
			var oD4 = document.createElement('div');
			
			main2.appendChild(list);
			list.className='list';
			list.appendChild(main2_img);
			list.appendChild(main2_top);
			list.appendChild(main2_center);
			list.appendChild(main2_buttom);
			main2_top.appendChild(shxx);
			main2_top.appendChild(name);
			main2_top.appendChild(oUl);
			oUl.appendChild(li1);
			main2_center.appendChild(tel);
			main2_center.appendChild(num);
			main2_buttom.appendChild(adres);
			main2_buttom.appendChild(oDiv);
			oDiv.appendChild(oD1);
			oDiv.appendChild(oD2);
			oDiv.appendChild(oD3);
			oDiv.appendChild(oD4);
			
			main2_img.className='main2_img';
			main2_top.className='main2_top';
			main2_center.className='main2_center';
			main2_buttom.className='main2_buttom';
			adres.className='adres';
			name.className='name';
			shxx.className='shxx';
			tel.className='tel';
			adres.className='adres';
			num.className='num';
			oD4.style.overflow='hidden';			
		}
	
		var main2_buttom = document.querySelector('.main2_buttom');
		
		main2_buttom.onclick=function(){
				location.href='index.html'
		} 