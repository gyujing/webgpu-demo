const vertex =  /* wgsl */`
@vertex
fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
  return  vec4<f32>(pos,1.0);//平移矩阵对顶点平移变换
}
`

// 颜色
const fragment = /* wgsl */ `
  @fragment
  fn main(@builtin(position) fragCoord: vec4<f32>) -> @location(0) vec4<f32> {
    var x = fragCoord.x;//片元屏幕坐标x
  
    var per: f32 = (x-250.0)/250.0;
    return vec4<f32>(per, 0.0, 1.0-per, 1.0);
  }
  `

export { vertex, fragment }
