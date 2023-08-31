import { Stack } from "@mui/system";
import Footer from '../Footer/Footer';
import ProfileCard from "../../../pages/ProfilePage/ProfileCard";

const ProfileAside = () => {
    return (

         <Stack spacing={3} >
            <ProfileCard></ProfileCard>
            <Footer></Footer>
        </Stack>
       
    );
};

export default ProfileAside;