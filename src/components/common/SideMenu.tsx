import {  Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
const SideMenu = () => {

    const menus = [
        { path: '/', element: 'Latest News', icon: <FeedIcon  sx={{ color: "#96C2DB" }}></FeedIcon>},
        {path:'/follow',element:'Followers',icon: <GroupIcon  sx={{color:"#96C2DB"}}></GroupIcon>},
        { path: '/', element: 'Live Video', icon: <VideocamIcon  sx={{ color: "#96C2DB" }}></VideocamIcon>},
        {path:'/club',element:'Club',icon: <GroupsIcon  sx={{color:"#96C2DB"}}></GroupsIcon>},
        { path: '/watch', element: 'Watch', icon: <OndemandVideoIcon  sx={{color:"#96C2DB"}}></OndemandVideoIcon>},
    ]


    return (
        <Stack spacing={0} sx={{marginTop:2}}>

            {/* call all menus */}

{
    menus.map(({path,element,icon},index) =>
     <Stack  key={index} to={path} sx={{textDecoration:'none', }} component={Link} direction='row'>

        <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center" }}>
            <IconButton >{icon}</IconButton> 
            <Typography   variant="h3" sx={{ml:2}}>{element} </Typography>
        </Box>

   </Stack> 
   
   )
}

{/* button for see more */}

<Typography variant='h4' color='primary.main' sx={{textDecoration:'none',fontWeight:'400'}} >See more</Typography>
           
          
        </Stack>
    );
};

export default SideMenu;