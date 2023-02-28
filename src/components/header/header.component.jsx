import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import '@fontsource/roboto/500.css';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import { useState, useEffect } from "react";

const Header = () => {

    const [mobileNr] = useState("07XXXXXXX");
    const [buttonClicked, setButtonCliked] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("CALL US");


    useEffect(() => {
        if(buttonClicked){
            setButtonLabel(mobileNr);
        }
    },[buttonClicked, mobileNr])

    

    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} variant='h5' >Fast Locksmith</Typography>
                    <Button 
                        color="success" 
                        variant='contained' 
                        startIcon={<LocalPhoneSharpIcon/>}
                        onClick={() => setButtonCliked(true)}
                        href= "tel:+44130-888-888"
                    >
                        {buttonLabel}
                    </Button>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}

export default Header;