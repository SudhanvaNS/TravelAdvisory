import React , {useEffect, useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from './component/Header/Header.jsx';
import List from './component/List/List.jsx';
import Map from './component/Map/Map.jsx';
import { getPlacesData } from './api';


const App = () =>{
    const [places,setPlaces] = useState([]);
    const [coordinates,setCoordinates] =useState({});
    const [bounds,setBounds] = useState({sw:0,ne:0});
    const [childClicked,setChildClicked]=useState(null);
    const [isLoading,setIsLoading] =useState(true);
    const [type,setType] =useState('restaurants');
    const [rating,setRating] =useState('');
    const [filteredPLaces,setFilteredPLaces]=useState([]);
    const [weatherData,setWeatherData]=useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords : {latitude,longitude}})=>{
                setCoordinates({lat : latitude , lng : longitude});
        })
    },[]);
    useEffect( () => {
        setIsLoading(true);
        // getWeatherData(coordinates.lat,coordinates.lng)
        // .then((data) => {
            // setWeatherData(data);
        // })
        getPlacesData(type,bounds.sw,bounds.ne)
        .then((data) => {
           
            setPlaces(data);
            setIsLoading(false);
        })
    },[type,coordinates,bounds]);

    useEffect(() => {
            const filteredPLaces=places.filter((place) => place.rating > rating)
            setFilteredPLaces(filteredPLaces);
    },[rating]);
    return (
    <>
        <CssBaseline />
        <Header setCoordinates={setCoordinates}/>
        <Grid container spacing ={3} style={{width: '100%'}}>
            <Grid item xs={12}  md={4}>
                <List places={filteredPLaces.length ? filteredPLaces : places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                />    
            </Grid>
            <Grid item xs={12}  md={8}>
                <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={filteredPLaces.length ? filteredPLaces : places}
                    setChildClicked={setChildClicked}
                    // weatherData={weatherData}
                    />    
            </Grid>
        </Grid>
    </>
    );
}

export default App;