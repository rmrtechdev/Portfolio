import React, { useEffect, useRef } from "react";
import { WebGLRenderer, Scene, Color, Fog, Mesh, Renderer } from 'three';
import { PerspectiveCamera, AmbientLight, DirectionalLight, PointLight } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js"
import ThreeGlobe from "three-globe";
import * as THREE from 'three';
import countries from "../files/globe-data-min.json";


function MyGlobe() {
    const containerRef = useRef(null);

    
    useEffect(() => {
        let renderer, camera, scene, controls;
        let mouseX = 0;
        let mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        let Globe;

        init();
        initGlobe();
        onWindowResize();
        animate();

        function init() {
            renderer = new WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.outputEncoding = THREE.sRGBEncoding;
            containerRef.current.appendChild(renderer.domElement);

            scene = new Scene();
            scene.add(new AmbientLight(0xcccccc, 0.3));
            //scene.background = new Color();

            camera = new PerspectiveCamera();
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            const dLight = new DirectionalLight(0xffffff, 0.6);
            dLight.position.set(-800, 2000, 400);
            camera.add(dLight);

            const dLight1 = new DirectionalLight(0x7982f6, 1);
            dLight1.position.set(-200, 500, 200);
            camera.add(dLight1);

            const dLight2 = new PointLight(0x8566cc, 0.5);
            dLight2.position.set(-200, 500, 200);
            camera.add(dLight2);

            
            camera.position.z = 500;
            camera.position.x = 0;
            camera.position.y = 0;

            scene.add(camera);

            scene.fog = new Fog(0x535ef3, 400, 2000);

            controls = new TrackballControls(camera, renderer.domElement);
            controls.minDistance = 101;
            controls.rotateSpeed = 5;
            controls.zoomSpeed = 0.8;


            window.addEventListener("resize", onWindowResize, false);
            document.addEventListener("mousemove", onMouseMove);
        }

        function initGlobe() {
            Globe = new ThreeGlobe({
                waitForGlobeReady: true,
                animateIn: true,
            })
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
            .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
            .polygonCapColor(() => 'rgba(200, 0, 0, 0.7)')
            .polygonSideColor(() => 'rgba(0, 200, 0, 0.1)')
            .polygonStrokeColor(() => '#111')
            
          
            setTimeout(() => {
                Globe().polygonAltitude(() => Math.random())
            }, 4000);


            
            scene.add(Globe);
        }

        function onMouseMove(event) {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            windowHalfX = window.innerWidth / 1.5;
            windowHalfY = window.innerHeight / 1.5;
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            camera.position.x +=
                Math.abs(mouseX) <= windowHalfX / 2
                    ? (mouseX / 2 - camera.position.x) * 0.005
                    : 0;
            camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
            camera.lookAt(scene.position);
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        return () => {
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}

export default MyGlobe;
