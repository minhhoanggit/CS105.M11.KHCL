const gui = new dat.GUI()

const geo = {
    geometry: { Line: 5 },
    geometrySolid: { Solid: 5 },
    geometryPoint: { Point: 5 },
    geometrySolidTexture: { Texture1: 5 }
};


const Geo = gui.addFolder("SelectGeometry");
Geo.add(geo.geometrySolid, 'Solid', 0, 5).step(1).onChange(select_GeometrySolid);

function select_GeometrySolid(choose) {
    scene.remove(boxMeshSolid)
    scene.remove(sphereMeshSolid)
    scene.remove(coneMeshSolid)
    scene.remove(cylinderMeshSolid)
    scene.remove(torusMeshSolid)
    scene.remove(boxMesh)
    scene.remove(sphereMesh)
    scene.remove(coneMesh)
    scene.remove(cylinderMesh)
    scene.remove(torusMesh)
    scene.remove(boxPoint)
    scene.remove(spherePoint)
    scene.remove(conePoint)
    scene.remove(cylinderPoint)
    scene.remove(torusPoint)
    scene.remove(boxMeshSolid1)
    scene.remove(sphereMeshSolid1)
    scene.remove(coneMeshSolid1)
    scene.remove(cylinderMeshSolid1)
    scene.remove(torusMeshSolid1)
    if (choose == 0) { scene.remove(torusPoint) }
    if (choose == 1) { scene.add(boxMeshSolid) }
    if (choose == 2) { scene.add(sphereMeshSolid) }
    if (choose == 3) { scene.add(coneMeshSolid) }
    if (choose == 4) { scene.add(cylinderMeshSolid) }
    if (choose == 5) { scene.add(torusMeshSolid) }
}

const Geo1 = gui.addFolder("SelectGeometryTexture");
Geo1.add(geo.geometrySolidTexture, 'Texture1', 0, 5).step(1).onChange(select_GeometrySolidTexture);

function select_GeometrySolidTexture(choose) {
    scene.remove(boxMeshSolid)
    scene.remove(sphereMeshSolid)
    scene.remove(coneMeshSolid)
    scene.remove(cylinderMeshSolid)
    scene.remove(torusMeshSolid)
    scene.remove(boxMesh)
    scene.remove(sphereMesh)
    scene.remove(coneMesh)
    scene.remove(cylinderMesh)
    scene.remove(torusMesh)
    scene.remove(boxPoint)
    scene.remove(spherePoint)
    scene.remove(conePoint)
    scene.remove(cylinderPoint)
    scene.remove(torusPoint)
    scene.remove(boxMeshSolid1)
    scene.remove(sphereMeshSolid1)
    scene.remove(coneMeshSolid1)
    scene.remove(cylinderMeshSolid1)
    scene.remove(torusMeshSolid1)
    if (choose == 0) { scene.remove(torusPoint) }
    if (choose == 1) { scene.add(boxMeshSolid1) }
    if (choose == 2) { scene.add(sphereMeshSolid1) }
    if (choose == 3) { scene.add(coneMeshSolid1) }
    if (choose == 4) { scene.add(cylinderMeshSolid1) }
    if (choose == 5) { scene.add(torusMeshSolid1) }
}

Geo.add(geo.geometry, 'Line', 0, 5).step(1).onChange(select_Geometry);

function select_Geometry(choose) {
    scene.remove(boxMeshSolid)
    scene.remove(sphereMeshSolid)
    scene.remove(coneMeshSolid)
    scene.remove(cylinderMeshSolid)
    scene.remove(torusMeshSolid)
    scene.remove(boxMesh)
    scene.remove(sphereMesh)
    scene.remove(coneMesh)
    scene.remove(cylinderMesh)
    scene.remove(torusMesh)
    scene.remove(boxPoint)
    scene.remove(spherePoint)
    scene.remove(conePoint)
    scene.remove(cylinderPoint)
    scene.remove(torusPoint)
    scene.remove(boxMeshSolid1)
    scene.remove(sphereMeshSolid1)
    scene.remove(coneMeshSolid1)
    scene.remove(cylinderMeshSolid1)
    scene.remove(torusMeshSolid1)
    if (choose == 0) { scene.remove(torusPoint) }
    if (choose == 1) { scene.add(boxMesh) }
    if (choose == 2) { scene.add(sphereMesh) }
    if (choose == 3) { scene.add(coneMesh) }
    if (choose == 4) { scene.add(cylinderMesh) }
    if (choose == 5) { scene.add(torusMesh) }
}



