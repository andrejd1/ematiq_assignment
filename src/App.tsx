import './App.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Square from './components/Square/Square.tsx'
import Rectangle from './components/Rectangle/Rectangle.tsx'
import Error from './components/Error/Error.tsx'

const MAGNIFICATION = 50

const BACKGROUND_COLORS: string[] = [
  '#F0F8FF',
  '#FAEBD7',
  '#00FFFF',
  '#7FFFD4',
  '#F0FFFF',
  '#F5F5DC',
  '#DEB887',
  '#5F9EA0',
  '#7FFF00',
  '#FF7F50',
  '#FFF8DC',
  '#00FFFF',
]

type TRectangleDimensions = {
  x: number
  y: number
  top: number
  left: number
}

function App() {
  const [searchParams] = useSearchParams({ q: '' })
  const query = searchParams.get('q')
  const [rectangleAreaArray, setRectangleArray] = useState<number[]>([])
  const [squareArea, setSquareArea] = useState<number>(0)
  const [squareSide, setSquareSide] = useState<number>(0)
  const [invalidInput, setInvalidInput] = useState<boolean>(true)

  useEffect(() => {
    if (query) {
      const rectArray: string[] = query.split(',')
      console.log(arrayHasOnlyNumbers(rectArray))
      if (arrayHasOnlyNumbers(rectArray)) {
        const rectNumberArray = rectArray.map(Number)
        setRectangleArray(rectNumberArray)
        setSquareArea(rectNumberArray.reduce((acc, curr) => acc + curr))
        setInvalidInput(false)
      } else {
        setInvalidInput(true)
      }
    }
  }, [query])

  useEffect(() => {
    if (!squareArea) return
    setSquareSide(Math.sqrt(squareArea))
  }, [squareArea])

  const arrayHasOnlyNumbers = (array: string[]): boolean => {
    return array.every((element) => {
      return !isNaN(Number(element))
    })
  }

  const calculateRectangleDimensions = (): TRectangleDimensions[] => {
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

  return (
    <>
      {rectangleAreaArray.length !== 0 && !invalidInput ? (
        <Square side={squareSide * MAGNIFICATION}>
          {rectangleAreaArray.map((rectangle, index) => {
            const rectangleDimensions = calculateRectangleDimensions()

            return (
              <Rectangle
                index={index}
                area={rectangle}
                magnification={MAGNIFICATION}
                top={rectangleDimensions[index].top}
                left={rectangleDimensions[index].left}
                width={rectangleDimensions[index].x}
                height={rectangleDimensions[index].y}
                background={BACKGROUND_COLORS[index]}
              />
            )
          })}
        </Square>
      ) : (
        <Error />
      )}
    </>
  )
}

export default App
