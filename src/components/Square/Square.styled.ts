import styled from 'styled-components'

type TSquareContainerProps = {
  side: number
}

export const SquareContainer = styled.div<TSquareContainerProps>`
  position: relative;
  width: ${(props) => props.side}px;
  height: ${(props) => props.side}px;
  background: #ffffff;
  color: #000000;
`
