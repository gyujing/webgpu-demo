const vertex =  /* wgsl */`
@vertex
fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
  return  vec4<f32>(pos,1.0);//平移矩阵对顶点平移变换
}
`

// 颜色
const fragment = /* wgsl */ `
@group(0) @binding(0) var<uniform> color:vec3<f32>;
  @fragment
  fn main() -> @location(0) vec4<f32> {
      return vec4<f32>(color, 1.0);//片元设置为红色
  }
  `

export { vertex, fragment }
