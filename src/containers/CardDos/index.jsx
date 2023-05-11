import { Alert, AlertTitle, Badge, Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import { red } from '@mui/material/colors';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const CardDos = (props) =>{

const weather = [
    {
      day: 'Lunedì',
      weather: 'Soleggiato',
      min_temp: '10°',
      max_temp: '20°',
      wind_speed: '10 km/h',
      humidity: '10%',
    },
    {
      day: 'Martedì',
      weather: 'Soleggiato',
      min_temp: '10°',
      max_temp: '20°',
      wind_speed: '10 km/h',
      humidity: '10%',
    },
    {
      day: 'Mercoledì',
      weather: 'Soleggiato',
      min_temp: '10°',
      max_temp: '20°',
      wind_speed: '10 km/h',
      humidity: '10%',
    },
    {
      day: 'Giovedì',
      weather: 'Soleggiato',
      min_temp: '10°',
      max_temp: '20°',
      wind_speed: '10 km/h',
      humidity: '10%',
    },
  ]


  const today = [
    {
      cmavatar:'https://humberto.tech/proyect/files/profile_images/_file640cb21c5c6db-avatar.png',
      cmlisttitle:'Lorem ipsum dolor sit amet',
      cmlistcaption:'Lorem ipsum dolor sit amet'
  }, {
      cmavatar:'https://humberto.tech/proyect/files/profile_images/_file640cb21c5c6db-avatar.png',
      cmlisttitle:'Lorem ipsum dolor sit amet',
      cmlistcaption:'Lorem ipsum dolor sit amet'
  }, {
      cmavatar:'https://humberto.tech/proyect/files/profile_images/_file640cb21c5c6db-avatar.png',
      cmlisttitle:'Lorem ipsum dolor sit amet',
      cmlistcaption:'Lorem ipsum dolor sit amet'
  }
  ]; 



  const {valores} = props;

return(

  <>
    <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Grid 
      container
      direction="row"
      justifyContent="space-between" 
      alignItems="center"
      spacing={3}>
      <Grid item xs={3} sm={3}>
      <Typography variant="subtitle2">{valores.titlecardone}</Typography>
      </Grid>
      <Grid item xs={3} sm={3}  >
      <Badge  badgeContent={valores.degrees} color="primary">
        <NightsStayOutlinedIcon color="action" />
      </Badge>
      </Grid>
      <Grid item xs={3} sm={3}>
      <Typography variant="subtitle1">{valores.porcentual}</Typography>
      </Grid>
      <Grid item xs={3} sm={3}>
      <Typography variant="caption" >{valores.kilometers}</Typography>
      </Grid>
      </Grid>
      {/* <Stack sx={{marginTop:'13px'}}>
      <Divider variant="" />
      </Stack> */}
    </CardContent> 
    </Card>

<Card  sx={{ marginTop:'15px',  maxWidth: 345 }}>
<CardContent>
<Grid container spacing={2}>
  <Grid item xs={12}>
    <Typography variant="subtitle2" gutterBottom>
    {valores.pvtitle}
      </Typography>
  </Grid>
  <Grid item xs={12}>
  <Alert icon={false} severity="error">
  <AlertTitle>{valores.pvalerttitle}</AlertTitle>
  <Typography variant="inherit">{valores.pvalertparagraph}</Typography>
</Alert>
  </Grid>
  </Grid>
{
  
  weather.map((item,index) => {

        return (
          <Grid 
          container
          direction="row"
          justifyContent="space-between" 
          alignItems="center"
          spacing={3}
          sx={{marginTop:'1px'}}>
          <Grid item xs={3} sm={3}>
          <Typography variant="subtitle2">{item.day}</Typography>
          <Typography variant="caption">{item.weather}</Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
          <Brightness4OutlinedIcon/>
          </Grid>
          <Grid item xs={1} sm={1}  >
          <Typography  color="secondary"  variant="subtitle2">{item.min_temp} </Typography>
          </Grid>
          <Grid item xs={2} sm={2}  >
          <Typography variant="subtitle2">{item.max_temp}</Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
          <Typography variant="caption">{item.humidity}</Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
          <Typography variant="caption" >{item.wind_speed}</Typography>
          </Grid>
          </Grid>
        )

      } )
}

</CardContent> 
</Card>

<Card sx={{ marginTop:'15px', maxWidth: 345 }}>
      <CardHeader 
      sx={{backgroundColor:red[50]}}
      action={
        <SearchOutlinedIcon/>
      }
      // title="Shrimp and Chorizo Paella"
      subheader={valores.cmtitle}
      />
      <Typography sx={{
        borderLeft: "25px"
      }} variant="subtitle2">{valores.cmcaption}</Typography>
      <CardContent>
      <Divider />    
      </CardContent>
    

{
  today.map((item,index) => {

    return(
      <CardHeader
        avatar={
          <Avatar alt="Humberto Gil"  src={item.cmavatar}/>
        }

        title={item.cmlisttitle}
        subheader={item.cmlistcaption}
      />
    )

  })
}
      
</Card>

</> 

);


}


export default CardDos;