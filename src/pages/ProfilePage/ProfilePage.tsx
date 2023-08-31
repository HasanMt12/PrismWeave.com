


import Stack from '@mui/material/Stack';

import SecondaryProfileNav from './SecondaryProfileNav';
import PostCard from '../../components/common/PostCard';
import PostContainer from '../../components/common/PostContainer';

const ProfilePage = () => {

  return (
    <Stack spacing={3} >
      <SecondaryProfileNav />

      <PostContainer/>

      <Stack spacing={3}>
        <PostCard />
        <PostCard />
        <PostCard />
      </Stack>
    </Stack>
  );
};

export default ProfilePage;



