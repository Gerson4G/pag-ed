

	function values(operacion){

		 n = Math.floor((Math.random() * 9) + 1);  ///VARIABLE GLOBAL PORQ NO ESTA DECLARADA PREVIAMENTE
		 	 
		 switch(operacion){
		 	case 'suma':
		 	n2 = Math.floor((Math.random() * 9) + 1); ///VARIABLE GLOBAL PORQ NO ESTA DECLARADA PREVIAMENTE
		 	r=n+n2;
		   suma(); ///VARIABLE GLOBAL PORQ NO ESTA DECLARADA PREVIAMENTE
		 	break;
		 	case 'resta':
		 		do{
			 		n2 = Math.floor((Math.random() * 9) + 1); ///VARIABLE GLOBAL PORQ NO ESTA DECLARADA PREVIAMENTE
			 	}while(n2>n)
		 	r=n-n2;
		 	resta();
		 	break;
		 	case 'mix':
		 		n2 = Math.floor((Math.random() * 9) + 1);
		 		do{
		 		n3 = Math.floor((Math.random() * 9) + 1); ///VARIABLE GLOBAL PORQ NO ESTA DECLARADA PREVIAMENTE
		 		}while(n3>(n2+n))
		 		r=n+n2-n3;
		 		mixto();
		 	break;

		 }

		
	}

	function mixto () {
		var opc;
		var posr=Math.floor((Math.random() * 3) + 1); 		
		

		document.getElementById("nM").src = "images/"+n+".png"; 
		document.getElementById("n2M").src = "images/"+n2+".png";
		document.getElementById("n3M").src = "images/"+n3+".png";

		reproducirN(n);
		setTimeout(function(){
	    reproducirO("suma");
	    setTimeout(function(){
	    reproducirN(n2);
	    setTimeout(function(){
	    reproducirO("menos");
	    setTimeout(function(){
	    reproducirN(n3);
	    }, pausa);
	    }, pausa);
		}, pausa);
		}, pausa);



		if(r<10){
			for (var i=1; i<4; i++) {
				opc = Math.floor((Math.random() * 9) + 1);
				document.getElementById("op"+i+"M").src = "images/"+opc+".png"; 
				setNumber(i,opc,"mix");
			}
		document.getElementById("op"+posr+"M").src = "images/"+r+".png"; 
		setNumber(posr,r,"mix");
		}
		else if(r>=10){

			var digit;var digit2;

			for (var i=1; i<4; i++) {
				opc = Math.floor((Math.random() * 18) + 10);
			 	digit = (''+opc)[0];
			 	digit2 = (''+opc)[1];
			document.getElementById("op"+i+"M").src = "images/"+digit+".png"; 
			document.getElementById("op"+i+"M"+i).style.display = "inline-block";
			document.getElementById("op"+i+"M"+i).src = "images/"+digit2+".png"; 
			setNumber(i,digit,"mix");
			setNumber2(i,digit2,"mix");
			}
		digit = (''+r)[0];
		digit2 = (''+r)[1];
		document.getElementById("op"+posr+"M").src = "images/"+digit+".png"; 
		document.getElementById("op"+posr+"M"+posr).src = "images/"+digit2+".png"; 
		setNumber(posr,digit,"mix");
		setNumber2(posr,digit2,"mix");
		}
	}

	function resta(){
		var opc;
		var posr=Math.floor((Math.random() * 3) + 1); 		
		
		document.getElementById("nR").src = "images/"+n+".png"; 
		document.getElementById("n2R").src = "images/"+n2+".png";

		reproducirN(n);
		setTimeout(function(){
	    reproducirO("menos");
	    setTimeout(function(){
	    reproducirN(n2);
		}, pausa);
		}, pausa);
		
			for (var i=1; i<4; i++) {
				opc = Math.floor((Math.random() * 9) + 1);
				document.getElementById("op"+i+"R").src = "images/"+opc+".png"; 
				setNumber(i,opc,"resta");
			}
		document.getElementById("op"+posr+"R").src = "images/"+r+".png"; 
		setNumber(posr,r,"resta");
		
		}


	function suma(){

		var opc;
		var posr=Math.floor((Math.random() * 3) + 1); 		
		
		document.getElementById("n").src = "images/"+n+".png"; 
		document.getElementById("n2").src = "images/"+n2+".png";


		reproducirN(n);
		setTimeout(function(){
	    reproducirO("suma");
	    setTimeout(function(){
	    reproducirN(n2);
		}, pausa);
		}, pausa);
		
		if(r<10){
			for (var i=1; i<4; i++) {
				opc = Math.floor((Math.random() * 9) + 1);
				document.getElementById("op"+i).src = "images/"+opc+".png"; 
				setNumber(i,opc,"suma");
			}
		document.getElementById("op"+posr).src = "images/"+r+".png"; 
		setNumber(posr,r,"suma");
		}
		else if(r>=10){

			var digit;var digit2;

			for (var i=1; i<4; i++) {
				opc = Math.floor((Math.random() * 18) + 10);
			 	digit = (''+opc)[0];
			 	digit2 = (''+opc)[1];
			document.getElementById("op"+i).src = "images/"+digit+".png"; 
			document.getElementById("op"+i+"."+i).style.display = "inline-block";
			document.getElementById("op"+i+"."+i).src = "images/"+digit2+".png"; 
			setNumber(i,digit,"suma");
			setNumber2(i,digit2,"suma");
			}
		digit = (''+r)[0];
		digit2 = (''+r)[1];
		document.getElementById("op"+posr).src = "images/"+digit+".png"; 
		document.getElementById("op"+posr+"."+posr).src = "images/"+digit2+".png"; 
		setNumber(posr,digit,"suma");
		setNumber2(posr,digit2,"suma");
		}

	}


	function setNumber(position,value,operation){
		if(operation=='suma')
		document.getElementById("op"+position).alt=value;
		else if(operation=='resta')
		document.getElementById("op"+position+"R").alt=value;
		else if(operation=='mix')
		document.getElementById("op"+position+"M").alt=value;
	}
	function setNumber2(position,value,operation){
		if(operation=="suma")
		document.getElementById("op"+position+"."+position).alt=value;
		else if(operation=="mix")
		document.getElementById("op"+position+"M"+position).alt=value;
	}
	function getNumber(position,operation){
		if(operation=='suma')
		return document.getElementById("op"+position).alt;
		else if(operation=='resta')
		return document.getElementById("op"+position+"R").alt;		
		else if(operation=='mix')
		return document.getElementById("op"+position+"M").alt;		
	}
	function getNumber2(position,operation){
		if(operation=="suma")
		return document.getElementById("op"+position+"."+position).alt;
		else if(operation=="mix")
		return document.getElementById("op"+position+"M"+position).alt;
	}


	function restart(){
		for(var i=1;i<4;i++){
			document.getElementById("op"+i+"."+i).style.display="none";
			document.getElementById("op"+i+"M"+i).style.display="none";
		}
	}


	function reproducirN(valor){
		switch(valor){
			case 1:
			uno.play();
			break;
			case 2:
			dos.play();
			break;
			case 3:
			tres.play();
			break;
			case 4:
			cuatro.play();
			break;
			case 5:
			cinco.play();
			break;
			case 6:
			seis.play();
			break;
			case 7:
			siete.play();
			break;
			case 8:
			ocho.play();
			break;
			case 9:
			nueve.play();
			break;

		}
	}

	function reproducirO(operacion){
		switch(operacion){
			case "suma":
			mas.play();
			break;
			case "menos":
			menos.play();
			break;
		}
	}

	pausa=800;

	acierto = document.createElement('audio');
	acierto.setAttribute('src', 'sonidos/correcto.mp3');    
	error = document.createElement('audio');
    error.setAttribute('src', 'sonidos/incorrecto.mp3');
    uno = document.createElement('audio');
    uno.setAttribute('src', 'sonidos/1.mp3');
    dos = document.createElement('audio');
    dos.setAttribute('src', 'sonidos/2.mp3');
    tres = document.createElement('audio');
    tres.setAttribute('src', 'sonidos/3.mp3');
    cuatro = document.createElement('audio');
    cuatro.setAttribute('src', 'sonidos/4.mp3');
    cinco = document.createElement('audio');
    cinco.setAttribute('src', 'sonidos/5.mp3');
    seis = document.createElement('audio');
    seis.setAttribute('src', 'sonidos/6.mp3');
    siete = document.createElement('audio');
    siete.setAttribute('src', 'sonidos/7.mp3');
    ocho = document.createElement('audio');
    ocho.setAttribute('src', 'sonidos/8.mp3');
    nueve = document.createElement('audio');
    nueve.setAttribute('src', 'sonidos/9.mp3');
    mas = document.createElement('audio');
    mas.setAttribute('src', 'sonidos/mas.mp3');
	menos = document.createElement('audio');
    menos.setAttribute('src', 'sonidos/menos.mp3');
    cero = document.createElement('audio');
    cero.setAttribute('src', 'sonidos/cero.mp3');        
        
          
	

	/**LO QUE TENGA QUE VER CON JQUERY**/
	$('#opc1').click(function(){ 
	if(r<10){
		if(r==getNumber(1,"suma"))
			acierto.play();
		else
			error.play();
	}
	if(r>=10){
		if(r==parseInt(getNumber(1,"suma")+""+getNumber2(1,"suma")))
			acierto.play();
		else
			error.play();
	}
	return false; });
	/*********/
	$('#opc2').click(function(){ 
	if(r<10){
		if(r==getNumber(2,"suma"))
		acierto.play();
		else
			error.play();
	}
	if(r>=10){
		if(r==parseInt(getNumber(2,"suma")+""+getNumber2(2,"suma")))
			acierto.play();
		else
			error.play();
	}
	return false; });
	/*************************/
	$('#opc3').click(function(){ 
	if(r<10){
		if(r==getNumber(3,"suma"))
			acierto.play();
		else
			error.play();
	}
	if(r>=10){
		if(r==parseInt(getNumber(3,"suma")+""+getNumber2(3,"suma")))
		acierto.play();
		else
			error.play();
	}
	return false; });


	///LOS DIV DE LA resta

	$('#opc1R').click(function(){ 
		if(r==getNumber(1,"resta"))
		acierto.play();
		else
			error.play();
	return false; });
	/*********/
	$('#opc2R').click(function(){ 
		if(r==getNumber(2,"resta"))
			acierto.play();
		else
			error.play();
	return false; });
	/*************************/
	$('#opc3R').click(function(){ 
		if(r==getNumber(3,"resta"))
			acierto.play();
		else
			error.play();
	return false; });


	///LOS DIV DEL mixto

	$('#opc1M').click(function(){ 
	if(r<10){
		if(r==getNumber(1,"mix"))
		acierto.play();
		else
			error.play();
	}
	if(r>=10){
		if(r==parseInt(getNumber(1,"mix")+""+getNumber2(1,"mix")))
			acierto.play();
		else
			error.play();
	}
	return false; });
	/*********/
	$('#opc2M').click(function(){ 
	if(r<10){
		if(r==getNumber(2,"mix"))
			acierto.play();
		else
			error.play();
	}
	if(r>=10){
		if(r==parseInt(getNumber(2,"mix")+""+getNumber2(2,"mix")))
			acierto.play();
		else
			error.play();
	}
	return false; });
	/*************************/
	$('#opc3M').click(function(){ 
	if(r<10){
		if(r==getNumber(3,"mix"))
		acierto.play();
		else
			error.play();
	}
	if(r>=10){
		if(r==parseInt(getNumber(3,"mix")+""+getNumber2(3,"mix")))
			acierto.play();
		else
			error.play();
	}
	return false; });
