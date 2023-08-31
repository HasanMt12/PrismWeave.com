import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, IconButton, useMediaQuery } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreateIcon from '@mui/icons-material/Create';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {  FlexBetween, FlexCenter, FlexEvenly } from '../../components/styled/Styled.common';

import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { toast } from 'react-hot-toast';
import ShareModal from '../../components/ShareModal/ShareModal';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            minWidth: 32,
            paddingLeft: 8,
            paddingRight: 8,
            "& .MuiButton-startIcon": {
                margin: 0
            }
        }
    },
    buttonText: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
            paddingLeft: 2,
            paddingRight: 2,
        }
    }
    
}));

const ProfileCard = () => {
    const matches = useMediaQuery('(min-width:1044px)');
    
    const bio = {
        color: "rgba(4, 4, 21, 0.6)", marginTop: "30px", cursor: "pointer",

        "&:hover": {
            borderBottom: "1px solid red"
        },
    };
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [value, setValue] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    const [copyText, setCopyText] = useState('http://localhost:0000/samle');
    // your function to copy here

    const copyToClipBoard = async (async: string) => {
        try {
            await navigator.clipboard.writeText(copyText);
            toast.success("Link copied")
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };
    return (
            <Box >
                <Box sx={{marginTop: "-30%",}}> 
                <img 
                        style={{ width:"65%", height: "65%",borderRadius:"100%",marginLeft:"17%",zIndex:"-1" }}
                        src="https://i.ibb.co/Stt0WJY/profile.png"title="profile name" alt='' /> 
            
                </Box>

                <Box sx={{ backgroundColor:"#FFFFFF", paddingTop:"35%", marginTop: "-37.5%",borderEndEndRadius:"5px",borderBottomLeftRadius:"5px",paddingBottom:"20px"}}>
                   {matches?( <Typography variant='h1' align="center" sx={{color: "rgba(4, 4, 21, 0.8)",}}>
                                Hasan Mahmud
                            </Typography>) : (<Typography variant='h3' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)", }}>
                                Hasan Mahmud
                            </Typography>)}
                {matches ? (<Typography variant='h2' align="center" sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                            
                            </Typography>) : (<Typography variant='h4' align="center" sx={{ color: "rgba(4, 4, 21, 0.6)" }}>
                                
                            </Typography>)}
                    
                    
                    <br></br>
                <FlexEvenly>
                 
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
                </FlexEvenly>

                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height:"20px", width:"full"}}>
                       {matches?(<Typography variant='h3'  align="center" width="70px"
                        sx={bio}>
                            ADD BIO
                    </Typography>) : (<Typography variant='h5' align="center" width="70px"
                        sx={bio}>
                        ADD BIO
                    </Typography>)} 
                    </Grid>

                
                    <FlexEvenly style={{marginTop:"40px"}}>
                    {/* <Button variant='contained' startIcon={<ShoppingBagIcon />}>Add to shop</Button> */}
                    
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "rgba(4, 4, 21, 0.2)",color: "rgba(4, 4, 21, 0.6)",}}
                        className={classes.button}
                        startIcon={<CreateIcon />}
                    >
                        <span className={classes.buttonText}>Edit Profile</span>
                    </Button>
                    
                    <IconButton id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}><MoreVertIcon /></IconButton>
                   
                 
                </FlexEvenly>
                </Box>
        <Menu  
        // id="fade-menu"
         
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
        // TransitionComponent={Fade}
      >
        {/* <Box sx={{backgroundColor:"rgba(4, 4, 21, 0.7)", border:"1px solid red", height:"100%", marginY:"-8px", padding:"20px"}}>
        <MenuItem sx={{color:"white", fontSize:"16px"}} onClick={handleClose}>Profile</MenuItem>
       <Box onClick={() => setValue(true)}> <MenuItem  onClick={() => copyToClipBoard('some text to copy')} style={{  fontSize:"16px"}}>
                        {value === true ? <span style={{ color:"#2AAA8A" ,fontWeight:"semibold"}}>http://localhost:0000/samle</span>
                        :<span style={{color:"rgba(253, 0, 1, 0.9)" ,fontWeight:"semibold"}}>http://localhost:0000/samle</span>} 
            </MenuItem>
        </Box></Box>  */}
        <ShareModal></ShareModal>
      </Menu>
 
            
        </Box>
   
    );
};

export default ProfileCard;