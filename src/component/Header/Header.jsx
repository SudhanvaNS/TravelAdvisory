import React,{useState} from "react";
import { Autocomplete } from "@material-ui/lab";
import { AppBar , Toolbar , Typography, InputBase , Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = ({setCoordinates}) => {
    const Classes=useStyles();
    // const [autoComplete,setAutoComplete] = useState(null);

    // const onLoad = (autoC) =>{
    //     setAutoComplete(autoC)
    // }

    // const onPlaceChange = () => {
    //     const lat=autoComplete.getPlace().geometry.location.lat();
    //     const lng=autoComplete.getPlace().geometry.location.lng();
    //     setCoordinates({lat,lng});
    // }
    return (
        <>
            <AppBar position ='static'>
                <Toolbar className={Classes.toolbar}>
                    <Typography variant="h5" className={Classes.title}>
                        Travel Advisory
                    </Typography>
                    <Box display="flex">
                        <Typography variant ="h5" className={Classes.title}>
                            Explore new places 
                        </Typography>
                        {/* <Autocomplete  /> */}
                            {/* <div className={Classes.search}> */}
                                {/* <div className={Classes.searchIcon}> */}
                                    {/* <SearchIcon/> */}
                                {/* </div> */}
                                {/* <InputBase placeholder="Search......" classes={{root: Classes.inputRoot, input: Classes.inputInput}}/> */}
                            {/* </div> */}
                        {/* </Autocomplete> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;