function Wall(size,x,y){
  var texture = new THREE.TextureLoader().load( "./wallsmaze.jpg" );
  texture.anisotropy = 16;
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size),new THREE.MeshPhongMaterial({color:0xFFFFFF}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
  this.receiveShadow = true;
  this.castShadow = true;
}

Wall.prototype=new THREE.Mesh();

Environment.prototype.setMap=function(map){
  var _offset=Math.floor(map.length/2);
  for(var i=0;i<map.length;i++)
  for(var j=0;j<map.length;j++){
    if(map[i][j] === "x")
      this.add(new Wall(1,j-_offset,-(i-_offset)));
        else if(map[i][j] === "r")
    this.add(new Robot(0.5,j-_offset,-(i-_offset)));
  }
}

function setup(){
  var floorTexture = new THREE.TextureLoader().load( "./floor.jpg" );
  floorTexture.anisotropy = 16;
  var rowSet = Math.floor(Math.random()*25);
  var colSet = Math.floor(Math.random()*25);
  floor = new THREE.Mesh(new THREE.BoxGeometry(24.5,25,0.5),new THREE.MeshPhongMaterial({map:floorTexture}));
  floor.position.z = -1;
  reflector = new THREE.SpotLight(0xFFFFFF);
  
  iluminacionR = new THREE.PointLight(0xFF0000,0.5);
  iluminacionR.position.set(0,2.5,15);
  iluminacionG = new THREE.PointLight(0x00FF00,0.5);
  iluminacionG.position.set(-2.5,-2.5,15);
  iluminacionB = new THREE.PointLight(0x0000FF,0.5);
  iluminacionB.position.set(2.5,-2.5,15);
  
  var mapa = new Array();
  mapa[0]  = "x  xxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]  = "x         x xxx x       x";
  mapa[2]  = "xxxxxxxxx x     xxxxxxx x";
  mapa[3]  = "x   x   x xxxxx x       x";
  mapa[4]  = "x x   x x    x  x xxxxxxx";
  mapa[5]  = "x xxxxxxxxxx x xx       x";
  mapa[6]  = "x          x x    xxxxxxx";
  mapa[7]  = "xxxxxxxx x   x x xxxx x x";
  mapa[8]  = "x      r x x   x      x x";
  mapa[9]  = "xxx xxxx x xxxxx xxxx x x";
  mapa[10] = "x x x x  x          xxx x";
  mapa[11] = "x x x x xxxxxx xxxx x   x";
  mapa[12] = "x x   x        x    x xxx";
  mapa[13] = "x x xxxxxxxx xxx xxxx x x";
  mapa[14] = "x x x      x x   x    x x";
  mapa[15] = "x   x xxxx x x xxx xxxx x";
  mapa[16] = "xxxxx    x   x          x";
  mapa[17] = "x x   xx xxxxxx xxxxxxxxx";
  mapa[18] = "x xxx x       x x       x";
  mapa[19] = "x x   x xxxxx x x xxxxx x";
  mapa[20] = "x x xxx    x  x   x   x x";
  mapa[21] = "x x     xxxx      x x x x";
  mapa[22] = "x xxxx       x xx xxx x x";
  mapa[23] = "x       xxxxxx x        x";
  mapa[24] = "xxxxxxxxxxxxxxxxxxxxxxxxx";
  console.log(rowSet);
  console.log(colSet);
  
  while(mapa[rowSet][colSet]=="x"){
    rowSet = Math.floor(Math.random()*25);
    colSet = Math.floor(Math.random()*25);
    console.log(rowSet);
  console.log(colSet);
    
  }
  
  mapa[rowSet][colSet] = "r";
  console.log(mapa[rowSet][colSet]);
  environment = new Environment();
  
  environment.setMap(mapa);
  environment.add(floor, iluminacionR,iluminacionG,iluminacionB,reflector);
 
  camara=new THREE.PerspectiveCamera();
  camara.position.z=30;
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
   floor.receiveShadow = true;
   renderer.shadowMap.enabled=true;
 reflector.castShadow = true;
 iluminacionR.castShadow=true;
  iluminacionG.castShadow=true;
   iluminacionB.castShadow=true;
}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();
  environment.act();
 
  renderer.render(environment,camara);
}

var environment, camera, renderer,floor, iluminacionR,iluminacionG,iluminacionB,reflector;

setup();
loop();
