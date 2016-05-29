function Wall(){
  THREE.Object3D.call(this);
  this.wall = new THREE.Mesh(new THREE.BoxGeometry(20,10,0.5),
                       new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('./floor.jpg')}));
  this.add(this.wall);
}


Wall.prototype = new THREE.Object3D();
function setup(){
THREE.ImageUtils.crossOrigin = '';
robot = new THREE.Mesh(new THREE.DodecahedronGeometry(1), new THREE.MeshPhongMaterial({color:0xccaa00}));
cyl = new THREE.Mesh(new THREE.CylinderGeometry(1,2,2,30), new THREE.MeshPhongMaterial({color:0xcc9900}));

wall1 = new Wall();
wall2 = new Wall();
wall3 = new Wall();
wall4 = new Wall();
floor = new THREE.Mesh(new THREE.BoxGeometry(20,20,0.25),
                       new THREE.MeshPhongMaterial({color:0x0033cc}));

cyl.position.y = 7;
cyl.position.z = -7;
floor.rotation.x = 3.1416 / 2;

wall1.position.z = -10;
wall2.rotation.y = 3.1416 / 2;
wall2.position.x = 10;
wall3.rotation.y = 3.1416 / 2;
wall3.position.x = -10;
wall4.position.z = 10;
robot.position.y = 1.5;
robot.position.z = -7;
var iluminacion = new THREE.PointLight(0xffd966);
iluminacion.position.y = 7;
iluminacion.position.z = -7;

escena = new THREE.Scene();
escena.add(floor);
escena.add(wall1);
escena.add(wall2);
escena.add(wall3);
escena.add(wall4);
escena.add(robot, cyl);
escena.add(iluminacion);

camara = new THREE.PerspectiveCamera();
camara.position.z = 40;
camara.position.y = 30;
camara.rotation.x = -3.1416 / 4 ;
raycaster = new THREE.Raycaster();
raycaster.setFromCamera(new THREE.Vector2(robot.position.x,robot.position.z),camara);
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*0.95, window.innerHeight*0.95);

document.body.appendChild( renderer.domElement);

renderer.shadowMapEnabled = true;
wall1.receiveShadow = true;
wall2.receiveShadow = true;
wall3.receiveShadow = true;
wall4.receiveShadow = true;
robot.castShadow = true;
floor.receiveShadow = true;
iluminacion.castShadow = true;

stepx = 0.1;
stepz = stepx;
}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena, camara);
robot.rotation.x += 0.1;
robot.rotation.y += 0.1;


}

var camara, escena, renderer,wall1,wall2,wall3,wall4,raycaster,robot,stepx,stepz,cyl;
setup();
loop();
