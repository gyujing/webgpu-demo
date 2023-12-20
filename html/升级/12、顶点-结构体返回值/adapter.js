const vertex =  /* wgsl */`
struct Out {
  @builtin(position) position:vec4<f32>,
  // 位置变量vPosition表示顶点位置坐标插值后的坐标
  // 通过location标记改变量，location的参数可以是0、1、2等
  // vPosition可以用来表示每个片元的坐标xyz
  @location(0) vPosition: vec3<f32>
}
@vertex
fn main(@location(0) pos: vec3<f32>) -> Out {
    var out:Out;//通过结构体生成一个变量
    out.position = vec4<f32>(pos,1.0);//平移矩阵对顶点平移变换
    out.vPosition = pos; // 返回值在【0，1】内的顶点坐标
    return out;
}
`

// 颜色
const fragment = /* wgsl */ `
  @fragment
  fn main(@location(0) vPosition: vec3<f32>) -> @location(0) vec4<f32> {
    var x = vPosition.x;//片元屏幕坐标x
  
    return vec4<f32>(x, 0.0, 1.0-x, 1.0);
  }
  `

// const fragment = /* wgsl */ `
// @fragment
// fn main(@builtin(position) fragCoord: vec4<f32>) -> @location(0) vec4<f32> {
//   var x = fragCoord.x;//片元屏幕坐标x

//   var per: f32 = (x-250.0)/250.0;
//   return vec4<f32>(per, 0.0, 1.0-per, 1.0);
// }
// `

export { vertex, fragment }
