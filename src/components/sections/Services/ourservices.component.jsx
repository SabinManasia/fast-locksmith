import { Typography, Paper } from '@mui/material'
import './ourservices.style.scss';

const OurServicesComp = () => {

    return(
        <div className="header">
            <Typography variant="h2" style={{flexGrow: 3, color: "white"}}>OUR SERVICES</Typography>
            <div className="services">
                <Paper className="item">
                    <Typography variant="h2">
                        House locksmith
                    </Typography>
                    <br/>
                    <Typography>
                        In the unfortunate event of you being locked out and need to gain entry into your home or
                        commercial place, we will be there as fast as possible within 30 min or less. The call center will reach
                        to the closest emergency locksmith near your location for fast response and provide door opening
                        and new locks if needed. Our friendly technicians are highly skilled and well stocked with almost all
                        types of locks, so don’t worry we got you covered. This service is applicable for domestic or
                        commercial needs.
                    </Typography>
                </Paper>
                <Paper className="item">
                    <Typography variant="h2">   
                        Lock change
                    </Typography>
                    <br/>
                    <Typography>
                        Our professional locksmith services extend with lock changing and lock repairs. The closest locksmith
                        near your location will assess the problem and based on your own needs he will guide you into the
                        best solution for your security against burglars or any other intruders.
                    </Typography>
                </Paper>
                <Paper className="item">
                    <Typography variant="h2">   
                        Auto locksmith
                    </Typography>
                    <br/>
                    <Typography>
                        Call us immediately for our emergency locksmith service for car opening. If you have the car locked
                        with the keys inside, we will provide prompt help right away.
                    </Typography>
                </Paper >
            </div>
        </div>
    );
}

export default OurServicesComp;