import * as THREE from 'three';

export default {
    name: "background",
    data: () => {

        return {
            mouseX: null,
            mouseY: null,
            camera: null,
            scene: null,
            renderer: null,
            mesh: null,
            cameraObject: null,
            mouse: null,
            point: null,
            pointSecond: null,
            raycaster: null,
            material: null,
            raycasterSecond: null,
            planeGeometry: null,
            hiddenPlane: null,
            hiddenPlaneSecond: null,
            sphereCochonet: null
        }
        
    },
      methods: {
        init: function() {
            
            let container = document.getElementById('background3D');
            this.mouse = new THREE.Vector2(0,0);
            this.point = new THREE.Vector3(0,0,0);
            this.pointSecond = new THREE.Vector3(0,0,0);
            this.raycaster = new THREE.Raycaster();
            this.raycasterSecond = new THREE.Raycaster();

            this.camera = new THREE.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.1, 100);
            // this.camera = new THREE.OrthographicCamera( container.width / - 2, container.width / 2, container.height / 2, container.height / - 2, 1, 1000 );

            this.scene = new THREE.Scene();

            // THREE.FlyControls(this.camera, container);

            this.cameraObject = new THREE.Object3D();
            // this.cameraObject.scale.set(0.1,0.1,0.1);
            // this.cameraObject.position.y = -2;
            // this.cameraObject.rotation.y = Math.PI;
            this.scene.add(this.cameraObject);
            this.cameraObject.position.z = -4;

            // this.loader.load();
            // add Hidden plane
            this.planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
            this.material = new THREE.MeshBasicMaterial({color: 0xFF0000, visible: false });
            this.hiddenPlane = new THREE.Mesh(this.planeGeometry, this.material);
            //position beetween camera and eyes
            this.hiddenPlane.position.set(0,0,-2);
            this.scene.add(this.hiddenPlane);
            this.hiddenPlaneSecond= new THREE.Mesh(this.planeGeometry, this.material);
            this.hiddenPlaneSecond.position.set(0,0,-10)
            this.scene.add(this.hiddenPlaneSecond);

            // Petanque ball
            let geometryBall = new THREE.SphereGeometry( 5, 32, 32 );
            let textureBall = new THREE.TextureLoader().load( "model_baseColor.jpeg" );
            let materialBall = new THREE.MeshPhongMaterial( {
                map: textureBall
                // color: 0xffff00
            } );
            let sphere = new THREE.Mesh( geometryBall, materialBall );
            sphere.scale.set(0.2,0.2,0.2);
            this.cameraObject.add( sphere );

            // Add cochonet
            let geometryBallCochonet = new THREE.SphereGeometry( 2, 32, 32 );
            // let textureBallCochonet = new THREE.TextureLoader().load( "model_baseColor.jpeg" );
            let materialBallCochonet = new THREE.MeshPhongMaterial( {
                // map: textureBallCochonet
                color: 0xFF4B2B,
                specular: 0x050505,
                shininess: 100
                // color: 0xffff00
            } );
            this.sphereCochonet = new THREE.Mesh( geometryBallCochonet, materialBallCochonet );
            this.sphereCochonet.position.set(-2,0,-10);
            this.sphereCochonet.scale.set(0.2,0.2,0.2);
            this.scene.add( this.sphereCochonet );

            // Add hemisphere light
			let hemiLight = new THREE.HemisphereLight( 0xC4C4C4, 0xb78b8b, 0.8 );
			hemiLight.color.setHSL( 0.6, 1, 0.6 );
			hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
			hemiLight.position.set( 0, 50, 0 );
			this.scene.add( hemiLight );
    
            // add renderer
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            this.renderer.setPixelRatio( container.devicePixelRatio );
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            // this.renderer.gammaOutput = true;
            // this.renderer.gammaFactor = 2.2;
            container.appendChild(this.renderer.domElement);

            window.addEventListener( 'resize', this.onWindowResize, false );
            window.addEventListener('mousemove', this.onMouseMove, false);

        },
        onMouseMove: function(event) {

            // Update the mouse variable
            event.preventDefault();

            this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            this.raycaster.setFromCamera(this.mouse, this.camera);
            this.raycasterSecond.setFromCamera(this.mouse, this.camera);
            var intersects = this.raycaster.intersectObject(this.hiddenPlane);
            var intersectsSecond = this.raycasterSecond.intersectObject(this.hiddenPlaneSecond);

            if ( intersects.length > 0 )
            {
                this.point = intersects[0].point;
            }
            if ( intersectsSecond.length >0)
            {
                this.pointSecond = intersectsSecond[0].point;
            }
        },
        animate: function() {
            requestAnimationFrame(this.animate);
            // this.cameraObject.rotation.y += 0.02;
            this.cameraObject.lookAt(this.point);
            this.renderer.render(this.scene, this.camera);

            this.cameraObject.rotation.x = ( this.mouseX - this.cameraObject.position.x ) * .005;
            this.cameraObject.rotation.y = Math.PI - ( - this.mouseY - this.cameraObject.position.y ) * .005;
            this.camera.lookAt( this.cameraObject.position );
            this.sphereCochonet.position.x = this.pointSecond.x + 0.5;
            this.sphereCochonet.position.y = this.pointSecond.y - 0.5;
            this.sphereCochonet.rotation.y += 0.05;
            // console.log(this.pointSecond)
        },
        onWindowResize: function(){

            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize( window.innerWidth, window.innerHeight );
    
        },


      },
      mounted() {
          this.init();
          this.animate();
      }
}