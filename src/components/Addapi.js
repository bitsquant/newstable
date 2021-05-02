import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getDataFromApi } from "../actions/getDataFromApi";

export default function Addapi() {
  const [open, setOpen] = React.useState(true);
  const [apiInput, setApiInput] = React.useState("055e52521ee84bac9fd4f8c98321ef53");
  // const api_data = useSelector(state => {
  // console.log(state.reducers.simpleReducer.api_data)
  // });
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleProceed = () => {
    dispatch(getDataFromApi(apiInput));
  };

  const handleChange = (event) => {
    setApiInput(event.target.value);
  };
  // console.log(api_data)
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Api</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Add API Provided by newsapi.org
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="apikey"
            label="Api Key"
            type="text"
            defaultValue={apiInput}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProceed} color="primary">
            proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
