function setup(){
  
  var headForm = new THREE.TorusKnotGeometry(1);
  var esferaForma = new THREE.SphereGeometry(1);
  var cilindroForma = new THREE.CylinderGeometry(0.5, 0.5, 4);

  
 
  var head  = new THREE.Mesh(headForm);
  var esfera2 = new THREE.Mesh(esferaForma);
  var cilindro = new THREE.Mesh(cilindroForma);


  esfera2.position.y = -2;
  head.position.y = 10;
  var forma = new THREE.Geometry();

  THREE.GeometryUtils.merge(forma, head);
  THREE.GeometryUtils.merge(forma, esfera2);
  THREE.GeometryUtils.merge(forma, cilindro);

  malla = new THREE.Mesh(forma);
  escena = new THREE.Scene();
  escena.add( malla );
  
  

  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
  document.body.appendChild(renderer.domElement);

}

function loop(){
  requestAnimationFrame( loop );
  renderer.render(escena, camara);
  malla.rotation.x += 0.01;
  malla.rotation.y += 0.01;
  
}

var escena, camara, renderer, malla;
setup();
loop();
