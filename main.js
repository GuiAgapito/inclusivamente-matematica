import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Função para criar uma cena 3D em um elemento específico
function criarCena(containerId, modeloPath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 1. Cena, Câmera e Renderizador [cite: 25, 43]
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 2. Iluminação (conforme o plano) [cite: 22, 23]
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // 3. Controles de Câmera [cite: 136]
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 4. Carregamento do Modelo .glb [cite: 11, 17]
    const loader = new GLTFLoader();
    loader.load(modeloPath, (gltf) => {
        scene.add(gltf.scene);
    }, undefined, (error) => {
        console.error(`Erro ao carregar ${modeloPath}:`, error);
    });

    // Animação
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

// Inicializar os canvases (certifique-se que os arquivos existem na pasta /models)
window.onload = () => {
    criarCena('canvas-abaco', './models/abaco.glb');
    criarCena('canvas-material', './models/material_dourado.glb');
    // Adicione os outros conforme os arquivos .glb ficarem prontos
};