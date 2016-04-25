function setup(){
var textura = THREE.ImageUtils.loadTexture('./walls.jpg');
malla = new THREE.Mesh(new THREE.BoxGeometry(10,5,0.2),
                       new THREE.MeshBasicMaterial({map:textura}));
malla.position.y += 2;
malla.position.z += 0.25;
var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 7;
escena = new THREE.Scene();
escena.add(malla);
escena.add(iluminacion);

camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 5;
camara.rotation.x = -0.1;
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*0.95, window.innerHeight*0.95);
document.body.appendChild( renderer.domElement);

renderer.shadowMapEnabled = true;
malla.castShadow = true;
iluminacion.castShadow = true;

}

function loop(){
requestAnimationFrame(loop);



renderer.render(escena, camara);
}

var camara, escena, renderer, malla;
setup();
loop();
