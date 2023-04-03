import { Alert, AlertTitle, Badge, Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import { red } from '@mui/material/colors';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




const CardDos = (props) =>{

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
      <Grid item xs={12} sm={3}>
      <Typography variant="subtitle2">{valores.titlecardone}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}  >
      <Badge  badgeContent={valores.degrees} color="primary">
        <NightsStayOutlinedIcon color="action" />
      </Badge>
      </Grid>
      <Grid item xs={12} sm={3}>
      <Typography variant="subtitle1">{valores.porcentual}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
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
  <Grid 
  container
  direction="row"
  justifyContent="space-between" 
  alignItems="center"
  spacing={3}
  sx={{marginTop:'1px'}}>
  <Grid item xs={12} sm={3}>
  <Typography variant="subtitle2">{valores.pvweekdays}</Typography>
  <Typography variant="caption">{valores.pvcaption}</Typography>
  </Grid>
  <Grid item xs={12} sm={1}>
  <Brightness4OutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={1}  >
  <Typography  color="secondary"  variant="subtitle2">{valores.pvpercentage} </Typography>
  </Grid>
  <Grid item xs={12} sm={2}  >
  <Typography variant="subtitle2">{valores.pvpercentagetwo}</Typography>
  </Grid>
  <Grid item xs={12} sm={2}>
  <Typography variant="caption">{valores.pvpercent}</Typography>
  </Grid>
  <Grid item xs={12} sm={3}>
  <Typography variant="caption" >{valores.pvaproximate}</Typography>
  </Grid>
  </Grid>
  <Grid 
  container
  direction="row"
  justifyContent="space-between" 
  alignItems="center"
  spacing={1}
  sx={{marginTop:'1px'}}>
  <Grid item xs={12} sm={3}>
  <Typography variant="subtitle2">{valores.pvweekdays}</Typography>
  <Typography variant="caption">{valores.pvcaption}</Typography>
  </Grid>
  <Grid item xs={12} sm={1}>
  <Brightness4OutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={1}  >
  <Typography  color="secondary"  variant="subtitle2">{valores.pvpercentage} </Typography>
  </Grid>
  <Grid item xs={12} sm={2}  >
  <Typography variant="subtitle2">{valores.pvpercentagetwo}</Typography>
  </Grid>
  <Grid item xs={12} sm={2}>
  <Typography variant="caption">{valores.pvpercent}</Typography>
  </Grid>
  <Grid item xs={12} sm={3}>
  <Typography variant="caption" >{valores.pvaproximate}</Typography>
  </Grid>
  </Grid>
  <Grid 
  container
  direction="row"
  justifyContent="space-between" 
  alignItems="center"
  spacing={1}
  sx={{marginTop:'1px'}}>
  <Grid item xs={12} sm={3}>
  <Typography variant="subtitle2">{valores.pvweekdays}</Typography>
  <Typography variant="caption">{valores.pvcaption}</Typography>
  </Grid>
  <Grid item xs={12} sm={1}>
  <Brightness4OutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={1}  >
  <Typography  color="secondary"  variant="subtitle2">{valores.pvpercentage} </Typography>
  </Grid>
  <Grid item xs={12} sm={2}  >
  <Typography variant="subtitle2">{valores.pvpercentagetwo}</Typography>
  </Grid>
  <Grid item xs={12} sm={2}>
  <Typography variant="caption">{valores.pvpercent}</Typography>
  </Grid>
  <Grid item xs={12} sm={3}>
  <Typography variant="caption" >{valores.pvaproximate}</Typography>
  </Grid>
  </Grid>
  <Grid 
  container
  direction="row"
  justifyContent="space-between" 
  alignItems="center"
  spacing={1}
  sx={{marginTop:'1px'}}>
  <Grid item xs={12} sm={3}>
  <Typography variant="subtitle2">{valores.pvweekdays}</Typography>
  <Typography variant="caption">{valores.pvcaption}</Typography>
  </Grid>
  <Grid item xs={12} sm={1}>
  <Brightness4OutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={1}  >
  <Typography  color="secondary"  variant="subtitle2">{valores.pvpercentage} </Typography>
  </Grid>
  <Grid item xs={12} sm={2}  >
  <Typography variant="subtitle2">{valores.pvpercentagetwo}</Typography>
  </Grid>
  <Grid item xs={12} sm={2}>
  <Typography variant="caption">{valores.pvpercent}</Typography>
  </Grid>
  <Grid item xs={12} sm={3}>
  <Typography variant="caption" >{valores.pvaproximate}</Typography>
  </Grid>
  </Grid>
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
      <Typography  variant="subtitle2" >{valores.cmcaption}</Typography>
      <CardContent>
      <Divider />    
      </CardContent>
      <CardHeader
        avatar={
          <Avatar alt="Humberto Gil"  src={valores.cmavatar}/>
        }

        title={valores.cmlisttitle}
        subheader={valores.cmlistcaption}
      />
      <CardContent>
      <Divider />    
      </CardContent>
      <CardHeader
        avatar={
          <Avatar alt="Humberto Gil"  src="https://humberto.tech/proyect/files/profile_images/_file640cb21c5c6db-avatar.png"/>
        }

        title={valores.cmlisttitle}
        subheader={valores.cmlistcaption}
      />
      <CardContent>
      <Divider />    
      </CardContent>
      <CardHeader
        avatar={
          <Avatar alt="Humberto Gil"  src="https://humberto.tech/proyect/files/profile_images/_file640cb21c5c6db-avatar.png"/>
        }

        title={valores.cmlisttitle}
        subheader={valores.cmlistcaption}
      />
      
</Card>

</> 

);


}


export default CardDos;