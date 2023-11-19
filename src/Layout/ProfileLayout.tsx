import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfileAside from '../components/Shared/Sidebars/ProfileAside';
import { Container } from '@mui/material';
import ProfileCard from "../pages/ProfilePage/ProfileCard";

const ProfileLayout = () => {
    return (
        <Box sx={{width:"100%"}}>

            <Navbar></Navbar>
    
            
                   
                   <Container maxWidth="xl">
                <Box sx={{ width: '100%', mx: 'auto' }}>
                    <img
                        style={{ width: '100%', height: '450px' }}
                        alt='cover'
                        src='https://i.ibb.co/Kjn65SX/cover.png'
                    />
                    <ProfileCard />
                </Box>

                   <Grid container spacing={2}>  
                        <Grid item xs={4} md={4} >
                        {/* profilePage aside */}
                      

                        <ProfileAside></ProfileAside>
                       
                        </Grid>

                        <Grid item xs={8} md={8}  >
                            <Outlet></Outlet>
                        </Grid>
                    </Grid>


                   </Container>
                
        </Box>
    );
};

export default ProfileLayout;