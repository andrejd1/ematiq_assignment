import { RectangleContainer, RectangleDescription } from './Rectangle.styled.ts'
import { useState } from 'react'

type TRectangleProps = {
  index: number
  area: number
  magnification: number
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

  return (
    <RectangleContainer
      top={props.top * props.magnification}
      left={props.left * props.magnification}
      width={props.width * props.magnification}
      height={props.height * props.magnification}
      background={props.background}
      onMouseEnter={() => setIsDescriptionShown(true)}
      onMouseLeave={() => setIsDescriptionShown(false)}
      onClick={() => {
        const newArray = props.rectangleAreaArray
        const firstSplit = Math.floor(props.area / 3)
        const secondSplit = props.area - firstSplit

        newArray.splice(props.index, 1, firstSplit)
        newArray.splice(props.index + 1, 0, secondSplit)
        props.setSearchParams(`q=${newArray.toString().replace(/,/g, '-')}`)
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
