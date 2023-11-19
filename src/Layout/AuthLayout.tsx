
import { Outlet } from "react-router-dom";
import { Container, } from "@mui/material";

const AuthLayout = () => {

    return (
        <div >
            <Container maxWidth='xl'>
                    <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default AuthLayout;