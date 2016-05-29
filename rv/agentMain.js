function Wall(size,x,y){
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
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
  var mapa = new Array();
  mapa[0]  = "xxxxxxxxxxxxxxxxxxxx";
  mapa[1]  = "xr                 x";
  mapa[2]  = "x                  x";
  mapa[3]  = "x                  x";
  mapa[4]  = "x                  x";
  mapa[5]  = "x                  x";
  mapa[6]  = "x                  x";
  mapa[7]  = "x                  x";
  mapa[8]  = "xxx   xxxxxxxxxxxxxx";
  mapa[9]  = "x                  x";
  mapa[10] = "x     r            x";
  mapa[11] = "x                  x";
  mapa[12] = "x                  x";
  mapa[13] = "x                  x";
  mapa[14] = "x                  x";
  mapa[15] = "x                  x";
  mapa[16] = "xxxxxxxxxxxx    xxxx";
  mapa[17] = "x                  x";
  mapa[18] = "x   r              x";
  mapa[19] = "xr                 x";
  mapa[20] = "xxxxxxxxxxxxxxxxxxxx";
  
  environment = new Environment();
  
  environment.setMap(mapa);
  
  camara=new THREE.PerspectiveCamera();
  camara.position.z=30;
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment,camara);
}

var environment, camera, renderer;

setup();
loop();
