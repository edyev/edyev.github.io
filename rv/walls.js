function Wall(){
  THREE.Object3D.call(this);
  this.wall = new THREE.Mesh(new THREE.BoxGeometry(20,5,0.5),
                       new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('./walls.jpg')}));
  this.add(this.wall);
}


Wall.prototype = new THREE.Object3D();
function setup(){
THREE.ImageUtils.crossOrigin = '';
robot = new THREE.Mesh(new THREE.BoxGeometry(2,2,2), new THREE.MeshBasicMaterial());


wall1 = new Wall();
wall2 = new Wall();
wall3 = new Wall();
wall4 = new Wall();


wall1.position.z = -10;
wall2.rotation.y = 3.1416 / 2;
wall2.position.x = 10;
wall3.rotation.y = 3.1416 / 2;
wall3.position.x = -10;
wall4.position.z = 10;

collideMatrix.push(wall1);
collideMatrix.push(wall2);
collideMatrix.push(wall3);
collideMatrix.push(wall4);









var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 7;
escena = new THREE.Scene();
escena.add(wall1);
escena.add(wall2);
escena.add(wall3);
escena.add(wall4);
escena.add(robot);




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

/*var originPoint = MovingCube.position.clone();

	clearText();
	
	for (var vertexIndex = 0; vertexIndex < MovingCube.geometry.vertices.length; vertexIndex++)
	{		
		var localVertex = MovingCube.geometry.vertices[vertexIndex].clone();
		var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
		var directionVector = globalVertex.sub( MovingCube.position );
		
		var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
		var collisionResults = ray.intersectObjects( collidableMeshList );
		if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) 
			appendText(" Hit ");
	}	*/


function loop(){
	var originPoint = robot.position.clone();
requestAnimationFrame(loop);
for (var i = 0; i < robot.geometry.vertices.length; i++ ){
  var robotVertex = robot.geometry.vertices[i].clone();
  var wallVertex = robotVertex.applyMatrix4( robot.matrix );
  var collisionVector = wallVertex.sub( robot.position);
  var ray = new THREE.Raycaster( originPoint, collisionVector.clone().normalize() );
  var collisions = ray.intersectObjects( collideMatrix );
  
  var line = new THREE.Line( robotVertex );
  console.log(collisionVertor);
  if ( collisions.length > 0  && collisions[0].distance < collisionVector.length() ){
    stepz = -stepz;
  }
  
  }
  
  


//robot.position.x += stepx;
//robot.position.z += stepz;


renderer.render(escena, camara);
}

var camara, escena, renderer,wall1,wall2,wall3,wall4,raycaster,robot,stepx,stepz,cyl;
var collideMatrix = [];
setup();
loop();
