function setup(){
  var points = [];
  puntos.push(new THREE.Vector2(0,2));
  puntos.push(new THREE.Vector2(0.3,-1));
  puntos.push(new THREE.Vector2(1.5,-2));
  
  
  var headForm = new THREE.TorusKnotGeometry(0.5, 0.1, 100, 10 );
  var esferaForma = new THREE.SphereGeometry(1);
  
  var bodyForm = new THREE.LatheGeometry(points);
  var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
 
  var head  = new THREE.Mesh(headForm,material);
  var esfera2 = new THREE.Mesh(esferaForma);
  var body = new THREE.Mesh(bodyForm, material);


  esfera2.position.y = -2;
  head.position.y = 3;

  var forma = new THREE.Geometry();

  THREE.GeometryUtils.merge(forma, head);
  THREE.GeometryUtils.merge(forma, esfera2);
  THREE.GeometryUtils.merge(forma, body);

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
