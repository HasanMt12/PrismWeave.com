import styled from "@emotion/styled"
import { Theme } from "@material-ui/core";

import { Box,Button, } from "@mui/material"

interface Props {
    theme: Theme;
  }

export  const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent:'space-between',
    alignItems: 'center'
})


export const IconWrapper = styled('div')(({ theme }) => ({
    "&:hover": {
        fill: "#96C2DB"
    },
}));

export const ActiveBtn = styled(Button)({
    backgroundColor: "#96C2DB",
    color: "#FFFFFF",
    width: "100px",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "17px",
})



// story absolute

export  const StoryHeardingStyle = styled(Box)({
position:'absolute',
bottom: '4px',
right:'-4px',

width: '100%',

paddingLeft:'5px',
       
        alignItems: 'center',
        justifyContent: 'center'
})

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