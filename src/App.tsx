import './App.css'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Square from './components/Square/Square.tsx'
import Rectangle from './components/Rectangle/Rectangle.tsx'
import Error from './components/Error/Error.tsx'
import { BACKGROUND_COLORS } from './utils/colors.ts'
import { calculateRectanglesDimensions } from './utils/calculators.ts'
import { hasArrayNumbersOnly } from './utils/validators.ts'

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
  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false)

  const memoizedRectangleAreaArray = useMemo(
    () => rectangleAreaArray,
    [rectangleAreaArray]
  )

  useEffect(() => {
    if (query) {
      const rectArray: string[] = query.split('-')
      if (hasArrayNumbersOnly(rectArray)) {
        const rectNumberArray = rectArray.map(Number)
        setRectangleArray(rectNumberArray)
        setSquareArea(rectNumberArray.reduce((acc, curr) => acc + curr))
        setIsInputInvalid(false)
      } else {
        setIsInputInvalid(true)
      }
    } else {
      setIsInputInvalid(true)
    }
  }, [query])

  useEffect(() => {
    setSearchParams(
      `q=${memoizedRectangleAreaArray.toString().replace(/,/g, '-')}`
    )
  }, [memoizedRectangleAreaArray, setSearchParams])

  useEffect(() => {
    if (!squareArea) return
    setSquareSide(Math.sqrt(squareArea))
  }, [squareArea])

  return (
    <>
      {rectangleAreaArray.length !== 0 ? (
        <Square side={squareSide}>
          {rectangleAreaArray.map((rectangle, index) => {
            const rectanglesDimensions = calculateRectanglesDimensions(
              rectangleAreaArray,
              squareSide
            )

            return (
              <Rectangle
                key={index}
                index={index}
                area={rectangle}
                rectangleDimensions={rectanglesDimensions[index]}
                background={BACKGROUND_COLORS[index % BACKGROUND_COLORS.length]}
                rectangleAreaArray={rectangleAreaArray}
                setRectangleArray={setRectangleArray}
              />
            )
          })}
        </Square>
      ) : !isInputInvalid ? (
        <h1>LOADING...</h1>
      ) : (
        <Error />
      )}
    </>
  )
}

export default App
