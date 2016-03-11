function setup(){
  var points = [];
  points.push(new THREE.Vector2(0,2));
  points.push(new THREE.Vector2(0.7,-0.75));
  points.push(new THREE.Vector2(2.3,-1.5));
  points.push(new THREE.Vector2(0,-1.5));
  
  //var headForm = new THREE.TorusKnotGeometry(0.5, 0.1, 100, 10 );
  var headForm = new THREE.Dodecahedron(0.5);
  var esferaForma = new THREE.SphereGeometry(1);
  var legForm = new THREE.CylinderGeometry(0.1,0.1,0.8);
  var bodyForm = new THREE.LatheGeometry(points);
  var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
 
  var head  = new THREE.Mesh(headForm,material);
  var esfera2 = new THREE.Mesh(esferaForma);
  var body = new THREE.Mesh(bodyForm, material);
  var leg1 = new THREE.Mesh(legForm);
  var leg2 = new THREE.Mesh(legForm);

  leg1.position.x = 1.8,
  leg1.position.y = -1.5,
  leg2.position.x = -1.8,
  leg2.position.y = -1.5,
  head.position.y = 3;

  var forma = new THREE.Geometry();

  THREE.GeometryUtils.merge(forma, head);
  THREE.GeometryUtils.merge(forma, leg1);
  THREE.GeometryUtils.merge(forma, leg2);
  THREE.GeometryUtils.merge(forma, body);

  malla = new THREE.Mesh(forma,material);
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
