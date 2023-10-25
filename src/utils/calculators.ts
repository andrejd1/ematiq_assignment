import { TRectangleDimensions } from '../App.tsx'

export const calculateRectanglesDimensions = (
  rectangleAreaArray: number[],
  squareSide: number
): TRectangleDimensions[] => {
  const rectangles: TRectangleDimensions[] = []

  for (let i = 0; i < rectangleAreaArray.length; i++) {
    if (i % 2 === 0) {
      let sideReduction = 0
      let topReduction = 0
      let leftReduction = 0

      for (let j = 0; j <= i; j++) {
        if (j % 2 === 1) {
          sideReduction += rectangles[j].y
          if (j >= 1) topReduction += rectangles[j].y
          if (j >= 1) leftReduction += rectangles[j - 1].x
        }
      }
      rectangles.push({
        x: rectangleAreaArray[i] / (squareSide - sideReduction),
        y: squareSide - sideReduction,
        top: topReduction,
        left: leftReduction,
      })
    } else {
      let sideReduction = 0
      let topReduction = 0
      let leftReduction = 0

      for (let j = 0; j <= i; j++) {
        if (j % 2 === 0) {
          sideReduction += rectangles[j].x
        } else {
          if (j >= 2) topReduction += rectangles[j - 2].y
          if (j >= 1) leftReduction += rectangles[j - 1].x
        }
      }
      rectangles.push({
        x: squareSide - sideReduction,
        y: rectangleAreaArray[i] / (squareSide - sideReduction),
        top: topReduction,
        left: leftReduction,
      })
    }
  }

  return rectangles
}
