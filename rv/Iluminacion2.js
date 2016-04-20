function setup(){
THREE.ImageUtils.crossOrigin = '';
var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
malla = new THREE.Mesh(new THREE.SphereGeometry(1),
                       new THREE.MeshPhongMaterial({map:textura}));
malla.position.x += 2;
malla.position.y += 0.25;
var base = new THREE.Mesh(new THREE.BoxGeometry(5,0.1,5),
                          new THREE.MeshLambertMaterial({color:0x00ff00});
var iluminacion = new THREE.AmbientLight(0xffffff);
escena = new Three.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);
camara = new THREE.PerspectiveCamera();
camara.position.z = 15;
camara.position.y = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderer.domElement);

renderer.shadowMapEnabled = true;
malla.castShadow = true;
base.receiveShadow = true; 
iluminacion.castShadow = true;

}

function loop(){
requestAnimationFrame(loop);
malla.rotation.y  += 0.01;
renderer.render(escena, camara);
}

var camara, escena, renderer, malla;
setup();
loop();
