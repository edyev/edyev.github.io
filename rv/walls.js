function Wall(){
  THREE.Object3D.call(this);
  this.wall = new THREE.Mesh(new THREE.BoxGeometry(10,5,0.2),
                       new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('./walls.jpg')}));
  this.add(this.wall);
}


Wall.prototype = new THREE.Object3D();
function setup(){
THREE.ImageUtils.crossOrigin = '';
wall1 = new Wall();
wall2 = new Wall();
wall3 = new Wall();
wall4 = new Wall();

wall1.position.z = -5;
wall2.rotation.y = 3.1416 / 2;
wall2.position.x = 5;
wall3.rotation.y = 3.1416 / 2;
wall3.position.x = -5;
wall4.position.z = 5;


var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 7;
escena = new THREE.Scene();
escena.add(wall1);
escena.add(wall2);
escena.add(wall3);
escena.add(wall4);

escena.add(iluminacion);

camara = new THREE.PerspectiveCamera();
camara.position.z = 0;
camara.position.y = 20;
camara.rotation.x = -3.1416 / 2 + 0.07;
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*0.95, window.innerHeight*0.95);
document.body.appendChild( renderer.domElement);

renderer.shadowMapEnabled = true;
wall1.castShadow = true;
iluminacion.castShadow = true;

}

function loop(){
requestAnimationFrame(loop);



renderer.render(escena, camara);
}

var camara, escena, renderer,wall1,wall2,wall3,wall4;
setup();
loop();
