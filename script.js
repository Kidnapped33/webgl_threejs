// console.log('hello world');
// console.log(THREE);

/**  ---------------------------------     scene  */

// 场景(scene)
// 场景（Scene）是 THREE.js 中用于容纳和管理 3D 对象的容器。它可以包含模型、光源、相机等元素，用于构建和呈现三维场景。场景对象可以用于添加、移除和管理其他对象，以及设置背景颜色、光照条件和其他属性。通过创建场景对象，我们可以在 THREE.js 中构建出具有丰富交互和视觉效果的三维场景。
const scene = new THREE.Scene()

/**  ---------------------------------     Red cube  */
// 几何学(geometry)
// 创建一个边长为1的立方体几何体。
// 使用了一个构造函数 BoxGeometry 来创建一个立方体的几何体对象。new BoxGeometry(1,1,1) 表示创建一个边长为1的立方体，其中参数 1, 1, 1 分别代表立方体在 X、Y 和 Z 轴方向上的长度。这个几何体对象可以用于创建三维场景中的立方体模型，例如在计算机图形学或游戏开发中。
const geometry = new THREE.BoxGeometry(1, 1, 1)

// material："材质" or "材料" 
// 材料(material)
const material = new THREE.MeshBasicMaterial({ color: 'red' })

// 网格（Mesh）
const mesh = new THREE.mesh(geometry, material)

//将网格对象添加到场景中。
scene.add(mesh)



/**  ---------------------------------      Size  */
const size = {
  width: 800,
  height: 800
}

/**  ---------------------------------      Camera  */
const camera = THREE.PerspectiveCamera(75, size.width / size.height)
scene.add(camera)