

import Stack from '@mui/material/Stack';
import VideoPostCard from '../../components/common/cards/VideoPostCard';

const WatchPostSection = () => {
    return (
       <Stack spacing={3}>
        <VideoPostCard></VideoPostCard>
        <VideoPostCard></VideoPostCard>
        <VideoPostCard></VideoPostCard>
      </Stack>
    );
};

export default WatchPostSection;