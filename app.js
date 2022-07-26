setup = () => {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL)
  generateTiles()
  // noStroke()
}

draw = () => {
  background(30)
  graphicObjects.forEach(object => object.update())
  graphicObjects.forEach(object => object.draw())
  console.log(Math.floor(1000 / deltaTime))
}
