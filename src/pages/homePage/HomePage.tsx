import Stack from '@mui/material/Stack';
import PostContainer from '../../components/common/PostContainer';
import PostCard from '../../components/common/PostCard';
import { Box } from '@mui/material';
import Stories from './Stories/Stories';
const HomePage = () => {
    const arr = [...Array(30)]
    return (
        <Stack spacing={3}>
            <Box sx={{
                paddingX:" 5rem"
            }}>
                <Stories></Stories>
                 <PostContainer/>
           {  arr.map((i,index) => <PostCard key={index}/>)}
            </Box>
        </Stack>
    );
};

export default HomePage;