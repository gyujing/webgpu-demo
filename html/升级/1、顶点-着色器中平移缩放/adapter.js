// // 缩放矩阵缩放顶点坐标
// const vertex =  /* wgsl */`
//   @vertex
//   fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
//       var S = mat4x4<f32>(0.5,0.0,0.0,0.0,  0.0,0.5,0.0,0.0,  0.0,0.0,1.0,0.0,  0.0,0.0,0.0,1.0);
//       var pos2 = S * vec4<f32>(pos,1.0);
//       return pos2;
//   }
// `

// // 平移举证 - 平移顶点坐标
// const vertex =  /* wgsl */`
//     @vertex
//     fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
//       var T = mat4x4<f32>(1.0,0.0,0.0,0.0,  0.0,1.0,0.0,0.0,  0.0,0.0,1.0,0.0,  -0.3,-0.3,0.0,1.0);
//       return T * vec4<f32>(pos,1.0);//平移矩阵对顶点平移变换
//     }
// `

//  先平移，再缩放
const vertex =  /* wgsl */`
@vertex
fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
  var S = mat4x4<f32>(0.5,0.0,0.0,0.0,  0.0,0.5,0.0,0.0,  0.0,0.0,1.0,0.0,  0.0,0.0,0.0,1.0);
  var T = mat4x4<f32>(1.0,0.0,0.0,0.0,  0.0,1.0,0.0,0.0,  0.0,0.0,1.0,0.0,  -0.3,-0.3,0.0,1.0);
  return S * T * vec4<f32>(pos,1.0);//平移矩阵对顶点平移变换
}
`

// 颜色
const fragment = /* wgsl */ `
  @fragment
  fn main() -> @location(0) vec4<f32> {
      return vec4<f32>(0.0, 0.5, 0.0, 1.0);//片元设置为红色
  }
  `

export { vertex, fragment }
