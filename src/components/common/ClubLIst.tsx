import {  Box, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { FlexBetween } from "../styled/Styled.common";
import ClubImg from '../../assets/images/club.png'


const ClubLIst = () => {

    const clubs = [
        {path:'/',element:'Bangladesh fans club'},
        {path:'/',element:'Rock the gamer'},
        {path:'/',element:'8 ball pool'},
        {path:'/',element:'Contributions in games'},
        {path:'/',element:'When will we be prioritizing'},
    ]
    return (
        <Stack spacing={2} sx={{marginTop:2}}>

           <Box sx={{marginRight:3}}><FlexBetween>
            <Typography   variant="h3">Your Clubs</Typography>
            <Typography variant='h4' color='primary.main' sx={{textDecoration:'none',fontWeight:'400'}} >Edit</Typography>

            </FlexBetween></Box> 

            {/* call all menus */}

{
    clubs.map(({path,element},index) => <Stack key={index} to={path} sx={{textDecoration:'none',alignItems:'center'}} component={Link} direction='row'>
    <img style={{height:'42px',width:'42px',borderRadius:'5px'}} src={ClubImg} alt="" />
    <Typography   variant="h4" 
    sx={{ml:2, color:"rgba(4, 4, 21, 0.6)"}}
    >{element}</Typography>
   </Stack> 
   
   )
}

{/* button for see more */}

<Typography variant='h4' color='primary.main' sx={{textDecoration:'none',fontWeight:'400'}} >See more</Typography>
           
          
        </Stack>
    );
};

export default ClubLIst;