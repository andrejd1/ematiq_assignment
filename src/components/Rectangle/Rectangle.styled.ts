import styled from 'styled-components'
import { TRectangleDimensions } from '../../App.tsx'
import { MAGNIFICATION } from '../../utils/constants.ts'

type TRectangleContainerProps = {
  $rectangleDimensions: TRectangleDimensions
  $background: string
}

type TRectangleDescriptionProps = {
  $isShown: boolean
}

export const RectangleContainer = styled.div<TRectangleContainerProps>`
  position: absolute;
  top: ${(props) => props.$rectangleDimensions.top * MAGNIFICATION}px;
  left: ${(props) => props.$rectangleDimensions.left * MAGNIFICATION}px;
  width: ${(props) => props.$rectangleDimensions.x * MAGNIFICATION}px;
  height: ${(props) => props.$rectangleDimensions.y * MAGNIFICATION}px;
  background: ${(props) => props.$background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.$rectangleDimensions.x < props.$rectangleDimensions.y
      ? 'column'
      : 'row'};
  border: 1px solid #000000;

  h2 {
    margin: 6px 12px;
  }
`

export const RectangleDescription = styled.div<TRectangleDescriptionProps>`
  opacity: ${(props) => (props.$isShown ? '1' : '0')};
  transition: opacity 0.5s;
`
