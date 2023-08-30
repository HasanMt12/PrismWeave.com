import styled from "@emotion/styled";
import {  AppBar } from "@mui/material";
import { Box } from "@mui/system";

export const NavBar = styled(AppBar)({
    backgroundColor: '#EEEEEE',
    padding:'5px 0',
    color:'black',
    position: 'sticky',
    boxShadow:'rgba(0, 0, 0, 0.25) 0px 1px 2px',
})

  export const MenuIcons = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& .css-1io0sw9-MuiTypography-root':{
        color:'rgba(4, 4, 21, 0.5);',
        fontSize:'14px',
        fontWeight:'500'
    }

  })


export const NavIcons = styled(Box)({
  textDecoration: "none", color: "#040415",
  // hover styles
  '&:hover': {
    
    color: '#ff0000',
    cursor: 'pointer',
    boxShadow: "2px 2px 5px rgba(255, 0, 0, 1)"
    }

  })
