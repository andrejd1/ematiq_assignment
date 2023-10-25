import styled from 'styled-components'
import { MAGNIFICATION } from '../../utils/constants.ts'

type TSquareContainerProps = {
  $side: number
}

export const SquareContainer = styled.div<TSquareContainerProps>`
  position: relative;
  width: ${(props) => props.$side * MAGNIFICATION}px;
  height: ${(props) => props.$side * MAGNIFICATION}px;
  background: #ffffff;
  color: #000000;
`
