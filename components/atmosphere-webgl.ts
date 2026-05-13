import * as THREE from "three";

export function mountAtmosphereWebGL(canvas: HTMLCanvasElement): () => void {
  const parent = canvas.parentElement;
  if (!parent) return () => undefined;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    parent.clientWidth / parent.clientHeight,
    0.1,
    100,
  );
  camera.position.z = 18;

  const count = 900;
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const offset = index * 3;
    positions[offset] = (Math.random() - 0.5) * 40;
    positions[offset + 1] = (Math.random() - 0.5) * 24;
    positions[offset + 2] = (Math.random() - 0.5) * 20;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x96ad85,
    size: 0.08,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const resize = () => {
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  resize();

  let frame = 0;
  let animationId = 0;

  const animate = () => {
    frame += 1;
    const pulse = 1 + Math.sin(frame * 0.01) * 0.04;
    points.rotation.y += 0.0008;
    points.rotation.x = Math.sin(frame * 0.004) * 0.08;
    points.scale.setScalar(pulse);
    renderer.render(scene, camera);
    animationId = window.requestAnimationFrame(animate);
  };

  animate();

  const observer = new ResizeObserver(resize);
  observer.observe(parent);

  return () => {
    window.cancelAnimationFrame(animationId);
    observer.disconnect();
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
