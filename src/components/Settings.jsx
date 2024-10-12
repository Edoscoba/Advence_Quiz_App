import { Box, Button, CircularProgress, Typography } from "@mui/material"
import SelectField from "./SelectField"
import TextFild from "./TextFild"
import useAxios from "../Hooks/useAxios"
import { useNavigate } from "react-router-dom"



const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" })
  const navigate = useNavigate();
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress/>
    </Box>
  )
}

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        something went wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    {id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ]

  const typeOptions = [
    {id: "multiple", name: "Multiple Choice"},
    { id: "boolean", name: "True/false" },
    
  ]

  const hanndleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  }

  return (
    <>
      
    <Typography variant='h2' fontWeight="bold">Quiz App</Typography>
      <form onSubmit={hanndleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />
        <TextFild/>
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">Get Started</Button>
        </Box>

      
      </form>
  
    </>
  )
}

export default Settings