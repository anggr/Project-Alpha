import { Container, Divider, Grid } from '@mui/material'
import React from 'react'
import {
  FooterLink,
  Heading,
  Section,
  Title,
  Subtitle,
  Round,
  Copyright
} from './styled'
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
} from '@mui/icons-material'

export default function Footer() {
  return (
    <Section>
      <Container>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent='space-between'
          marginBottom={5}
          marginTop={5}>
          <Grid item xs={2} sm={5} md={5}>
            <Title>LOGO</Title>
            <Subtitle>This is gaming website</Subtitle>
          </Grid>
          <Grid item xs={4} sm={7} md={7}>
            <Grid
              container
              columns={{ xs: 4, sm: 8, md: 12 }}
              alignItems="flex-end"
              >
              <Grid item xs={2} sm={4} md={4} flexDirection="row">
                <Heading>About Us</Heading>
                <FooterLink href='#'>Home</FooterLink>
                <FooterLink href='#'>Games</FooterLink>
                <FooterLink href='#'>Testimony</FooterLink>
                <FooterLink href='#'>Newsletter</FooterLink>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Heading>Contact Us</Heading>
                <FooterLink href='#'>Okky</FooterLink>
                <FooterLink href='#'>Isa</FooterLink>
                <FooterLink href='#'>Hafidz</FooterLink>
                <FooterLink href='#'>Gladys</FooterLink>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div>
                  <Round><FacebookRounded sx={{ color: 'white' }} /></Round>
                  <Round><Instagram sx={{ color: 'white' }} /></Round>
                  <Round><Twitter sx={{ color: 'white' }} /></Round>
                  <Round><LinkedIn sx={{ color: 'white' }} /></Round>
                  </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider Color='grey' />
      <Container sx={{ justifyContent:"center" }}>
        <Copyright>Copyright ® 2022 All Rights Reserved</Copyright>
      </Container>
    </Section>
  )
}
