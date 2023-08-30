

import Navbar from "../components/Shared/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import { Container, } from "@mui/material";
import MainLeftAside from "../components/Shared/Sidebars/MainLeftAside";
import MainRightAside from "../components/Shared/Sidebars/MainRightAside";

import { MainResStyle, StickySidebar } from "../components/styled/Styled.common";


const MainLayout = ({ theme}:any) => {

  return (
    <div >

      <Navbar />
      <Container maxWidth='xl'>


        <MainResStyle theme={theme}>
          <StickySidebar >
            <MainLeftAside />
          </StickySidebar  >
          <Outlet></Outlet>

          <StickySidebar>

            <MainRightAside />
          </StickySidebar>

        </MainResStyle>

      </Container>


    </div>
  );
};

export default MainLayout;