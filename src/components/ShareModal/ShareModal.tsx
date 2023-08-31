import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import {  IconButton } from '@mui/material';

const ShareModal = () => {

    const [value, setValue] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');
    const [copyText, setCopyText] = useState('http://localhost:0000/samle');
    // your function to copy here

    const copyToClipBoard = async (async: string) => {
        try {
            await navigator.clipboard.writeText(copyText);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };
    return (
          
        <Box sx={{backgroundColor:"#FFFFFF", padding:"20px"}}>

            <h2 style={{marginLeft:"10px", color:'black', fontSize:"16px"}}>Share</h2>
            <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center" , padding:"10px", marginBottom:"20px", gap:2}}>
                <IconButton  >
                   <a aria-label="Chat on WhatsApp" href="https://wa.me/" target='_blank'> <WhatsAppIcon fontSize='large' style={{ color: "#25D366" }}></WhatsAppIcon> </a>
                </IconButton>
                <IconButton  >
                    <TelegramIcon fontSize='large' style={{ color: "#34B7F1" }}></TelegramIcon>
                </IconButton>
                <IconButton  >
                    <a aria-label="Chat on WhatsApp" href="https://www.facebook.com/messages/" target='_blank'> <FacebookIcon fontSize='large' style={{ color: "#4267B2" }}></FacebookIcon></a>
                </IconButton>
            </Box>
  
            <Box sx={{padding:"5px" , backgroundColor:"#EEEEEE", borderRadius:"10px"}}>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"20px",paddingX:"20px"}}>
                    <h4 style={{ color:"black" , fontSize:"16px"}}>http://localhost:0000/samle</h4>

                    <Box onClick={() => setValue(true)}> 

                    {value === true ?
                
                        <Tooltip title="Copied">
                            <IconButton >
                            <DoneIcon  sx={{
                            color: "#03c04a", "&:hover": {
                            color: "#03c04a"
                            },
                            }} ></DoneIcon> 
                            </IconButton>
                        </Tooltip>
                    
                        :
                        
                        <Tooltip title="Copy">
                            <IconButton onClick={() => copyToClipBoard('some text to copy')}>
                            <FileCopyIcon></FileCopyIcon>
                            </IconButton>
                        </Tooltip>
                    
                    } 
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ShareModal;