Geo.add(geo.geometryPoint, 'Point', 0, 5).step(1).onChange(select_GeometryPoint);

function select_GeometryPoint(choose) {
    scene.remove(boxMeshSolid)
    scene.remove(sphereMeshSolid)
    scene.remove(coneMeshSolid)
    scene.remove(cylinderMeshSolid)
    scene.remove(torusMeshSolid)
    scene.remove(boxMesh)
    scene.remove(sphereMesh)
    scene.remove(coneMesh)
    scene.remove(cylinderMesh)
    scene.remove(torusMesh)
    scene.remove(boxPoint)
    scene.remove(spherePoint)
    scene.remove(conePoint)
    scene.remove(cylinderPoint)
    scene.remove(torusPoint)
    scene.remove(boxMeshSolid1)
    scene.remove(sphereMeshSolid1)
    scene.remove(coneMeshSolid1)
    scene.remove(cylinderMeshSolid1)
    scene.remove(torusMeshSolid1)
    if (choose == 0) { scene.remove(torusPoint) }
    if (choose == 1) { scene.add(boxPoint) }
    if (choose == 2) { scene.add(spherePoint) }
    if (choose == 3) { scene.add(conePoint) }
    if (choose == 4) { scene.add(cylinderPoint) }
    if (choose == 5) { scene.add(torusPoint) }
}

const worldSolid = {
    box: {
        width: 10,
        height: 10,
        depth: 10,
    },
    sphere: { radius: 10 },
    cone: { radius: 10, height: 20, radialSeg: 64 },
    cylinder: { height: 20 },
    torus: {
        radius: 10,
        tube: 10,
    }
};
//Afine Solid
const boxGui = gui.addFolder("Affine Box Solid")
boxGui.add(worldSolid.box, "width", 1, 30).onChange(generateBox)
boxGui.add(worldSolid.box, "height", 1, 30).onChange(generateBox)
boxGui.add(worldSolid.box, "depth", 1, 30).onChange(generateBox)

function generateBox() {
    boxMeshSolid.geometry.dispose()
    boxMeshSolid.geometry = new THREE.BoxGeometry(worldSolid.box.width, worldSolid.box.height, worldSolid.box.depth);
}

const sphereGui = gui.addFolder("Affine Sphere Solid")
sphereGui.add(worldSolid.sphere, "radius", 1, 30).onChange(generateSphere)

function generateSphere() {
    sphereMeshSolid.geometry.dispose()
    sphereMeshSolid.geometry = new THREE.SphereGeometry(worldSolid.sphere.radius);
}

const coneGui = gui.addFolder("Affine Cone Solid")
coneGui.add(worldSolid.cone, "radius", 1, 30).onChange(generateCone)
coneGui.add(worldSolid.cone, "height", 1, 50).onChange(generateCone)
coneGui.add(worldSolid.cone, "radialSeg", 1, 50).onChange(generateCone)

function generateCone() {
    coneMeshSolid.geometry.dispose()
    coneMeshSolid.geometry = new THREE.ConeGeometry(worldSolid.cone.radius, worldSolid.cone.height, worldSolid.cone.radialSeg);
}

const cylinderGui = gui.addFolder("Affine Cylinder Solid")
cylinderGui.add(worldSolid.cylinder, "height", 1, 30).onChange(generateCylinder)

function generateCylinder() {
    cylinderMeshSolid.geometry.dispose()
    cylinderMeshSolid.geometry = new THREE.CylinderGeometry(5, 5, worldSolid.cylinder.height, 40);
}

const torusGui = gui.addFolder("Affine Torus Solid")
torusGui.add(worldSolid.torus, "radius", 1, 30).onChange(generateTorus)
torusGui.add(worldSolid.torus, "tube", 1, 30).onChange(generateTorus)

function generateTorus() {
    torusMeshSolid.geometry.dispose()
    torusMeshSolid.geometry = new THREE.TorusGeometry(worldSolid.torus.radius, worldSolid.torus.tube, 16, 100);
}

const scene = new THREE.Scene();
// const sceneTexture = new THREE.TextureLoader().load('sceneBackground.jpg');
// scene.background = sceneTexture;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 40, 50);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio)
renderer.setClearColor(new THREE.Color('#21282a'))
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;
//ambientLight
const ambientLight = new THREE.AmbientLight(0x404040, 0.9); // soft white light
scene.add(ambientLight);
//light
const pointLight0 = new THREE.PointLight(0xffffff, 0.3, 5000);
pointLight0.position.set(20, 35, 20);
scene.add(pointLight0);

