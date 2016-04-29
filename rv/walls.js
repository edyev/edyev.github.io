function Wall(){
  THREE.Object3D.call(this);
  this.wall = new THREE.Mesh(new THREE.BoxGeometry(20,5,0.5),
                       new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('./walls.jpg')}));
  this.add(this.wall);
}


Wall.prototype = new THREE.Object3D();
function setup(){
THREE.ImageUtils.crossOrigin = '';
robot = new THREE.Mesh(new THREE.SphereGeometry(.8,30,30), new THREE.MeshBasicMaterial());
cyl = new THREE.Mesh(new THREE.CylinderGeometry(3,1,1), new THREE.MeshBasicMaterial());

wall1 = new Wall();
wall2 = new Wall();
wall3 = new Wall();
wall4 = new Wall();

cyl.position.y = 7;
wall1.position.z = -10;
wall2.rotation.y = 3.1416 / 2;
wall2.position.x = 10;
wall3.rotation.y = 3.1416 / 2;
wall3.position.x = -10;
wall4.position.z = 10;


var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 7;
escena = new THREE.Scene();
escena.add(wall1);
escena.add(wall2);
escena.add(wall3);
escena.add(wall4);
escena.add(robot, cyl);




escena.add(iluminacion);

camara = new THREE.PerspectiveCamera();
camara.position.z = 0;
camara.position.y = 30;
camara.rotation.x = -3.1416 / 2 + 0.02;
raycaster = new THREE.Raycaster();
raycaster.setFromCamera(new THREE.Vector2(robot.position.x,robot.position.z),camara);
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*0.95, window.innerHeight*0.95);

document.body.appendChild( renderer.domElement);

renderer.shadowMapEnabled = true;
wall1.castShadow = true;
robot.castShadow = true;
iluminacion.castShadow = true;
stepx = 0.1;
stepz = stepx;
}

function loop(){
requestAnimationFrame(loop);
var intersects=raycaster.intersectObjects(escena.children);
if (intersects.length > 0) stepz = -stepz;
robot.position.x += stepx;
robot.position.z += stepz;


renderer.render(escena, camara);
}

var camara, escena, renderer,wall1,wall2,wall3,wall4,raycaster,robot,stepx,stepz,cyl;
setup();
loop();
