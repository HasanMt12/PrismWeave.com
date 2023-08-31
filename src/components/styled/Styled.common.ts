import styled from "@emotion/styled"
import { Theme } from "@material-ui/core";

import { Box, Button, IconButton } from "@mui/material"

interface Props {
    theme: Theme;
  }



export const FlexCenter = styled(Box)({
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    gap:6,
})

export const StickySidebar = styled(Box)({
    position: 'sticky',
    top: '70px',
    
    maxHeight:'calc(100vh - 70px)',
    overflow:'scroll',
   
    '&::-webkit-scrollbar': {
      display: 'none',
    },
})


export const MainResStyle = styled(Box)<Props>(({theme})=>({

   display: 'grid',
   gridTemplateColumns:'240px 1fr 320px',
   gap:'10px',
   [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr 320px',
    '& > div:first-of-type':{
        display:'none',
    }
  },

}))

export const FlexEvenly = styled(Box)({
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',

})

export  const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent:'space-between',
    alignItems: 'center'
})

export const SeconderyBtn = styled(Button)({
    backgroundColor: "rgba(4, 4, 21, 0.2)",
    color: "rgba(4, 4, 21, 0.6)",
  
    margin: 5,
    "&:hover": {
        backgroundColor: "#FF0000",
        color: "#FFFFFF"
    },
    ' & @media(maxWidth: 768px)': {
        backgroundColor: "rgba(255, 0, 0, 1)",
    }
})

export const PrimaryBtn = styled(SeconderyBtn)({
    backgroundColor: "#FF0000",
        color: "#FFFFFF",
        "&:hover": {
            backgroundColor: "rgba(4, 4, 21, 0.2)",
            color: "rgba(4, 4, 21, 0.6)",
        },
})


export const ProfilePageBtn = styled(Button)({
    backgroundColor: "rgba(4, 4, 21, 0.2)",
    color: "rgba(4, 4, 21, 0.6)",
    width:"4rem",
    height:"2rem",
    margin: 4,
    "&:hover": {
        backgroundColor: "#E5EDF1",
        color: "#96C2DB"
    },
})

export const PostBtn = styled(Button)({
    backgroundColor: "#FF0000",
    color: "#FFFFFF",
    width: "126px",
    height: "50px",
    margin: 6,
    "&:hover": {
        backgroundColor: "rgba(4, 4, 21, 0.2)",
        color: "rgba(4, 4, 21, 0.6)",
    },
})



export const IconWrapper = styled('div')(({ theme }) => ({
    "&:hover": {
     fill: "#ff0000"
    },
}));

export const ActiveBtn = styled(Button)({
    backgroundColor: "#FF0000",
    color: "#FFFFFF",
    width: "100px",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "17px",
})

export const ProfileBtn = styled(IconButton)({
    backgroundColor: "rgba(4, 4, 21, 0.2)",
    color: "rgba(4, 4, 21, 0.6)",
    height: "26px",
    borderRadius: "5px",
    margin:4,
    // "&:hover": {
    // backgroundColor: "rgba(4, 4, 21, 0.2)",
    // },
})
