const canvas = document.getElementById("bg");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const geometry = new THREE.TorusGeometry(2.2, 0.55, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0x38bdf8,
  wireframe: true
});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.0007;
  torus.rotation.y += 0.0009;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});