const pointLight = new THREE.PointLight(0xffffff, 0.7, 50000);
pointLight.position.set(-20, 35, 20);
pointLight.castShadow = true; // default false
scene.add(pointLight);

const light = gui.addFolder("Light")
light.add(pointLight.position, 'x').min(-30).max(40).step(1);
light.add(pointLight.position, 'y').min(0).max(45).step(1);
light.add(pointLight.position, 'z').min(-30).max(40).step(1);

//Set up shadow properties for the light
pointLight.shadow.mapSize.width = 512; // default
pointLight.shadow.mapSize.height = 512; // default
pointLight.shadow.camera.near = 0.5; // default
pointLight.shadow.camera.far = 500; // default

//Create a plane that receives shadows (but does not cast them)
const planeGeometry = new THREE.PlaneGeometry(200, 200, 32, 32);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide })
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
scene.add(plane);
plane.rotation.x = Math.PI / 2;

//Helpers
const sphereSize = 1;
const pointLightHelper0 = new THREE.PointLightHelper(pointLight0, sphereSize);
scene.add(pointLightHelper0);
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene.add(pointLightHelper);
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

// các hình khối Lines
const lineMaterial = new THREE.MeshPhongMaterial({ color: 0x07396e, wireframe: true });
//1: box
const boxGeometry = new THREE.BoxGeometry(15, 15, 15, 10, 10, 10);
const boxMesh = new THREE.Mesh(boxGeometry, lineMaterial);
boxMesh.position.set(0, 12, 0);
boxMesh.castShadow = true;
// scene.add(boxMesh);
//2: hình cầu
const sphereGeometry = new THREE.SphereGeometry(10, 32, 32);
const sphereMesh = new THREE.Mesh(sphereGeometry, lineMaterial);
sphereMesh.castShadow = true;
sphereMesh.position.set(0, 12, 0);
// scene.add(sphereMesh);
//3: hình nón
const coneGeometry = new THREE.ConeGeometry(10, 20, 64, 20);
const coneMesh = new THREE.Mesh(coneGeometry, lineMaterial);
coneMesh.castShadow = true;
coneMesh.position.set(0, 12, 0);
// scene.add(coneMesh);
//4: hình trụ
const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 40, 15);
const cylinderMesh = new THREE.Mesh(cylinderGeometry, lineMaterial);
cylinderMesh.castShadow = true;
cylinderMesh.position.set(0, 12, 0);
// scene.add(cylinderMesh);
//5: torus
const torusGeometry = new THREE.TorusGeometry(7.5, 2.5, 16, 100);
const torusMesh = new THREE.Mesh(torusGeometry, lineMaterial);
torusMesh.castShadow = true;
torusMesh.position.set(0, 12, 0);
// scene.add(torusMesh);

// các hình khối Solid
const solidMaterial = new THREE.MeshPhongMaterial({ color: 0xFF6347 });

//1: box
const boxMeshSolid = new THREE.Mesh(boxGeometry, solidMaterial);
boxMeshSolid.castShadow = true; //default is false
boxMeshSolid.position.set(0, 12, 0);
//Affine box
boxGui.add(boxMeshSolid.position, 'x').min(-40).max(40).step(0.01);
boxGui.add(boxMeshSolid.position, 'y').min(-40).max(40).step(0.01);
boxGui.add(boxMeshSolid.position, 'z').min(-40).max(40).step(0.01);
boxGui.add(boxMeshSolid.scale, 'x').min(0).max(5).step(0.01);
boxGui.add(boxMeshSolid.scale, 'y').min(0).max(5).step(0.01);
boxGui.add(boxMeshSolid.scale, 'z').min(0).max(5).step(0.01);

// scene.add(boxMeshSolid);
//2: hình cầu
const sphereMeshSolid = new THREE.Mesh(sphereGeometry, solidMaterial);
sphereMeshSolid.castShadow = true;
sphereMeshSolid.position.set(0, 12, 0);
sphereGui.add(sphereMeshSolid.position, 'x').min(-40).max(40).step(0.01);
sphereGui.add(sphereMeshSolid.position, 'y').min(-40).max(40).step(0.01);
sphereGui.add(sphereMeshSolid.position, 'z').min(-40).max(40).step(0.01);
sphereGui.add(sphereMeshSolid.scale, 'x').min(0).max(5).step(0.01);
sphereGui.add(sphereMeshSolid.scale, 'y').min(0).max(5).step(0.01);
sphereGui.add(sphereMeshSolid.scale, 'z').min(0).max(5).step(0.01);

