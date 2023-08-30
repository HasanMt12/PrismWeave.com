

import { Grid, Typography, Container, Badge, Box,IconButton, InputBase } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link, NavLink } from 'react-router-dom';
import { FlexBetween, FlexEvenly, } from '../../styled/Styled.common';
import SearchIcon from '@mui/icons-material/Search';
import { MenuIcons, NavBar} from '../../styled/Styled.navbar';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useMediaQuery } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
const Navbar = () => {
  const matches = useMediaQuery('(min-width:886px)');

  const navLinks = [
    { path: '/', element: 'home', icon: <HomeIcon/> },
    { path: '/club', element: 'club', icon: <GroupsIcon ></GroupsIcon> },
    { path: '/watch', element: 'watch', icon: <OndemandVideoIcon></OndemandVideoIcon> },
   { path: '/message', element: 'message', icon: <MailOutlineIcon></MailOutlineIcon> },
    { path: '/follow', element: 'Follow', icon: <PersonAddAltIcon></PersonAddAltIcon> },
  ]

  
  return (

    <div style={{position:'sticky',top:0,zIndex:90}}>


      <NavBar >
        <Container maxWidth='xl'>

          <Grid container spacing={2}>

            {/* logo section */}

            <Grid item sx={{
              alignItems:'center',
              display:'flex'
            }} xs={2.5}>
              {matches? (<Typography variant='h1' color='text.primary' >PrismWeave</Typography>)
              :(<Typography variant='h2' color='text.primary' >PrismWeave </Typography>)}
              

            </Grid>

            {/* icon section */}
            <Grid item xs={9.5}>
              <FlexBetween>
                <Grid item xs={6}>
                  <Box sx={{display:"flex",justifyContent:"space-evenly"}}>

                    {
                      navLinks.map(({ path, element, icon }, index) =>
                     
                        <NavLink key={index} 
                        // style={(isActive) => isActive ? { textDecoration: 'none', color: 'rgba(4, 4, 21, 0.5)'} : { textDecoration: 'none',  color: '#FF0000' }}
                          style={{
                            textDecoration: 'none', color: 'rgba(4, 4, 21, 0.5)',   }}  
                             to={path} >
                         
                          <MenuIcons sx={{
                            "&:hover": {
                             
                                color: '#96C2DB',},}}  key={index}>
                           
                       
                            <IconButton sx={{ marginBottom:"-10px",
                              "&:hover": {
                               
                                color: '#96C2DB'
                              },}} >
                                {icon}</IconButton> 
                            
                            <Typography variant='caption' component='h5' textTransform='capitalize'>{element}</Typography>
                          </MenuIcons>
                        </NavLink>
                    
                      )
                    } 
                    {/* {className = {({ isActive })=> isActive ? 'text-capitalize d-none d-md-block text-primary font-bold':'text-capitalize d-none d-md-block'}} */}

                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <FlexEvenly>


                    <Box component="form" 
                 sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "50%",height:"40px", borderRadius:"39px" ,background:"#FFFFFF", }}>
            
                  <IconButton sx={{ p: '10px' }} aria-label="menu">
                      <SearchIcon />
                  </IconButton>
            
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Box>


                    <Link to="/profile">
                      <Badge badgeContent={4} color="primary">
                        <NotificationsIcon fontSize='medium' color="action" />
                      </Badge>
                    </Link>

                    <Link to="/profile">

                    <IconButton> <TuneIcon fontSize='large'></TuneIcon></IconButton>

                    </Link>
                    <Link to="/profile">
                      <Avatar
                        style={{ cursor: "pointer" }}

                        alt="Cindy Baker" src="https://i.ibb.co/PZnCgSM/Ellipse-1.png" >
                      </Avatar>
                    </Link>



                  </FlexEvenly>


                </Grid>


              </FlexBetween>
            </Grid>

          </Grid>


        </Container>

      </NavBar>
    </div>
  );

};

export default Navbar;