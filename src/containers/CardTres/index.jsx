import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Card, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";




const CardTres = (props) =>{

  const functions=[
    {
      ffcaption: 'Azione',
      
  }, {
    ffcaption: 'Azione',
  }, {
    ffcaption: 'Azione',
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
    <Typography variant="subtitle2">{valores.lhtitle}</Typography>
    </Grid>
    <Grid item xs={1} sm={1}>
      <WbSunnyOutlinedIcon/>
    </Grid>
    <Grid item xs={3} sm={3}>
    <Typography variant="subtitle1">{valores.lhdaylight}</Typography>
    </Grid>
    <Grid item xs={1} sm={1}>
      <WbSunnyOutlinedIcon/>
    </Grid>
    <Grid item xs={3} sm={3}>
    <Typography variant="subtitle1">{valores.lhnight}</Typography>
    </Grid>
    </Grid>
  </CardContent> 
  </Card>

<Card sx={{ marginTop:'15px', maxWidth: 345 }}>
<CardContent>
  <Grid 
  container
  direction="row"
  justifyContent="space-between" 
  alignItems="center"
  spacing={3}>
  <Grid item xs={12} sm={12}>
  <Typography variant="subtitle2">{valores.fftitle}</Typography>
  </Grid>
{
  functions.map((item,index) => {

    return (
<>
      <Grid item xs={2} sm={2}>
      <WbSunnyOutlinedIcon/>
    </Grid>
    <Grid item xs={7} sm={7}>
    <Typography variant="subtitle1">{item.ffcaption}</Typography>
    </Grid>
    <Grid item xs={1} sm={1}>
      <WbSunnyOutlinedIcon/>
    </Grid>
    <Grid item xs={2} sm={2}>
    <Typography variant="subtitle1">G</Typography>
    </Grid>

    </>
    )


  } )
}



  {/* <Grid item xs={2} sm={2}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={7} sm={7}>
  <Typography variant="subtitle1">{valores.ffcaption} 1</Typography>
  </Grid>
  <Grid item xs={1} sm={1}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={2} sm={2}>
  <Typography variant="subtitle1">G</Typography>
  </Grid> */}

  {/* <Grid item xs={12} sm={2}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={7}>
  <Typography variant="subtitle1">{valores.ffcaption} 2</Typography>
  </Grid>
  <Grid item xs={12} sm={1}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={2}>
  <Typography variant="subtitle1">G</Typography>
  </Grid>
  <Grid item xs={12} sm={2}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={7}>
  <Typography variant="subtitle1">{valores.ffcaption} 3</Typography>
  </Grid>
  <Grid item xs={12} sm={1}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={2}>
  <Typography variant="subtitle1">G</Typography>
  </Grid> */}
  </Grid>
  
  <Stack sx={{marginTop:'13px'}}>
  <Divider variant="" />
  </Stack>
  {/* <Grid 
  container
  direction="row"
  justifyContent="space-between" 
  alignItems="center"
  spacing={3}
  sx={{marginTop:'-5px'}}
  >
  <Grid item xs={12} sm={2}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={7}>
  <Typography variant="subtitle1">{valores.ffcaption} 1</Typography>
  </Grid>
  <Grid item xs={12} sm={1}>
    <WbSunnyOutlinedIcon/>
  </Grid>
  <Grid item xs={12} sm={2}>
  <Typography variant="subtitle1">G</Typography>
  </Grid>
  </Grid> */}
</CardContent> 

</Card>

<Card sx={{ marginTop:'15px', maxWidth: 345 }}>
  <CardContent>
    <Grid 
    container
    direction="row"
    justifyContent="space-between" 
    alignItems="center"
    spacing={3}>
    <Grid item xs={12} sm={12}>
    <Typography variant="subtitle2">{valores.ectitle}</Typography>
    </Grid>
    <Grid item xs={12} sm={12}>
    <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://calendariodecolombia.com/calendar-mini?mes=11&year=2023"/> 
    </Grid>
    </Grid>
  </CardContent> 
  </Card>

        
</>

)


}


export default CardTres;