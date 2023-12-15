// 顶点位置
const vertex =  /* wgsl */`
  @vertex
  fn main(@location(0) pos: vec3<f32>) -> @builtin(position) vec4<f32> {
      var pos2 = vec4<f32>(pos,1.0);
      pos2.x -= 0.2;//偏移所有顶点的x坐标
      return pos2;
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
