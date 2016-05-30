function Wall(size,x,y){
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size),new THREE.MeshPhongMaterial({color:0xfffff}));
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
  
  floor = new THREE.Mesh(new THREE.BoxGeometry(24.5,25,0.5),new THREE.MeshPhongMaterial({color:0xf2f2f2}));
  floor.position.z = -1;
  iluminacion = new THREE.PointLight(0x009999);
  iluminacion.position.z = 15;
  var mapa = new Array();
  mapa[0]  = "xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]  = "x                       x";
  mapa[2]  = "x                       x";
  mapa[3]  = "x     xxxxxx            x";
  mapa[4]  = "x     x                 x";
  mapa[5]  = "x     x                 x";
  mapa[6]  = "x                       x";
  mapa[7]  = "x                       x";
  mapa[8]  = "xxx      x              x";
  mapa[9]  = "x        x  xxxxx       x";
  mapa[10] = "x        x      x       x";
  mapa[11] = "x        xxxxx  x       x";
  mapa[12] = "x                       x";
  mapa[13] = "x   xx xxxxx            x";
  mapa[14] = "x   x      x            x";
  mapa[15] = "x   x    x x            x";
  mapa[16] = "xxxxx    x              x";
  mapa[17] = "x        xxxx x         x";
  mapa[18] = "x   r         x         x";
  mapa[19] = "x             x         x";
  mapa[20] = "x             x         x";
  mapa[21] = "x                       x";
  mapa[22] = "x                       x";
  mapa[23] = "x                       x";
  mapa[24] = "xxxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment = new Environment();
  
  environment.setMap(mapa);
  environment.add(floor, iluminacion);
 
  camara=new THREE.PerspectiveCamera();
  camara.position.z=30;
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
   floor.receiveShadow = true;
   renderer.shadowMap.enabled=true;
 
 iluminacion.castShadow=true;
}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment,camara);
}

var environment, camera, renderer,floor, iluminacion;

setup();
loop();