function Tile(x, y, size, row, column, rowCount, columnCount) {
  this.pos = { x, y }
  this.origin = { x: x + size / 2, y: y }
  this.size = size
  this.row = row
  this.column = column
  this.type = 'Tile'
  this._rotate = { x: 0, y: 0, z: 0 }
  this.opacity = 200
  this._color = {
    r: random(100, 200),
    g: random(100, 200),
    b: random(100, 200),
  }
}

Tile.prototype.update = function () {
  const d = distance(this.pos, { x: mouseX, y: mouseY })
  this._rotate.x += (deltaTime * d) / width / 10000
  this._rotate.y += (deltaTime * d) / height / 1000
  return this
}

Tile.prototype.draw = function () {
  push()
  translate(this.origin.x, this.origin.y)
  fill(this._color.r, this._color.g, this._color.b, this.opacity)
  // noStroke()
  rotateX(this._rotate.x)
  rotateY(this._rotate.y)
  rect(-this.size, -this.size, this.size, this.size)
  pop()
}

const generateTiles = () => {
  const tilesPerRow = 35
  const w = (width - (width % tilesPerRow)) / tilesPerRow
  const h = w
  const columnCount = (width - (width % w)) / w
  const rowCount = (height - (height % h)) / h
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      const tile = new Tile(
        w + i * w + 2 - width / 2 + ((i + 1) * (width % w)) / columnCount,
        w + j * w + 2 - height / 2 + ((j + 1) * (height % h)) / rowCount,
        w * 2,
        j,
        i,
        rowCount,
        columnCount
      )
      GraphicObject(tile)
    }
  }
}
