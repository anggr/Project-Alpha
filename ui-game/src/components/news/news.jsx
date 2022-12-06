import React from 'react'
import {
  Section,
  Subtitle,
  Title,
  Subtitle2,
  CustomCard,
  Title2,
  Button,
} from './styled'
import CardContent from '@mui/material/CardContent'
import { Container } from '@mui/system'
import { Grid, TextField } from '@mui/material'

export default function News() {
  return (
    <Container>
      <Section id="news">
        <Title>Newsletter</Title>
        <Subtitle>Keep in touch with us to experience new update</Subtitle>
        <CustomCard>
          <CardContent>
            <Grid
              container
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent='space-between'
              alignItems='center'>
              <Grid item xs={4} sm={7} md={7}>
                <Title2>Stay in the loop</Title2>
                <Subtitle2>
                  Subscribe to receive the latest news and updates about TDA.
                  <br />
                  We promise not to spam you!
                </Subtitle2>
              </Grid>
              <Grid item xs={4} sm={5} md={5}>
                <Grid
                  container
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  justifyContent='space-between'
                  alignItems='center'
                  bgcolor='white'
                  padding='10px 10px 10px 30px'
                  borderRadius='8px'>
                  <Grid item xs={2} sm={9} md={9} alignItems='center'>
                    <TextField
                      id='standard-basic'
                      label='Enter Email Address'
                      variant='standard'
                      size='small'
                    />
                  </Grid>
                  <Grid item xs={2} sm={3} md={3} alignItems='center'>
                    <Button>Continue</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CustomCard>
      </Section>
    </Container>
  )
}
