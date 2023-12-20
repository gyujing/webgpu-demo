//  先平移，再缩放
const vertex =  /* wgsl */`
struct Out {
  @builtin(position) position : vec4<f32>,
  @location(0) vColor: vec3<f32>
}
@vertex
fn main(@location(1) pos: vec3<f32>,@location(2) color: vec3<f32>) ->  Out{
  var out: Out;
  out.position = vec4<f32>(pos,1.0);
  out.vColor = color;
  return out;//平移矩阵对顶点平移变换
}
`

// 颜色
const fragment = /* wgsl */ `
  @fragment
  fn main(@location(0) vColor: vec3<f32>) -> @location(0) vec4<f32> {
      return vec4<f32>(vColor, 1.0);//片元设置为红色
  }
  `

export { vertex, fragment }
