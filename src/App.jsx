import React from "react";
import { Card, Container, Grid } from "@mui/material";
import CardUno from "./containers/CardUno";
import CardDos from "./containers/CardDos";
import CardTres from "./containers/CardTres";



const valoresCardOne = {
  title: 'cosa da fare',
  count: 10,
  titlecardone: 'Esame GUIDA',
  captioncardone:"dell'attivita",
  programming:"domani",
  titlelist:"Esaminatori Assegnati",
  itemlisttitle:"Braia Bruna",
  captionlist:"Guida",
  expiration:"Ven 17/02/2023"
};
const valoresCardTwo = {
  titlecardone: 'Tempo Milano',
  degrees: '30º',
  porcentual: '11%',
  kilometers: '6 km/h',
  pvtitle: 'Previsone del tempo',
  pvalerttitle: 'Attenzione',
  pvalertparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis tincidunt pellentesque.',
  pvweekdays:'Giovedy',
  pvcaption:'soleato',
  pvpercentage: '16º',
  pvpercentagetwo: '11º',
  pvpercent: '11%',
  pvaproximate: '6 km/h',
  cmtitle:'Comunicazioni',
  cmcaption: 'Oggi',
  cmavatar:'https://humberto.tech/proyect/files/profile_images/_file640cb21c5c6db-avatar.png',
  cmlisttitle:'Lorem ipsum dolor sit amet',
  cmlistcaption:'Lorem ipsum dolor sit amet'
};
const valoresCardTree = {
  lhtitle: 'Ore di luce',
  lhdaylight:'07:25',
  lhnight:'17:50',
  fftitle: 'Funzioni preferite',
  ffcaption: 'Azione',
  ectitle: 'Calendario Eventi'

  
  
};

const App = () => {

return(

  


    <Container maxWidth="xl" style={{ width: '100%' }}>

    <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <CardUno valores={valoresCardOne} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardDos valores={valoresCardTwo}/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardTres valores={valoresCardTree} />
      </Grid>
    </Grid>
  </Container>


);



}


export  default App;
