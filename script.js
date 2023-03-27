	window.onload = function(){
		var numeros = document.querySelector('.numeros');
		var deg = 0;
		for(i = 1; i <= 12; i++){
			numeros.innerHTML += '<div class="num'+i+'">'+i+'</div>';
		}
		for(cont = 1; cont <= 12; cont++){
			num = document.querySelector('.num'+cont);
			num.style.width = '100%';
			num.style.height = '100%';
			num.style.position = 'absolute';
			deg += 30;
			num.style.transform = 'rotate('+deg+'deg)';
		}
		
		setInterval(function(){
		var data = new Date();
		var hora = data.getHours() / 12;
		var min = data.getMinutes() / 60;
		var sec = data.getSeconds() / 60;
		document.querySelector('.hr').style.transform = 'translateX(-50%) rotate('+hora*360+'deg)';
		document.querySelector('.mn').style.transform = 'translateX(-50%) rotate('+min*360+'deg)';
		document.querySelector('.sc').style.transform = 'translateX(-50%) rotate('+sec*360+'deg)';
		},1000)
	}	