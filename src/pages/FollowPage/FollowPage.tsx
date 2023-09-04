import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import SearchBar from './SearchBar';
import { FlexBetween } from '../../components/styled/Styled.common';
import { useMediaQuery } from '@mui/material';



const FollowPage = () => {
    const matches = useMediaQuery('(min-width:992px)');
    const items = [...Array(8)];
        
    return (
        <Stack sx={{mt:2}} spacing={3}>

            <SearchBar/>
            
         <Box sx={{backgroundColor:"#FFFFFF",padding:"30px"}}>
            <FlexBetween>
               
                 <Typography variant='h3' align="center" sx={{color: "rgba(4, 4, 21, 0.8)",}}>
                        Most popular Person
                 </Typography>
                 <Typography variant='h4'  align="center" sx={{color: "#ff0000" }}>
                        See All
                 </Typography>
            </FlexBetween>
        
           <Grid container sx={{marginX:"10px", marginTop:"10px"}} >
              
              {items.map((item, index) => (
                  <Grid item xs={3.4} sm={3.7} md={2.8}  sx={{ backgroundColor: "#EEEEEE", border: " 1px solid rgba(4, 4, 21, 0.2)", borderRadius: "5px", margin: "4px", p: 2 }}>

                      <Box>
                          <Box >
                              <img
                                  style={{ width: "80%", height: "80%", borderRadius: "100%", marginLeft: "8%" }}
                                  src="https://i.ibb.co/0CS3Np6/Ellipse-62.png" title="profile name" alt='' />
                          </Box>
                          <Box sx={{ marginTop: "10px" }}>
                              {matches ? (<Typography variant='h2' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)" }}>
                                  Alan jackson
                              </Typography>) : (<Typography variant='h3' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)" }}>
                                  Alan jackson
                              </Typography>)} 
                             
                              
                              <Typography variant='h5' align="center" sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                                  Prince boy Alan
                              </Typography>

                              <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "full", marginTop: "25px", cursor: "pointer" }}>
                                  <Button sx={{ width: "70%", }} variant="outlined">Follow</Button>
                              </Grid>
                          </Box>
                      </Box>

                  </Grid>
              ))}

            </Grid>
        </Box>
      
        </Stack>
    );
};

export default FollowPage;