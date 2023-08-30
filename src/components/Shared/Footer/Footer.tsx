
import Box from '@mui/material/Box';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Stack } from '@mui/system';
const Footer = () => {
    const matches = useMediaQuery('(min-width:992px)');
    return (
        <Box sx={{width:"full", backgroundColor:"#FFFFFF",height:"auto",  marginTop:"15px",borderRadius:"5px", padding:"20px"}}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {matches ? (<Typography variant='h1' color='text.primary' >We <Typography variant='h1' color='primary.main' component='span'>Connect</Typography></Typography>) : (<Typography variant='h2' color='text.primary' >PrismWeave</Typography>)}
            </Grid>
        <Box >
            <Box>
            <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={3}>
                {matches?
                (<><Typography variant='h4' color='rgba(4, 4, 21, 0.5)'>Home</Typography>
                <Typography variant='h4' paddingX={3} color='rgba(4, 4, 21, 0.5)'>Company</Typography>
                <Typography variant='h4'  color='rgba(4, 4, 21, 0.5)'>My account</Typography></>) 
                : (<><Typography variant='h5' color='rgba(4, 4, 21, 0.5)'>Home</Typography>
                <Typography variant='h5' paddingX={3} color='rgba(4, 4, 21, 0.5)'>Company</Typography>
                <Typography variant='h5'  color='rgba(4, 4, 21, 0.5)'>My account</Typography></>)}
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={1}>
                <Box  sx={{color:'rgba(4, 4, 21, 0.5)',display:"flex", justifyContent:'center', alignItems:"center"}}>
                    {matches?(<Typography variant='h4'  >Support</Typography>)
                    :(<Typography variant='h5'  >Support</Typography>)}
                    <KeyboardArrowDownIcon ></KeyboardArrowDownIcon>
                </Box>
            </Grid>
            </Box>
                {matches ? (<Typography variant='h4' align='center' color='rgba(4, 4, 21, 0.5)' sx={{ marginTop: "60px" }}>Copyright © 2023 – PrismWeave </Typography>) : (<Typography variant='h5' align='center' color='rgba(4, 4, 21, 0.5)' sx={{ marginTop: "60px" }}>Copyright © 2023 – Mild Technology</Typography>)}
           
        </Box>
            
             
            
            
                   
          
        </Box>
    );
};

export default Footer;