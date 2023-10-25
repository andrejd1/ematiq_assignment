import { ReactNode } from 'react'
import { SquareContainer } from './Square.styled.ts'

type TSquareProps = {
  side: number
  children: ReactNode
}

function Square(props: TSquareProps) {
  return <SquareContainer $side={props.side}>{props.children}</SquareContainer>
}

export default Square
