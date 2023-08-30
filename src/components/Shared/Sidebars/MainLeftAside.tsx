
import { Stack } from '@mui/system';
import {  Divider} from '@mui/material';
import SideMenu from '../../common/SideMenu';



const MainLeftAside = () => {
    return (
       <Stack spacing={3}>
            <SideMenu/>
            <Divider sx={{width:"90%"}}></Divider>
        </Stack>
    );
};

export default MainLeftAside;