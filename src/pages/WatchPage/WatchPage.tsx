import { Box, Typography } from '@mui/material';
import { FlexBetween} from '../../components/styled/Styled.common';
import Watch from './Watch';
// import { SetStateAction, useState } from 'react'
// import WatchVideoSection from './WatchVideoSection';
// import WatchPostSection from './WatchPostSection';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MovieIcon from '@mui/icons-material/Movie';
import { Stack } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Import Swiper styles
import 'swiper/css';

const WatchPage = () => {
    // const [value, setValue] = useState("video");

    // const handleChange = (index: SetStateAction<string>) => {
    //     setValue(index);
    //     console.log(index)
    // };

    const items = [...Array(16)];

    return (
        <Stack sx={{ mt: 2  } } spacing={3} >
            <Box sx={{ backgroundColor: "#ffffff", borderRadius: "5px", mt: 2, padding: "15px", width: "100%"}}>
                <FlexBetween>
                    <Typography variant='h4' align="center" sx={{ color: "rgba(4, 4, 21, 0.8)", }}>
                        Most Popular Short Videos
                    </Typography>
                    <Typography variant='h5' align="center" sx={{ color: "#ff0000" }}>
                        See All
                    </Typography>
                </FlexBetween>

                <Swiper 
                    spaceBetween={5}
                    slidesPerView={4}
                   

                    breakpoints={{
                        850: {
                            slidesPerView: 5,
                        },
                    }} >

                    {
                        items.map((story, index) =>
                         <SwiperSlide key={story} style={{  }}><Typography variant='h3'>hs</Typography></SwiperSlide>)
                    }

                    <div style={{ width: "43px", height: "43px", backgroundColor: "#ff0000", borderRadius: "50px", display: "grid", placeItems: "center", position: "absolute", zIndex: 10, top: "42%", right: 0 }} className='button-next'>
                        <KeyboardArrowRightIcon fontSize='large' style={{ cursor: "pointer", color: "#FFFFFF" }} ></KeyboardArrowRightIcon>
                    </div>
                   


                </Swiper>
            </Box>

            <Box sx={{ marginTop: "20px" }}>
                <Box sx={{ backgroundColor: "rgba(4, 4, 21, 0.1)", borderRadius: "5px 5px 0px 0px", width: "full" }}>

                    <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 10, alignItems: "center", padding: "10px" }}>

                        {/* <img   src={watchVideoIcon} alt=''></img> */}
                        {/* <span onClick={()=>handleChange("short")}> 
                        <OndemandVideoIcon  fontSize='large' sx={{cursor:"pointer" ,'&.active': {
                            color: value ? 'red' : 'lightblue',
                            },}}  className={value ? 'active' : ''} />
                        </span>  */}
                        
                       {/* <span onClick={()=>handleChange("video")} > <MovieIcon fontSize='large' 
                         sx={{cursor:"pointer"}}    /></span> */}

                         
                        {/* <img  src={watchPostIcon} alt=''></img> */}
                        
                 

                      
                   </Box>
                   
                   
                </Box>


            </Box>
            {/* {value === "short" && (<WatchVideoSection></WatchVideoSection>)}
            {value === "video" && (<WatchPostSection></WatchPostSection>)} */}
        </Stack>
        // up to  dated code
    );
};

export default WatchPage;