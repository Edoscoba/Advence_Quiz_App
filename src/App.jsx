 import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Settings from './components/Settings'
import Questions from './components/Questions'
import FinalScreen from './components/FinalScreen'
import { Box, Container, Typography } from '@mui/material'
 

 const App = () => {
   return (
     <Router>
       <Container maxWidth="sm">
         <Box textAlign="center" mt={5}>
              
               
       <Routes>
             <Route path='/' element={<Settings />}>
               </Route >
         <Route path='/questions' element={<Questions />} />
         <Route path='/score' element={<FinalScreen />} />
       </Routes>
         </Box>
       </Container>
     </Router>
        )
 }

 export default App