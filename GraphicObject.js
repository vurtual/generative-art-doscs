const graphicObjects = []

const GraphicObject = object => {
  const graphicObject = object
  graphicObjects.push(graphicObject)

  graphicObject.remove = () => {
    graphicObjects.splice(indexOf(graphicObject), 1)
  }
  return graphicObject
}
