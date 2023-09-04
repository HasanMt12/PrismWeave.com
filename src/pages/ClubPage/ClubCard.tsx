import { useMediaQuery } from '@material-ui/core';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Box } from "@mui/system";

import { ActiveBtn, FlexStart } from '../../components/styled/Styled.common';

const ClubCard = () => {
    const matches = useMediaQuery('(min-width:992px)');
    const matches2 = useMediaQuery('(min-width:1148px)');
    return (
        <Box sx={{   }}>
                          <img style={{ width: "100%", }}
                              src='https://i.ibb.co/q9LnYX0/Rectangle-63.png' alt=''>

                              </img>
                              
                        <Box sx={{padding:"10px"}}>
                <FlexStart>
                    <Avatar  sx={{ width: 56, height: 56 , marginTop: "-10%" }}  src='https://i.ibb.co/sgTXjws/Ellipse-31-1.png' alt=''></Avatar>
                       
               
                    <Box sx={{marginTop:"10px"}}>
                            {matches2 ?      <Typography variant='h5'  sx={{ color: "rgba(4, 4, 21, 0.8)", marginBottom: "-10px", }}>
                            Angel Keya  
                                  </Typography>
                            : <Typography variant='h6' sx={{ color: "rgba(4, 4, 21, 0.8)", marginBottom: "-10px",width:"100%" }}>
                                Angel Keya  
                            </Typography>}
                                  <Typography variant='h6' mt={1} sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                                      Follow
                                  </Typography>
                              </Box>
                          </FlexStart>
                          <Box sx={{display:"grid" , placeItems:"end", }}>
                            <ActiveBtn>Follow</ActiveBtn>
                          </Box>
                        </Box>
                          
                       </Box>
    );
};

export default ClubCard;