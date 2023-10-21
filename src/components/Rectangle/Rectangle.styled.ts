import styled from 'styled-components'

type TRectangleContainerProps = {
  top: number
  left: number
  width: number
  height: number
  background: string
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
  flex-direction: column;
`

export const RectangleDescription = styled.div<{ isShown: boolean }>`
  opacity: ${(props) => (props.isShown ? '1' : '0')};
  transition: opacity 0.5s;
`
