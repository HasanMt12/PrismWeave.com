import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ClubImg from '../../assets/images/club.png'
import { FlexBetween } from '../styled/Styled.common';

const SuggestedSingleFollowUser = () => {
    return (
        <Stack to={`path`} sx={{ textDecoration: 'none', alignItems: 'center' }} component={Link} direction='row'>
        <img style={{ height: '48px', width: '48px', borderRadius: '50%' }} src={ClubImg} alt="" />
        <FlexBetween sx={{flexGrow:1,flexWrap:'wrap'}}>
            <Box>
                <Typography variant="h3"
                    sx={{ ml: 2 }}
                >Alax moral</Typography>
                <Typography
                    sx={{ ml: 2, fontFamily: 'lato', fontWeight: '500', color: 'rgba(4, 4, 21, 0.5)', fontSize: '14px' }}
                >2 mutual followers</Typography>
            </Box>
            <Box >
<Button variant='contained' sx={{borderRadius:"24px",padding:'5px 25px', margin:'8px 0 8px 16px'}}>Follow</Button>
</Box>

        </FlexBetween>

    </Stack>
    );
};

export default SuggestedSingleFollowUser;