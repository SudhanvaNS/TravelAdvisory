import React from "react";
import GoogleMapReact from 'google-map-react';

import { Paper, Typography,useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import  Rating  from "@material-ui/lab/Rating";

import useStyles from './styles';


const Map = ({setCoordinates , setBounds ,coordinates, places ,setChildClicked}) => {
    const Classes=useStyles();
    const isDesktop=useMediaQuery('(min-width:600px)')
    return (
        <>
            <div className={Classes.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys ={{key:'AIzaSyBTckIvVuO8ceHjgnNNG3unl4rzWi2ouRA'}}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50,50,50,50]}
                    options={''}
                    onChange={(e) =>{
                        console.log(e);
                        setCoordinates({lat : e.center.lat, lng : e.center.lng});
                        setBounds({ne : e.marginBounds.ne , sw : e.marginBounds.sw , })
                    }}
                    onChildClick={(child) => setChildClicked(child)}
                >
                 {places?.map((place,i) => (
                    <div className={Classes.markerContainer}
                        lat={place.latitude}
                        lng={place.longitude}
                        key={i}
                    >
                        {
                        !isDesktop?(
                            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                        ):(
                            <Paper  elevation={3} className={Classes.paper}>
                                <Typography className={Classes.Typography} variant="subtitle2" gutterBottom >
                                    {place.name}
                                </Typography>   
                                <img className={Classes.pointer}
                                    src={place.photo? place.photo.images.small.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/640px-Barbieri_-_ViaSophia25668.jpg'}
                                    alt ={place.name}>
                                    </img>    
                                    <Rating size="small" value={Number(place.rating)} readOnly />                     
                            </Paper>
                        )
                    }
                        
                    </div>
                 ))}   
                </GoogleMapReact>
            </div>
        </>
    );
}

export default Map;