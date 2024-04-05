import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Box>
    <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="frontbot.png"
            alt="chatbot"
            style={{ width: "400px", margin: "auto" }}/>
            
  </Box>
  <Box>
    <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
              color="#00fffc"
              
            >
              PAGE NOT FOUND!
            </Typography>
  </Box>
  </Box>
  )
}

export default NotFound