// scene.add(sphereMeshSolid);
//3: hình nón
const coneMeshSolid = new THREE.Mesh(coneGeometry, solidMaterial);
coneMeshSolid.castShadow = true;
coneMeshSolid.position.set(0, 12, 0);
coneGui.add(coneMeshSolid.position, 'x').min(-40).max(40).step(0.01);
coneGui.add(coneMeshSolid.position, 'y').min(-40).max(40).step(0.01);
coneGui.add(coneMeshSolid.position, 'z').min(-40).max(40).step(0.01);
coneGui.add(coneMeshSolid.scale, 'x').min(0).max(5).step(0.01);
coneGui.add(coneMeshSolid.scale, 'y').min(0).max(5).step(0.01);
coneGui.add(coneMeshSolid.scale, 'z').min(0).max(5).step(0.01);
// scene.add(coneMeshSolid);
//4: hình trụ
const cylinderMeshSolid = new THREE.Mesh(cylinderGeometry, solidMaterial);
cylinderMeshSolid.castShadow = true;
cylinderMeshSolid.position.set(0, 12, 0);
cylinderGui.add(cylinderMeshSolid.position, 'x').min(-40).max(40).step(0.01);
cylinderGui.add(cylinderMeshSolid.position, 'y').min(-40).max(40).step(0.01);
cylinderGui.add(cylinderMeshSolid.position, 'z').min(-40).max(40).step(0.01);
cylinderGui.add(cylinderMeshSolid.scale, 'x').min(0).max(5).step(0.01);
cylinderGui.add(cylinderMeshSolid.scale, 'y').min(0).max(5).step(0.01);
cylinderGui.add(cylinderMeshSolid.scale, 'z').min(0).max(5).step(0.01);
// scene.add(cylinderMeshSolid);
//5: ấm trà
//torus
const torusMeshSolid = new THREE.Mesh(torusGeometry, solidMaterial);
torusMeshSolid.castShadow = true;
torusMeshSolid.position.set(0, 12, 0);
torusGui.add(torusMeshSolid.position, 'x').min(-40).max(40).step(0.01);
torusGui.add(torusMeshSolid.position, 'y').min(-40).max(40).step(0.01);
torusGui.add(torusMeshSolid.position, 'z').min(-40).max(40).step(0.01);
torusGui.add(torusMeshSolid.scale, 'x').min(0).max(5).step(0.01);
torusGui.add(torusMeshSolid.scale, 'y').min(0).max(5).step(0.01);
torusGui.add(torusMeshSolid.scale, 'z').min(0).max(5).step(0.01);
// scene.add(torusMeshSolid);

// các hình khối Solid Texture
const texture = new THREE.TextureLoader().load('imageTexture.jpg');
const solidMaterialTexture = new THREE.MeshPhongMaterial({ map: texture });

// //1: box
const boxMeshSolid1 = new THREE.Mesh(boxGeometry, solidMaterialTexture);
boxMeshSolid1.castShadow = true; //default is false
boxMeshSolid1.position.set(0, 12, 0);
// scene.add(boxMeshSolid1);
// //2: hình cầu
const sphereMeshSolid1 = new THREE.Mesh(sphereGeometry, solidMaterialTexture);
sphereMeshSolid1.castShadow = true;
sphereMeshSolid1.position.set(0, 12, 0);
// scene.add(sphereMeshSolid1);
// //3: hình nón
const coneMeshSolid1 = new THREE.Mesh(coneGeometry, solidMaterialTexture);
coneMeshSolid1.castShadow = true;
coneMeshSolid1.position.set(0, 12, 0);
// scene.add(coneMeshSolid1);
// //4: hình trụ
const cylinderMeshSolid1 = new THREE.Mesh(cylinderGeometry, solidMaterialTexture);
cylinderMeshSolid1.castShadow = true;
cylinderMeshSolid1.position.set(0, 12, 0);
// scene.add(cylinderMeshSolid1);
// //5: ấm trà
// //torus
const torusMeshSolid1 = new THREE.Mesh(torusGeometry, solidMaterialTexture);
torusMeshSolid1.castShadow = true;
torusMeshSolid1.position.set(0, 12, 0);
// scene.add(torusMeshSolid1);


