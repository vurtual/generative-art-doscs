const Tile = (x, y, size, row, column, rowCount, columnCount) => {
  const tile = {}
  tile.pos = { x, y }
  tile.origin = { x: x + size / 2, y: y + size / 2 }
  tile.size = size
  tile.row = row
  tile.column = column
  tile.type = 'Tile'
  tile._rotate = { x: 0, y: 0, z: 0 }
  tile.opacity = 200
  tile._color = {
    r: random(100, 240),
    g: random(100, 240),
    b: random(100, 240),
  }
  // tile._color = {
  //   r: 240,
  //   g: 240,
  //   b: 240,
  // }
  tile.update = function () {
    const d = distance(tile.pos, { x: mouseX, y: mouseY })
    tile._rotate.x += (deltaTime * d) / width / 2500
    tile._rotate.y += (deltaTime * d) / height / 2500
  }

  tile.draw = function () {
    push()
    translate(tile.origin.x, tile.origin.y)
    fill(tile._color.r, tile._color.g, tile._color.b)
    rotateX(tile._rotate.x)
    rotateY(tile._rotate.y)
    rect(-tile.size, -tile.size, tile.size, tile.size)
    pop()
  }
  return tile
}

const generateTiles = () => {
  const tilesPerRow = 35
  const w = (width - (width % tilesPerRow)) / tilesPerRow
  const h = w
  const columnCount = (width - (width % w)) / w
  const rowCount = (height - (height % h)) / h
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      const tile = Tile(
        w + i * w + 2 - width / 2 + ((i + 1) * (width % w)) / columnCount,
        w + j * w + 2 - height / 2 + ((j + 1) * (height % h)) / rowCount,
        w * 1.2,
        j,
        i,
        rowCount,
        columnCount
      )
      GraphicObject(tile)
    }
  }
}
