setup = () => {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL)
  generateTiles()
}

draw = () => {
  background(30)
  graphicObjects.forEach(object => object.update())
  graphicObjects.forEach(object => object.draw())
}