//Object
const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 1000;
const posArray = new Float32Array(particlesCnt * 3);

//xyz, xyz, xyz, xyz
for (let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 300
}
particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

//Material
const starMaterial = new THREE.PointsMaterial({ color: 0xFF6347, size: 0.3, color: 0xffffff, blending: THREE.AdditiveBlending });


const star = new THREE.Points(particlesGeometry, starMaterial)
scene.add(star);
// Các hình khối point
const pointMaterial = new THREE.PointsMaterial({ color: 0xFF6347, size: 0.4 });
//1: box
const boxPoint = new THREE.Points(boxGeometry, pointMaterial);
boxPoint.castShadow = true;
boxPoint.position.set(0, 12, 0);
// scene.add(boxPoint);
//2: hình cầu
const spherePoint = new THREE.Points(sphereGeometry, pointMaterial);
spherePoint.castShadow = true;
spherePoint.position.set(0, 12, 0);
// scene.add(spherePoint);
//3: hình nón
const conePoint = new THREE.Points(coneGeometry, pointMaterial);
conePoint.castShadow = true;
conePoint.position.set(0, 12, 0);
// scene.add(coneMeshSolid);
//4: hình trụ
const cylinderPoint = new THREE.Points(cylinderGeometry, pointMaterial);
cylinderPoint.castShadow = true;
cylinderPoint.position.set(0, 12, 0);
// scene.add(cylinderPoint);
//5: ấm trà
//torus
const torusPoint = new THREE.Points(torusGeometry, pointMaterial);
torusPoint.castShadow = true;
torusPoint.position.set(0, 12, 0);

const loader = new THREE.GLTFLoader();
loader.load('scene.gltf',
    function(gltf) {
        gltf.scene.position.set(0, 15, 0);
        gltf.scene.rotation.set(0, 0.7, 0);
        gltf.scene.scale.set(5, 5, 5);
        gltf.scene.castShadow = true;
        scene.add(gltf.scene);
        const scale2 = gui.addFolder("Model Bird Scale")
        scale2.add(gltf.scene.scale, 'x').min(0).max(7).step(0.1);
        scale2.add(gltf.scene.scale, 'y').min(0).max(7).step(0.1);
        scale2.add(gltf.scene.scale, 'z').min(0).max(7).step(0.1);
        const position2 = gui.addFolder("Model Bird Position")
        position2.add(gltf.scene.position, 'x').min(-30).max(40).step(1);
        position2.add(gltf.scene.position, 'y').min(-30).max(40).step(1);
        position2.add(gltf.scene.position, 'z').min(-30).max(40).step(1);
    },
    undefined,
    function(error) {
        console.error(error);
    }
);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();


    boxMesh.rotation.y += 0.005;
    sphereMesh.rotation.y += 0.005;
    coneMesh.rotation.y += 0.005;
    coneMesh.rotation.x += 0.005;
    coneMesh.rotation.z += 0.005;
    cylinderMesh.rotation.y += 0.005;
    cylinderMesh.rotation.x += 0.005;
    cylinderMesh.rotation.z += 0.005;
    torusMesh.rotation.y += 0.005;


    boxMeshSolid.rotation.y += 0.005;
    sphereMeshSolid.rotation.y += 0.005;
    coneMeshSolid.rotation.x += 0.005;
    coneMeshSolid.rotation.y += 0.005;
    coneMeshSolid.rotation.z += 0.005;
    cylinderMeshSolid.rotation.x += 0.005;
    cylinderMeshSolid.rotation.y += 0.005;
    cylinderMeshSolid.rotation.z += 0.005;
    torusMeshSolid.rotation.y += 0.005;

    boxMeshSolid1.rotation.y += 0.005;
    sphereMeshSolid1.rotation.y += 0.005;
    coneMeshSolid1.rotation.x += 0.005;
    coneMeshSolid1.rotation.y += 0.005;
    coneMeshSolid1.rotation.z += 0.005;
    cylinderMeshSolid1.rotation.x += 0.005;
    cylinderMeshSolid1.rotation.y += 0.005;
    cylinderMeshSolid1.rotation.z += 0.005;
    torusMeshSolid1.rotation.y += 0.005;


    boxPoint.rotation.y += 0.005;
    spherePoint.rotation.y += 0.005;
    cylinderPoint.rotation.y += 0.005;
    conePoint.rotation.y += 0.005;
    torusPoint.rotation.y += 0.005;

    star.rotation.x -= 0.0003

}
animate();