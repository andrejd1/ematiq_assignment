import styled from 'styled-components'

type TRectangleContainerProps = {
  top: number
  left: number
  width: number
  height: number
  background: string
}

type TRectangleDescriptionProps = {
  $isShown: boolean
}

export const RectangleContainer = styled.div<TRectangleContainerProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.width < props.height ? 'column' : 'row')};
  border: 1px solid #000000;

  h2 {
    margin: 6px 12px;
  }
`

export const RectangleDescription = styled.div<TRectangleDescriptionProps>`
  opacity: ${(props) => (props.$isShown ? '1' : '0')};
  transition: opacity 0.5s;
`
