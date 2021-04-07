import React, { FC, Children } from 'react'

import { createFullGrid } from 'utils'

import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {
  const grid = createFullGrid()
  console.log(grid)
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
