
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Box } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import theme from './config/theme/theme'

function App() {
  

  return (
   <ThemeProvider theme={theme} >
      <Box bgcolor='#FFFFFF' >
      <RouterProvider router={routes} />
      </Box>
    </ThemeProvider>
  )
}

export default App
