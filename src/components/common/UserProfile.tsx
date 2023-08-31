import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Grid, IconButton } from '@mui/material';
import messageIcon from '../../../assets/icons/message.svg';
import { ActiveBtn, FlexBetween, FlexEvenly, ProfileBtn, } from '../../../components/styled/Styled.common';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/system';
import { useMediaQuery } from '@mui/material';
const UserProfile = () => {
    const matches = useMediaQuery('(min-width:1194px)');
    return (


        <Card sx={{ padding: "20px" }}>
            <img src='https://i.ibb.co/bPBdmx7/Rectangle-51.png' alt='' style={{ maxWidth: '100%' }}></img>
            <Box>
                <img
                    style={{ width: "50%", height: "50%", borderRadius: "100%", marginLeft: "25%", zIndex: "-1", marginTop: "-70%" }}
                    src="https://i.ibb.co/Stt0WJY/profile.png" title="profile name" alt='' />
            </Box>

            <Box>

            <Stack spacing={2}>
                <Box>
                    <Typography variant='h2' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)", marginBottom: "-5px", }}>
                            Hasan Mahmud
                    </Typography>
                    <Typography variant='h5' align="center" mt={1} sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                            
                    </Typography>
                </Box>

                <FlexBetween sx={{flexWrap:'wrap'}}>
                    <Box>
                        <Typography variant='h3' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)" }}>
                            2k
                        </Typography>
                        <Typography variant='h4' align="center" sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                            Follower
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant='h3' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)" }}>
                            2k
                        </Typography>
                        <Typography variant='h4' align="center" sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                            Follower
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant='h3' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)" }}>
                            2k
                        </Typography>
                        <Typography variant='h4' align="center" sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                            Follower
                        </Typography>
                    </Box>
                </FlexBetween>

                <FlexEvenly style={{marginTop:"35px",flexWrap:'wrap'}}>
                <ActiveBtn variant='contained' >Following</ActiveBtn>
                    <ProfileBtn  ><img src={messageIcon} alt="" /></ProfileBtn>
                    <ProfileBtn><PhoneEnabledIcon sx={{ color: "#ff0000" }}></PhoneEnabledIcon></ProfileBtn>
                    <ProfileBtn>
                    <MoreVertIcon sx={{ color: "#ff0000" }}/>
                    </ProfileBtn>
                 
                </FlexEvenly>

                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "full", marginY: "5px", cursor: "pointer" }}>
                    <Typography variant='h5' color="rgba(4, 4, 21, 0.5)" align="center">
                        View Profile
                    </Typography>
                 
                </Grid>
            </Stack>
            </Box>
        </Card>
    );
};

export default UserProfile;