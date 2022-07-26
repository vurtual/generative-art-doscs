const graphicObjects = []

const GraphicObject = object => {
  const graphicObject = object
  graphicObjects.push(graphicObject)

  graphicObject._remove = () => {
    graphicObjects.splice(indexOf(graphicObject), 1)
  }
  return graphicObject
}
