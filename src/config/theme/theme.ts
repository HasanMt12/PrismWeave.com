import {   createTheme,} from "@mui/material";


 const theme = createTheme({
    palette:{
        mode: 'light',
        primary:{
            main: '#96C2DB',
        },
        secondary:{
            main:'#FFFFFF;',
            dark:'#1E1E1E',
            light:'#FFFFFF'
        },
       text:{
        primary:'#96C2DB',
        secondary:'rgba(4, 4, 21, 0.6)'
       }
        

    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg:  991,
        xl: 1536,
      },
    },
 

    

    // for typography styles
    typography:{
        fontFamily: [
            "Ubuntu", "sans-serif"].join(","),
          fontSize: 12,
        
        
          h1: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 28,
            fontWeight: "bold"
            
          },
          h2: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 20,
            fontWeight: "bold"
          },
          h3: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 16,
            fontWeight: "bold",
            color: "#96C2DB"
          },
          h4: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: "bold"
          },
          h5: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: '700',
            color:'rgba(4, 4, 21, 0.5)'
          },
          h6: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 10,
            fontWeight: '700'
            
          },
          body1: {
            fontFamily: ["lato", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: '400'
          },
   
    },
    // for others components
    components:{
      MuiContainer: {
        defaultProps: {
           maxWidth: 'xl',
        },
     },
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius:'5px',
                    fontWeight:'700',
                    textTransform:'capitalize',
                    
                }
            },
            defaultProps:{
                variant:'contained'
            },
        },
        MuiStack:{
          defaultProps:{
            marginTop: '10px',
          }
        },
        // personal typography
        MuiTypography:{
           defaultProps:{
            fontFamily:"Ubuntu",
            color:'text.secondary'
           }
        }
    }
})

export default theme