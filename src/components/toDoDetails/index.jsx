import { Dialog,DialogTitle,DialogActions,Button } from "@mui/material"
import { Fragment } from "react"
 function TodoDetails({todoDetails,openDialog,setopenDialog,settodoDetails})
{
    return (<Fragment>
    <Dialog open={openDialog} onClose={()=>setopenDialog(false)}>
        <DialogTitle>{todoDetails?.todo} </DialogTitle>
        <DialogActions>
            <Button onClick={()=>{
                settodoDetails(null);
                setopenDialog(false);
            }}>Close</Button>
        </DialogActions>
       
    </Dialog>
</Fragment>)
    
}
export default TodoDetails