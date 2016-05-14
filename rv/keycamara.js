function setup(){
 escena = new THREE.Scene();
 aspect = window.innerWidth/window.innerHeight;
 camara = new THREE.PerspectiveCamera(75,
	                                       aspect,
	                                       0.1,
	                                       1000); 
 //camara = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );
	          //Inicializacion                               
	  camara.position.z = 5;
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  document.body.appendChild(renderer.domElement);
	        // Escena
	  var material = new THREE.MeshNormalMaterial();
	  var forma = new THREE.SphereGeometry(1);
	  malla = new THREE.Mesh(forma, material);
	  escena.add(malla);
	  }
	  //Manejo de eventos
	  
	  
	  function dealWithKey(e){
	       if (e.keyCode == "80") {
	       	malla.rotation.y += 20;
            	camOption = - camOption;
        }
        	if(camOption < 0){
        		 camara = new THREE.PerspectiveCamera(75,
	                                       aspect,
	                                       0.1,
	                                       1000); 
 //camara = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );
	          //Inicializacion                               
	  camara.position.z = 5;
        	}
        	else{
        		 camara = new THREE.OrthographicCamera(75,
	                                       aspect,
	                                       0.1,
	                                       1000); 	
        	}
      
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
