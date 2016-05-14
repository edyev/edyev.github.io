function setup(){
 escena = new THREE.Scene();
 aspect = window.innerWidth/window.innerHeight;
 camara = new THREE.PerspectiveCamera(75,
	                                       aspect,
	                                       0.1,
	                                       1000);
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
            malla.rotation.x += 10;
        }
	   }
	  
	 
	  window.addEventListener('keydown', dealWithKey, false);
	  function loop(){
	    requestAnimationFrame (loop);
	    malla.rotation.x += 0.01;
	    malla.rotation.y += 0.01;
	    renderer.render(escena, camara);
	  }
var malla, escena, renderer,aspect;
setup(); 
loop();
