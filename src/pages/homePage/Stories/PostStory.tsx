
import { FlexBetween, StoryCardStyle, StoryHeardingStyle } from '../../../components/styled/Styled.common';
import { Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const PostStory = () => {
    return (
        <StoryCardStyle>
           <img src="https://i.ibb.co/gg4hDMQ/story.jpg" alt="" />
           <StoryHeardingStyle>
            <FlexBetween >
                <Typography variant='h4' color='#fff'>Post Story</Typography>
                <AddRoundedIcon style={{ fill: '#fff',backgroundColor:'#ff0000',borderRadius:'50%',height:'42px',width:'42px',border:'3px solid #fff' }}/>
            </FlexBetween>
           </StoryHeardingStyle>
        </StoryCardStyle>
    );
};

export default PostStory;

