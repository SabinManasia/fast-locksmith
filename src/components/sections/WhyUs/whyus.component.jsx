import { Typography, Paper } from '@mui/material'
import './whyus.style.scss';

const AboutUsComp = ({title, text}) => {

    return(
        <div className="whyContainer">
            <Paper className="headerPage" elevation={0}>
                <Typography variant="h2">{title}</Typography>
            </Paper>
            <Paper className="bodyPage" elevation={0}>
                <Typography>
                    {text}
                </Typography>
            </Paper>
        </div>
    );
}

export default AboutUsComp;