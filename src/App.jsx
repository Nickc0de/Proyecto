import React,  { Component } from "react";
import { Card, Container, Grid } from "@mui/material";
import CardUno from "./containers/CardUno";
import CardDos from "./containers/CardDos";
import CardTres from "./containers/CardTres";
import {WEATHER_KEY} from './keys';
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";


const valoresCardOne = {
  title: 'cosa da fare',
  count: 10,
  titlecardone: 'Esame GUIDA',
  captioncardone:"dell'attivita",
  programming:"domani",
  titlelist:"Esaminatori Assegnati"
};

const valoresCardTwo = {
  titlecardone: 'Tempo Milano',
  degrees: '30º',
  porcentual: '11%',
  kilometers: '6 km/h',
  pvtitle: 'Previsone del tempo',
  pvalerttitle: 'Attenzione',
  pvalertparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis tincidunt pellentesque.',
  cmtitle:'Comunicazioni',
  cmcaption: 'Oggi',
};
const valoresCardTree = {
  lhtitle: 'Ore di luce',
  lhdaylight:'07:25',
  lhnight:'17:50',
  fftitle: 'Funzioni preferite',
  ectitle: 'Calendario Eventi'
};


// const App = () => {
  class App extends Component {
  state = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',
    error: null
  };
  
  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
  
    if (cityValue && countryValue) {
        // metric parameter is for Celcius Unit
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Milan,IT&appid=${WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data)
  
        this.setState({
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            error: null
        });
    } else {
        this.setState({
            error: 'Please enter a City and a Country.'
        });
    }
  
  }
  
render(){

  return  <Container maxWidth="xl" style={{ width: '100%' }}>

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
    <div className="row">
                <div className="col-md-6 mx-auto">
                    <WeatherForm
                        getWeather={this.getWeather}
                    />
                    <WeatherInfo {...this.state} />
                    {/* <WeatherForecast  /> */}

                </div>
            </div>
  </Container>


};



}


export  default App;
