function setup(){
  THREE.ImageUtils.crossOrigin = '';
  var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
  var material = new THREE.MeshBasicMaterial({map: textura});
  var forma = new THREE.SphereGeometry(1.5,32,32);
  malla = new THREE.Mesh(forma, material);
  malla.rotation.z += 0.25;
  malla.rotation.x += 0.25;
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
  document.body.appendChild(renderer.domElement);
  

}

function loop(){
  requestAnimationFrame(loop);
 
  malla.rotation.y += 0.01;
  renderer.render(escena, camara);
  
}
  
var camara,escena,renderer, malla;
setup();
loop();
