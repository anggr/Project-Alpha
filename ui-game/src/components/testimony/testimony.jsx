import { Container } from '@mui/system';
import React from 'react';
import { Section, Subtitle, Title, Subtitle2, CustomCard, CustomCard2, Subheader, Subheader2} from './styled';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


export default function Testimony() {
    return ( 
            <Section id="testimony">
                <Container>
                    <Title>What they said about our games</Title>
                    <Subtitle>Real experience from our customer</Subtitle>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
                        <Grid item xs={2} sm={4} md={4} justifyContent="center" alignItems="center">
                            <CustomCard>
                                <CardHeader 
                                    sx={{ color: "white" }}
                                    avatar={
                                    <Avatar src="/static/images/avatar/1.jpg" aria-label="avatar">
                                    </Avatar>
                                    }
                                    title="Viezh Robert"
                                    subheader={<Subheader>Stray</Subheader>}
                                    action={
                                        <div>
                                            4,5
                                            <StarIcon sx={{ fontSize:15, color:"orange" }} />
                                        </div>
                                    }
                                />
                                <CardContent>
                                    <Subtitle2>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Subtitle2>
                                </CardContent>
                            </CustomCard>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4} justifyContent="center" alignItems="center">
                            <CustomCard2>
                                <CardHeader 
                                    sx={{ color: "white" }}
                                    avatar={
                                    <Avatar src="/static/images/avatar/1.jpg" aria-label="avatar">
                                    </Avatar>
                                    }
                                    title="Yessica Christy"
                                    subheader={<Subheader2>Rock Paper Scissors</Subheader2>}
                                    action={
                                        <div>
                                            4,5
                                            <StarIcon sx={{ fontSize:15, color:"orange" }} />
                                        </div>
                                    }
                                />
                                <CardContent>
                                    <Subtitle2>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Subtitle2>
                                </CardContent>
                            </CustomCard2>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4} justifyContent="center" alignItems="center">
                            <CustomCard2>
                                <CardHeader 
                                    sx={{ color: "white" }}
                                    avatar={
                                    <Avatar src="/static/images/avatar/1.jpg" aria-label="avatar">
                                    </Avatar>
                                    }
                                    title="Kim Young Jou"
                                    subheader={<Subheader2>Paper Minecraft</Subheader2>}
                                    action={
                                        <div>
                                            4,5
                                            <StarIcon sx={{ fontSize:15, color:"orange" }} />
                                        </div>
                                    }
                                />
                                <CardContent>
                                    <Subtitle2>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Subtitle2>
                                </CardContent>
                            </CustomCard2>
                        </Grid>
                    </Grid>
                </Container>
            </Section>
    );
}