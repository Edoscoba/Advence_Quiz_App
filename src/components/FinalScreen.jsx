import React from 'react';
import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";


const FinalScreen = () => {
  const { score } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const backToSetting = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/")

  }
  return (
    <Box mt={3}>
      <Typography variant="h3" fontWeight="bold" mb={3}>Final score {score}</Typography>
      <Button onClick={backToSetting} variant="outlined">back to settings!</Button>

    </Box>
  )
}

export default FinalScreen