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
    var z = fragCoord.z;//片元屏幕坐标x
  
    return vec4<f32>(z, 0.0, 1.0 - z, 1.0);

    // if(z < 0.5){
    //   // 片元深度值小于0.5，片元设置为红色
    //   return vec4<f32>(1.0, 0.0, 0.0, 1.0);
    // }else{
    //     // 片元深度值不小于250，片元设置为绿色
    //     return vec4<f32>(0.0, 1.0, 0.0, 1.0);
    // }
  }
  `

export { vertex, fragment }
