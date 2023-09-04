import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import {  Button, Grid, IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@material-ui/core';
import ClubCard from './ClubCard';

const ClubPage = () => {
    const matches = useMediaQuery('(min-width:992px)');
    const items = [...Array(9)];
    return (
        <Stack sx={{ mt: 2, backgroundColor:"#FFFFFF", borderRadius:"5px", padding:"1%" }} spacing={2} >
            <Typography variant='h3' style={{ color:"rgba(4, 4, 21, 0.6)", margin:"10px"}}>SocialSync Club Members</Typography>
            
            <Box sx={{paddingX:"8px"}} style={{display:"flex", justifyContent:"space-between",  gap:15, }}>

                {/* Seacrh  Bar */}

                <Box component="form"
                    sx={{ backgroundColor:" rgba(4, 4, 21, 0.2)", p: '2px 4px', display: 'flex', alignItems: 'center', width: "75%", borderRadius:"5px" }}>
            
                    <IconButton sx={{  }} aria-label="menu">
                        <SearchIcon fontSize="large"></SearchIcon>
                    </IconButton>
            
                    <InputBase
                        sx={{ flex: 1,color:"rgba(4, 4, 21, 0.5)" , fontSize:"16px"  }}
                        placeholder="Search Member"
                        inputProps={{ 'aria-label': 'search Member' }}
                    />
                </Box>

                {/* Join button */}
                <Button variant='contained' sx={{ width: "25%", height: "50px", }} >Join</Button>
            </Box>

            {/* card container */}
               <Grid container sx={{marginX:"10px", }} >
              
              {items.map((item, index) => (
                  <Grid item xs={4.4} sm={4.9} md={3.8} gap='5' sx={{ backgroundColor: "#FFFFFF", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)", borderRadius: "0px 0px 5px 5px", margin: "auto",  marginBottom:"10px", }}>
                   
                       <ClubCard></ClubCard>
                     
                  </Grid>
              ))}

            </Grid>

       
        </Stack>
    );
};

export default ClubPage;