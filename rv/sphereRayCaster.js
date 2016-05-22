            
            function Esfera(color, x, y) {
                var _malla = new THREE.Mesh(new THREE.SphereGeometry(1, 30, 30), new THREE.MeshPhongMaterial({color: color}));;
                _malla.position.x = x;
                _malla.position.y = y;
                this.getmalla = function(){
                    return _malla;
                }
                this.setposition = function(x, y){
                    _malla.position.x += x;
                    _malla.position.y += y;
                }
                this.getposition = function(){
                    return _malla.position;
                }

		var bola = {color:0xffaa55, x: 0, y: 5};
            var bola2 = {color:0x00ffaa, x: 0, y: -5};
            bola.__proto__ = new Esfera(bola.color, bola.x, bola.y);
            bola2.__proto__ = new Esfera(bola2.color, bola2.x, bola.y);
            
            var paso = -0.10;
            var paso2 = 0.20;
            var paso3 = -0.10;
            var paso4 = -0.20;
            var raycaster1a = new THREE.Raycaster(bola.getposition(), new THREE.Vector3(0, 1, 0));
            var raycaster2a = new THREE.Raycaster(bola.getposition(), new THREE.Vector3(-1, 0, 0));
            var raycaster3a = new THREE.Raycaster(bola.getposition(), new THREE.Vector3(0, -1, 0));
            var raycaster4a = new THREE.Raycaster(bola.getposition(), new THREE.Vector3(1, 0, 0));
            
            var raycaster1b = new THREE.Raycaster(bola2.getposition(), new THREE.Vector3(0, 1, 0));
            var raycaster2b = new THREE.Raycaster(bola2.getposition(), new THREE.Vector3(-1, 0, 0));
            var raycaster3b = new THREE.Raycaster(bola2.getposition(), new THREE.Vector3(0, -1, 0));
            var raycaster4b = new THREE.Raycaster(bola2.getposition(), new THREE.Vector3(1, 0, 0));
            
            //Funcion de animación
            function render() {
                var intersects1a = raycaster1a.intersectObjects( escena.children );
                var intersects2a = raycaster2a.intersectObjects( escena.children );
                var intersects3a = raycaster3a.intersectObjects( escena.children );
                var intersects4a = raycaster4a.intersectObjects( escena.children );
                
                var intersects1b = raycaster1b.intersectObjects( escena.children );
                var intersects2b = raycaster2b.intersectObjects( escena.children );
                var intersects3b = raycaster3b.intersectObjects( escena.children );
                var intersects4b = raycaster4b.intersectObjects( escena.children );
                
                if (intersects1a.length > 0 && intersects1a[0].distance <= 1) {
                    paso2 = -((Math.random())+0.5)*(0.2);//Paso de -0.1 a -0.3
                }
                if (intersects2a.length > 0 && intersects2a[0].distance <= 1) {
                    paso = ((Math.random())+0.5)*(0.2);//Paso de 0.1 a 0.3
                }
                if (intersects3a.length > 0 && intersects3a[0].distance <= 1) {
                    paso2 = ((Math.random())+0.5)*(0.2);//Paso de 0.1 a 0.3
                }
                if (intersects4a.length > 0 && intersects4a[0].distance <= 1) {
                    paso = -((Math.random())+0.5)*(0.2);//Paso de -0.1 a -0.3
                }
                
                if (intersects1b.length > 0 && intersects1b[0].distance <= 1) {
                    paso4 = -((Math.random())+0.5)*(0.2);//Paso de -0.1 a -0.3
                }
                if (intersects2b.length > 0 && intersects2b[0].distance <= 1) {
                    paso3 = ((Math.random())+0.5)*(0.2);//Paso de 0.1 a 0.3
                }
                if (intersects3b.length > 0 && intersects3b[0].distance <= 1) {
                    paso4 = ((Math.random())+0.5)*(0.2);//Paso de 0.1 a 0.3
                }
                if (intersects4b.length > 0 && intersects4b[0].distance <= 1) {
                    paso3 = -((Math.random())+0.5)*(0.2);//Paso de -0.1 a -0.3
                }
                
                bola.setposition(paso, paso2);
                bola2.setposition(paso3, paso4);
                cubebackground.rotation.x += paso/20;
                cubebackground.rotation.y += paso2/20;
                luzpuntual.position.x += paso;
                luzpuntual.position.y += paso2;
                raycaster1a.set(bola.getposition(), new THREE.Vector3(0, 1, 0));
                raycaster2a.set(bola.getposition(), new THREE.Vector3(-1, 0, 0));
                raycaster3a.set(bola.getposition(), new THREE.Vector3(0, -1, 0));
                raycaster4a.set(bola.getposition(), new THREE.Vector3(1, 0, 0));
                raycaster1b.set(bola2.getposition(), new THREE.Vector3(0, 1, 0));
                raycaster2b.set(bola2.getposition(), new THREE.Vector3(-1, 0, 0));
                raycaster3b.set(bola2.getposition(), new THREE.Vector3(0, -1, 0));
                raycaster4b.set(bola2.getposition(), new THREE.Vector3(1, 0, 0));
                
                requestAnimationFrame( render );
                renderer.render(escena, camara);
            }
            render();
            

            }
