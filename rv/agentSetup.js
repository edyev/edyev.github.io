function RobotMesh(){
  var points = [];
  points.push(new THREE.Vector2(0,2));
  points.push(new THREE.Vector2(0.7,-0.5));
  points.push(new THREE.Vector2(2,-1.5));
  points.push(new THREE.Vector2(0,-1.5));
  
  var headForm = new THREE.TorusKnotGeometry(0.5, 0.1, 100, 10 );
  var esferaForma = new THREE.SphereGeometry(1);
  var legForm = new THREE.CylinderGeometry(0.1,0.1,2);
  var bodyForm = new THREE.LatheGeometry(points, 20, 0, 2*Math.PI);//LatheGeometry(points, segments, phiStart, phiLength)
  var footForm = new THREE.TorusGeometry(0.3,0.05,16,100);
  var material = new THREE.MeshNormalMaterial();
  var head  = new THREE.Mesh(headForm,material);
  var esfera2 = new THREE.Mesh(esferaForma);
  var body = new THREE.Mesh(bodyForm, material);
  var leg1 = new THREE.Mesh(legForm, material);
  var leg2 = new THREE.Mesh(legForm,material);
  var foot1 = new THREE.Mesh(footForm,material);
  var foot2 = new THREE.Mesh(footForm,material);
  
  foot1.position.x = 0.15 + 0.05 + Math.sin(.2),
  foot1.position.y = -3.55,
  foot1.rotation.x = 3.1416/2;
  foot2.rotation.x = 3.1416/2;
  foot2.position.x = -0.15 -0.05 - Math.sin(.2),
  foot2.position.y = -3.55,
  leg1.position.x = .25,
  leg1.position.y = -2.5,
  leg1.rotation.z = Math.asin(0.2);
  leg2.rotation.z = -Math.asin(0.2);
  
  leg2.position.x = -.25,
  leg2.position.y = -2.5,
  head.position.y = 3;
  

  var forma = new THREE.Geometry();
  THREE.GeometryUtils.merge(forma,foot1);
  THREE.GeometryUtils.merge(forma, foot2);
  THREE.GeometryUtils.merge(forma, head);
  THREE.GeometryUtils.merge(forma, leg1);
  THREE.GeometryUtils.merge(forma, leg2);
  THREE.GeometryUtils.merge(forma, body);

  this.malla = new THREE.Mesh(forma,material);
  this.add(this.malla);
  
}

RobotMesh.prototype = new THREE.Mesh();

function Sensor(position, direction) {
  THREE.Raycaster.call(this,position, direction);
  this.colision = false;
}

Sensor.prototype = new THREE.Raycaster();

function Robot (size, x,y){
  Agent.call(this,x,y);
  this.sensor = new Sensor();
  var points = [];
  points.push(new THREE.Vector2(0,.5));
  points.push(new THREE.Vector2(0.15,-0.12));
  points.push(new THREE.Vector2(0.5,-0.37));
  points.push(new THREE.Vector2(0,-0.37));
  var malla = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.2,2,100),new THREE.MeshNormalMaterial());
  
  this.actuator = malla;
  this.actuator.rotation.x = Math.PI / 2;
  this.actuator.commands=[];
  this.add(this.actuator);
}

Robot.prototype = new Agent();

Robot.prototype.sense = function(environment){
  this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo= this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=.1)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
}
Robot.prototype.plan=function (environment){
  this.actuator.commands=[];
  if (this.sensor.colision==true)
    this.actuator.commands.push('rotateCCW');
  else
    this.actuator.commands.push('goStraight');
}
Robot.prototype.act=function(environment){
  var command=this.actuator.commands.pop();
  if( command==undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
}
  
  //las operaciones posibles con este robot son
  //goStraight()
  //rotateCW()
  //rotateCCW()
  
  Robot.prototype.operations={};
  
  Robot.prototype.operations.goStraight= function(robot, distance){
  if(distance== undefined)
    distance= .05;
  robot.position .x+= distance*Math.cos(robot.rotation.z);
  robot.position .y+= distance*Math.sin(robot.rotation.z);
  
}

Robot.prototype.operations.rotateCW= function (robot,angle){
  if(angle==undefined)
   angle = -Math.PI/2;
  robot.rotation.z+=angle;
}

Robot.prototype.operations.rotateCCW=function(robot,angle){
  if(angle== undefined)
    angle = Math.PI/2;
  robot.rotation.z+=angle;
}
