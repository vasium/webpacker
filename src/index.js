import React from "react";
import ReactDOM from "react-dom";
import Img from "./images/image.jpg";
import "./styles/style.scss"
import * as THREE from 'three';

const App = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 10.01;
        cube.rotation.y += 10.01;

        renderer.render(scene, camera);
    };

    animate();

    return (
        <div>
            <h1>
                Hello World!
            </h1>
            <p>
                Hello World!
            </p>
            <img src={Img} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById(("root")
    )
)