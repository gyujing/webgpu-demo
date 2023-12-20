//  先平移，再缩放
const vertex =  /* wgsl */`
struct Out {
  @builtin(position) position : vec4<f32>,
  @location(0) vColor: vec3<f32>
}
struct Input{
  @location(0) pos: vec3<f32>,
  @location(1) color: vec3<f32>
}
@vertex
fn main(input: Input) ->  Out{
  var out: Out;
  out.position = vec4<f32>(input.pos,1.0);
  out.vColor = input.color;
  return out;//平移矩阵对顶点平移变换
}
`

// 颜色
const fragment = /* wgsl */ `
struct Input{
  @location(0) vColor: vec3<f32>
}
@fragment
fn main(input: Input) -> @location(0) vec4<f32> {
    return vec4<f32>(input.vColor, 1.0);//片元设置为红色
}
  `

export { vertex, fragment }
