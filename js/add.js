//三级联动
		_init_area();
		 
		var Gid = document.getElementById;
		var showArea = function() {
			Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" +
			Gid('s_city').value + " - 县/区" +
			Gid('s_county').value + "</h3>"
		}
		
		//跳转
		var back = document.querySelector('.back');
		back.onclick=function(){
			location.href='address.html'
		}
		
		var name = document.querySelector('.name>.right>input');
		var phone = document.querySelector('.phone>.right>input');
		var prov = document.querySelector('.prov>.right>select');
		var city = document.querySelector('.city>.right>select');
		var are = document.querySelector('.area>.right>select');
		var detailed = document.querySelector('.detailed>.right>input');

		var btn = document.querySelector('.btn>button');
		
		btn.onclick=function(){
			if(name.value=="" || phone.value=="" || prov.value==""|| city.value==""|| are.value==""|| detailed.value==""){
				
			}else{
//				var ss = sessionStorage;
//				ss.setItem("name",name.value);
//				ss.setItem("phone",phone.value);
//				ss.setItem("prov",prov.value);
//				ss.setItem("city",city.value);
//				ss.setItem("are",are.value);
//				ss.setItem("detailed",detailed.value);
//				location.href='address.html';
				alert('保存成功')
			}
		}