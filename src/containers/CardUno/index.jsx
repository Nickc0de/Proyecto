import { Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from "@mui/material/colors";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { styled } from '@mui/material/styles';

  



const CardUno = (props) =>{

  const asigned=[
    {
    itemlisttitle:"Braia Bruna",
    captionlist:"Guida",
    expiration:"Ven 17/02/2023"
  }, {
    itemlisttitle:"Braia Bruna",
    captionlist:"Guida",
    expiration:"Ven 17/02/2023"
  }, {
    itemlisttitle:"Braia Bruna",
    captionlist:"Guida",
    expiration:"Ven 17/02/2023"
  }
  ]; 

  const {valores} = props;

return(
<>
    
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Typography>{valores.title}</Typography>
      }
      action={
        <Button variant="contained">{valores.count}</Button>
      }
    />
    <CardHeader
      sx={{fontSize:'1rem'}}
      avatar={
        <AssignmentOutlinedIcon/>
        
      }
      title={valores.titlecardone}
    />
    <CardContent>
      
    <Grid container
    direction="row"
    justifyContent="space-between" 
    alignItems="center"
    spacing={3}>
      <Grid item xs={8} sm={7}>
      <Typography variant="overline">{valores.titlecardone}</Typography>
      <Grid item xs={8} sm={8}>
      <Typography variant="caption">{valores.captioncardone}</Typography>
      </Grid>
      </Grid>
      <Grid item xs={4} sm={5}>
        <Typography variant="caption" color="red">{valores.programming}</Typography>
      </Grid>
    </Grid>
    <Stack sx={{marginTop:'13px'}}>
      <Divider variant="" />
    </Stack>
    </CardContent>

    <CardHeader
      sx={{fontSize:'1rem'}}
      avatar={
        <HowToRegIcon/>
        
      }
      title={valores.titlelist}
    />
    
    <CardContent>
    {/* <Grid 
    container
    direction="row"
    justifyContent="space-between" 
    alignItems="center"
    spacing={3}>
      <Grid item xs={8} sm={7}>
      <Typography variant="overline">{valores.itemlisttitle}</Typography>
      <Grid item xs={8} sm={8}>
      <Typography variant="caption">{valores.captionlist}</Typography>
      </Grid>
      </Grid>
    <Grid item xs={4} sm={5}>
      <Typography variant="caption" >{valores.expiration}</Typography>
    </Grid>
    </Grid> */}
    {
      asigned.map((item,index) => {
        return (
          <Grid 
    container
    direction="row"
    justifyContent="space-between" 
    alignItems="center"
    spacing={3}>
      <Grid item xs={8} sm={7}>
      <Typography variant="overline">{item.itemlisttitle}</Typography>
      <Grid item xs={8} sm={8}>
      <Typography variant="caption">{item.captionlist}</Typography>
      </Grid>
      </Grid>
    <Grid item xs={4} sm={5}>
      <Typography variant="caption" >{item.expiration}</Typography>
    </Grid>
    </Grid>
        )
      }
      )
    }
    <Stack sx={{marginTop:'13px'}}>
      <Divider variant="" />
    </Stack>
    

    {/* <Grid 
    container
    direction="row"
    justifyContent="space-between" 
    alignItems="center"
    spacing={3}>
      <Grid item xs={12} sm={7}>
      <Typography variant="overline">{valores.itemlisttitle}</Typography>
      <Grid item xs={12} sm={8}>
      <Typography variant="caption">{valores.captionlist}</Typography>
      </Grid>
      </Grid>
    <Grid item xs={12} sm={5}>
      <Typography variant="caption" >{valores.expiration}</Typography>
    </Grid>
    </Grid>
    <Stack sx={{marginTop:'13px'}}>
      <Divider variant="" />
    </Stack> */}

    {/* <Grid 
    container
    direction="row"
    justifyContent="space-between" 
    alignItems="center"
    spacing={3}>
      <Grid item xs={12} sm={7}>
      <Typography variant="overline">{valores.itemlisttitle}</Typography>
      <Grid item xs={12} sm={8}>
      <Typography variant="caption">{valores.captionlist}</Typography>
      </Grid>
      </Grid>
    <Grid item xs={12} sm={5}>
      <Typography variant="caption" >{valores.expiration}</Typography>
    </Grid>
    </Grid>
    <Stack sx={{marginTop:'13px'}}>
      <Divider variant="" />
    </Stack> */}

    {/* <Grid 
    container
    direction="row"
    justifyContent="space-between" 
    alignItems="center"
    spacing={3}>
      <Grid item xs={12} sm={7}>
      <Typography variant="overline">{valores.itemlisttitle}</Typography>
      <Grid item xs={12} sm={8}>
      <Typography variant="caption">{valores.captionlist}</Typography>
      </Grid>
      </Grid>
    <Grid item xs={12} sm={5}>
      <Typography variant="caption" >{valores.expiration}</Typography>
    </Grid>
    </Grid>
    <Stack sx={{marginTop:'13px'}}>
      <Divider variant="" />
    </Stack> */}

    </CardContent>

    
  </Card>




</>
)


}


export default CardUno;