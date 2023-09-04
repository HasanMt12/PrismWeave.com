import { FlexBetween, StoryCardStyle, StoryHeardingStyle } from '../../../components/styled/Styled.common';


import { Typography } from '@mui/material';


const Story = () => {
    return (
    
        <StoryCardStyle>
            <img src="https://i.ibb.co/gg4hDMQ/story.jpg" alt="" />
           <StoryHeardingStyle>
            <FlexBetween >
            
                <img src="https://i.ibb.co/gg4hDMQ/story.jpg" alt="" style={{borderRadius:'50%',height:'50px',width:'50px',border:'4px solid #1ED400', }} />
                   <Typography variant='h4' color='#fff'>Rose marlo </Typography>
            </FlexBetween>
           </StoryHeardingStyle>
        </StoryCardStyle>
      
    );
};

export default Story;
