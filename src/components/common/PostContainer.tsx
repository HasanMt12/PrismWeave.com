import Card from '@mui/material/Card';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {TextField,Button, Grid, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import { BiVideo } from 'react-icons/bi';

// import videoIcon from '../../../assets/icons/video.svg';
// import photoIcon from '../../../assets/icons/photo.svg';
// import emojiIcon from '../../../assets/icons/emoji.svg';
import { FlexBetween } from '../styled/Styled.common';
const PostContainer = () => {
    return (
        <Card sx={{p: 2}} >
        <Box >
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
            <Avatar style={{ cursor: "pointer", height: "50px", width: "50px", marginRight: "10px" }}
              alt="Cindy Baker" src="https://i.ibb.co/PZnCgSM/Ellipse-1.png" >
            </Avatar>
            <Typography variant='h5' align="center" color=" rgba(4, 4, 21, 0.5)">
              What’s on your mind, Alan?
            </Typography>
          </Grid>

          <Grid  >
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-flexible"
              multiline
              maxRows={4}
              variant="standard"
            />

          </Grid>
        </Box>


        <FlexBetween >
          <Stack flexDirection={'row'}>
            <BiVideo></BiVideo>
            {/* <img src={photoIcon} alt="" />
            <img style={{ marginLeft: "10px", }} src={emojiIcon} alt="" /> */}

          </Stack>
          <Button variant='contained' >Post</Button>
        </FlexBetween>
      </Card>
    );
};

export default PostContainer;