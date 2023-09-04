import { Grid, IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{width:"full",paddingY:"5px"}}>
        
        <Box component="form"
         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "70%",height:"40%", borderRadius:"50px" ,backgroundColor:"#FFFFFF" }}>
            
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
            
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Person"
                inputProps={{ 'aria-label': 'search Person' }}
            />
        </Box>
     </Grid>
    );
};

export default SearchBar;