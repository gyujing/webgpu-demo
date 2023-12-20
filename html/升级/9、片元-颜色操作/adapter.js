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
    var y = fragCoord.y;//片元屏幕坐标y
    if(x < 400.0 && y < 200.0){
       // 片元x屏幕坐标小于300，片元设置为红色
      return vec4<f32>(0.8, 0.0, 0.0, 1.0);//片元设置为红色
    }else{
      return vec4<f32>(0.4, 0.0, 0.0, 1.0);//片元设置为红色
    }
  }
  `

export { vertex, fragment }
