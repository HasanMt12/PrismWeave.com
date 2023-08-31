import { Grid } from "@mui/material";
import { ProfilePageBtn } from "../../components/styled/Styled.common";


const SecondaryProfileNav = () => {
    return (
        <div>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" 
                sx={{width:"full", height:"3.2rem",background:"#FFFFFF",  boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.25)",paddingLeft:"20px", marginBottom:"20px"}}>
                <ProfilePageBtn variant='contained'  >Post</ProfilePageBtn>
                <ProfilePageBtn variant='contained'  >Photo</ProfilePageBtn>
                <ProfilePageBtn variant='contained'  >Video</ProfilePageBtn>
                <ProfilePageBtn variant='contained'  >Shop</ProfilePageBtn>
                <ProfilePageBtn variant='contained'  >Short</ProfilePageBtn>
            </Grid>  
        </div>
    );
};

export default SecondaryProfileNav;