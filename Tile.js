const Tile = (x, y, size, row, column, rowCount, columnCount) => {
  const tile = {}
  tile.pos = { x, y }
  tile.origin = { x: x + size / 2, y: y }
  tile.size = size
  tile.row = row
  tile.column = column
  tile.type = 'Tile'
  tile.rotate = { x: 0, y: 0, z: 0 }
  tile.opacity = 200
  tile.color = { r: random(100, 200), g: random(100, 200), b: random(100, 200) }

  tile.update = () => {
    const d = distance(tile.origin, { x: mouseX, y: mouseY })
    tile.rotate.x += (deltaTime * Math.sqrt(d)) / width / 100
    tile.rotate.y += (deltaTime * Math.sqrt(d)) / height / 100
    // tile.opacity = map(d, 0, width / 2, 255, 155)
  }

  tile.draw = () => {
    push()
    translate(tile.origin.x, tile.origin.y)
    fill(tile.color.r, tile.color.g, tile.color.b, tile.opacity)
    // noStroke()
    rotateX(tile.rotate.x)
    rotateY(tile.rotate.y)
    ellipse(-tile.size, -tile.size, tile.size, tile.size)
    pop()
  }

  GraphicObject(tile)
  return tile
}

const generateTiles = () => {
  const w = (width - (width % 25)) / 25
  const h = w
  const columnCount = (width - (width % w)) / w
  const rowCount = (height - (height % h)) / h
  console.log(columnCount, rowCount)
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      Tile(
        w + i * w + 2 - width / 2 + ((i + 1) * (width % w)) / columnCount,
        w + j * w + 2 - height / 2 + ((j + 1) * (height % h)) / rowCount,
        w * 2,
        j,
        i,
        rowCount,
        columnCount
      )
    }
  }
}
