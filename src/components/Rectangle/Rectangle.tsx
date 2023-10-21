import { RectangleContainer } from './Rectangle.styled.ts'

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
  return (
    <RectangleContainer
      key={props.index}
      top={props.top * props.magnification}
      left={props.left * props.magnification}
      width={props.width * props.magnification}
      height={props.height * props.magnification}
      background={props.background}
    >
      <p>index: {props.index}</p>
      <p>top: {props.top.toFixed(2)}</p>
      <p>left: {props.left.toFixed(2)}</p>
      <p>x: {props.width.toFixed(2)}</p>
      <p>y: {props.height.toFixed(2)}</p>
      <p>area: {props.area}</p>
    </RectangleContainer>
  )
}

export default Rectangle
