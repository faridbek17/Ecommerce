import React from 'react'
import { HeaderTopStyle } from './HeaderElements'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { Box } from '../Box'

export default function HeaderTop() {
  return (
    <HeaderTopStyle>
        <Container>
            <Flex>
                <Box mr="14px" color="red">asasadsa</Box>
                <Box>asasadsa</Box>
            </Flex>
        </Container>
    </HeaderTopStyle>
  )
}
