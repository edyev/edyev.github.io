function setup(){
 escena = new THREE.Scene();
 aspect = window.innerWidth/window.innerHeight;
 
 camara = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );
	          //Inicializacion                               
	  camara.position.z = 20;
	  camara.position.y = 5;
	  camara.rotation.x = 3.1416/24; 
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  document.body.appendChild(renderer.domElement);
	        // Escena
	  var material = new THREE.MeshBasicMaterial();
	  var forma = new THREE.DodecahedronGeometry(10,0);
	 // var forma = new THREE.BoxGeometry(10,10,10,10);
	 malla = new THREE.Mesh(forma, new THREE.LambertMaterial({color:0xca00c}));
	 
	  escena.add(malla);
	  }
	  //Manejo de eventos
	  
	  
	  function dealWithKey(e){
	       if (e.keyCode == "80") {
	      
            	camOption = - camOption;
        }
        	if(camOption < 0){
        			camara.toPerspective();
 //camara = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );
	          //Inicializacion                               

        	}
        	else{
        		camara.toOrthographic();
        	
        	}
        	//
			//	camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 );
        	

      
	   }
	  
	 
	  window.addEventListener('keydown', dealWithKey, false);
	  function loop(){
	    requestAnimationFrame (loop);
	    malla.rotation.x += 0.01;
	    malla.rotation.y += 0.01;
	    
	    renderer.render(escena, camara);
	  }
var malla, escena, renderer,aspect,camara;
var camOption = 1;
setup(); 
loop();
