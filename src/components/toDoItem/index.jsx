import { Card,CardContent,Typography,CardActions,Button,Dialog,DialogActions,DialogTitle } from "@mui/material"
import { Fragment } from "react"

function TodoItem({todo,todoId})
{
    console.log(todo)
    return <Card sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection:"column",
        justifyContent:"space-between"
    }}>
        <CardContent>
        <Typography variant="h5" color={"text.secondary"}>{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button sx={{
                backgroundColor:"black",
                color:"white",
                opacity:0.9,
                '&:hover':{
                    backgroundColor:"#F9F6EE",
                color:"black",
                opacity:0.9
                }
            }} onClick={()=>todoId(todo?.id)}> Details</Button>
        </CardActions>
        </Card>
       
}

export default TodoItem