import './App.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Square from './components/Square/Square.tsx'
import Rectangle from './components/Rectangle/Rectangle.tsx'
import Error from './components/Error/Error.tsx'
import { BACKGROUND_COLORS } from './utils/colors.ts'
import { calculateRectangleDimensions } from './utils/calculators.ts'

const MAGNIFICATION = 50

export type TRectangleDimensions = {
  x: number
  y: number
  top: number
  left: number
}

function App() {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const query = searchParams.get('q')
  const [rectangleAreaArray, setRectangleArray] = useState<number[]>([])
  const [squareArea, setSquareArea] = useState<number>(0)
  const [squareSide, setSquareSide] = useState<number>(0)
  const [invalidInput, setInvalidInput] = useState<boolean>(true)

  useEffect(() => {
    if (query) {
      const rectArray: string[] = query.split('-')
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
      return (
        !isNaN(Number(element)) &&
        Number(element) >= 0 &&
        Number(element) <= 100
      )
    })
  }

  return (
    <>
      {rectangleAreaArray.length !== 0 && !invalidInput ? (
        <Square side={squareSide * MAGNIFICATION}>
          {rectangleAreaArray.map((rectangle, index) => {
            const rectangleDimensions = calculateRectangleDimensions(
              rectangleAreaArray,
              squareSide
            )

            return (
              <Rectangle
                key={index}
                index={index}
                area={rectangle}
                magnification={MAGNIFICATION}
                top={rectangleDimensions[index].top}
                left={rectangleDimensions[index].left}
                width={rectangleDimensions[index].x}
                height={rectangleDimensions[index].y}
                background={
                  index < BACKGROUND_COLORS.length
                    ? BACKGROUND_COLORS[index]
                    : BACKGROUND_COLORS[index - BACKGROUND_COLORS.length]
                }
                rectangleAreaArray={rectangleAreaArray}
                setSearchParams={setSearchParams}
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
