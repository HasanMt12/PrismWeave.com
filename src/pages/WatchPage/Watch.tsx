import {   WatchActionStyle, FlexStart } from "../../components/styled/Styled.common";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from "@mui/material";

const Watch = () => {
    return (

            <Box sx={{position:"relative"}}>
              
                <img style={{height:'260px',width:"90%",borderRadius:"10px" }} src="https://i.ibb.co/J74cd8q/Rectangle-140.png" alt=''></img>

                <WatchActionStyle>
                   <FlexStart >
                     <VisibilityIcon></VisibilityIcon>
                    <h2 style={{color: "rgba(4, 4, 21, 0.5)", fontSize:"14px"}}> 550</h2>
                    </FlexStart>
                </WatchActionStyle>
            </Box>
            
    );
};

export default Watch;