import React from 'react'
import image from '../../assets/rock-paper-scissor.png'
import { Section, Title, Subtitle, Image, PlayButton } from './styled'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/system'

export default function Home() {
  return (
    <Container>
      <Section>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <Title>Rock Paper Scissor</Title>
            <Subtitle>
              Rock paper scissors (also known by other orderings of the three
              items, with "rock" sometimes being called "stone," or as
              Rochambeau, roshambo, or ro-sham-bo) is a hand game originating
              from China
            </Subtitle>
            <PlayButton to="apps/game">
              Play Now →
            </PlayButton>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Image src={image} alt='image'></Image>
          </Grid>
        </Grid>
      </Section>
    </Container>
  )
}
