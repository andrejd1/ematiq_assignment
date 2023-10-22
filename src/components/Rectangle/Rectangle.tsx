import { RectangleContainer, RectangleDescription } from './Rectangle.styled.ts'
import { useRef, useState } from 'react'
import { MAGNIFICATION } from '../../utils/constants.ts'

type TRectangleProps = {
  index: number
  area: number
  top: number
  left: number
  width: number
  height: number
  background: string
  rectangleAreaArray: number[]
  setSearchParams: (query: string) => void
}

function Rectangle(props: TRectangleProps) {
  const [isDescriptionShown, setIsDescriptionShown] = useState<boolean>(false)
  const initialSplitRectangle = useRef<number>()

  const splitRectangles = () => {
    const newArray = props.rectangleAreaArray
    const firstSplit = Math.floor(props.area / 3)
    const secondSplit = props.area - firstSplit
    initialSplitRectangle.current = props.area

    newArray.splice(props.index, 1, firstSplit)
    newArray.splice(props.index + 1, 0, secondSplit)
    props.setSearchParams(`q=${newArray.toString().replace(/,/g, '-')}`)
  }

  const mergeRectangles = () => {
    if (initialSplitRectangle.current) {
      const newArray = props.rectangleAreaArray

      for (let i = 0; i < props.rectangleAreaArray.length; i++) {
        let currentSum = props.rectangleAreaArray[i]

        for (let j = i + 1; j < props.rectangleAreaArray.length; j++) {
          currentSum += props.rectangleAreaArray[j]
          if (currentSum === initialSplitRectangle.current) {
            newArray.splice(i, j - i + 1, initialSplitRectangle.current)
            props.setSearchParams(`q=${newArray.toString().replace(/,/g, '-')}`)
            return
          }
        }
      }
    }
  }

  return (
    <RectangleContainer
      top={props.top * MAGNIFICATION}
      left={props.left * MAGNIFICATION}
      width={props.width * MAGNIFICATION}
      height={props.height * MAGNIFICATION}
      background={props.background}
      onMouseEnter={() => setIsDescriptionShown(true)}
      onMouseLeave={() => setIsDescriptionShown(false)}
      onClick={splitRectangles}
      onContextMenu={(e) => {
        e.preventDefault()
        mergeRectangles()
      }}
    >
      <RectangleDescription $isShown={isDescriptionShown}>
        <p>top: {props.top.toFixed(2)}</p>
        <p>left: {props.left.toFixed(2)}</p>
      </RectangleDescription>
      <h2>{props.area}</h2>
      <RectangleDescription $isShown={isDescriptionShown}>
        <p>x: {props.width.toFixed(2)}</p>
        <p>y: {props.height.toFixed(2)}</p>
      </RectangleDescription>
    </RectangleContainer>
  )
}

export default Rectangle
