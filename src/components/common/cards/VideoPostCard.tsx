import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, DialogContent, Divider, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import {  FlexBetween } from '../../styled/Styled.common';
import { Box } from '@mui/system';
import ReactPlayer from 'react-player/lazy'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import {  Dialog  } from '@material-ui/core';
import {  useState } from 'react';

import ShareModal from '../../ShareModal/ShareModal';
const VideoPostCard = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  
    return (
    <>
      <Card >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={ <Typography variant='h3'>Shrimp and Chorizo Paella</Typography> }
          subheader={<Typography variant='h5'>September 14, 2016</Typography> } />

        <CardContent>
          <Typography variant="h4" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like. <Typography to='/' color="primary.main" variant='body2' component={Link}>see more</Typography>
          </Typography>
        </CardContent>
        <CardMedia>
          <ReactPlayer
            className='react-player'
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm'
          width='100%'
            // height='100%'
            controls
          />
        </CardMedia>
          
          <Box>
                <FlexBetween sx={{mx:2,my:1}}>
                          <Typography variant='h5'>12 likes</Typography>
                          <Typography variant='h5'>view All 2 comments</Typography>
                </FlexBetween>
          </Box>
          <Divider />


            <FlexBetween sx={{mx:8,my:1}}>

          <IconButton aria-label="like">
            <ThumbUpIcon />
            <Typography  sx={{
              marginLeft:1
            }} variant='h5'>like</Typography>
          </IconButton>


          <IconButton aria-label="comment">
            <InsertCommentIcon />
            <Typography sx={{
              marginLeft:1
            }}  variant='h5'>Comment</Typography>
          </IconButton>

            <IconButton onClick={handleClickOpen} aria-label="share">
            <ShareIcon />
            <Typography sx={{
              marginLeft:1
            }}  variant='h5'>Share</Typography>
          </IconButton>

        </FlexBetween>  

      </Card>
     
     
        <Dialog  open={open}  onClose={handleClose}>

          <ShareModal></ShareModal>
          
        </Dialog>
    
    </>
    );
};

export default VideoPostCard;