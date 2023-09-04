import { Box } from '@mui/material';
import { StoryGridContainer } from '../../../components/styled/Styled.common';


import PostStory from './PostStory';
import Story from './Story';

const Stories = () => {
    const storyArr = [...Array(4)]
    return (
        <Box>
            <StoryGridContainer>
        <PostStory/>
        
        {
            storyArr.map((story,index) => <Story key={index}/>)
        }

            </StoryGridContainer>

        </Box>
    );
};

export default Stories;