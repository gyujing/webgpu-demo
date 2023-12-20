const vertex =  /* wgsl */`
@group(0) @binding(0) var<uniform> t:f32;
@vertex
fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
  var S = mat4x4<f32>(t,0.0,0.0,0.0,  0.0,t,0.0,0.0,  0.0,0.0,1.0,0.0,  0.0,0.0,0.0,1.0);
  return S * vec4<f32>(pos,1.0);//平移矩阵对顶点平移变换
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
