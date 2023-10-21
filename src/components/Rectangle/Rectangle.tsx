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
