function setup(){
 escena = new THREE.Scene();
 aspect = window.innerWidth/window.innerHeight;
 
 camara = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );
	          //Inicializacion                               
	  camara.position.z = 20;
	  camara.position.y = 0;
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  document.body.appendChild(renderer.domElement);
	        // Escena
	  var material = new THREE.MeshNormalMaterial({color:0x0ca0ca});
	  var forma = new THREE.BoxGeometry(10,10,10,10);
	  malla = new THREE.Mesh(forma, material);
	  escena.add(malla);
	  }
	  //Manejo de eventos
	  
	  
	  function dealWithKey(e){
	       if (e.keyCode == "80") {
	      
            	camOption = - camOption;
        }
        	if(camOption < 0){
        		 camara = new THREE.PerspectiveCamera(75,
	                                       aspect,
	                                       0.1,
	                                       1000); 
 //camara = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );
	          //Inicializacion                               

        	}
        	else{
        		 camara = new THREE.OrthographicCamera(500*aspect /- 2,500*aspect / 2, -500/2, 500/2, 0.1, 1000 );
        	
        	}
        	//
			//	camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 );
        	

      
	   }
	  
	 
	  window.addEventListener('keydown', dealWithKey, false);
	  function loop(){
	    requestAnimationFrame (loop);
	
	    renderer.render(escena, camara);
	  }
var malla, escena, renderer,aspect,camara;
var camOption = 1;
setup(); 
loop();
