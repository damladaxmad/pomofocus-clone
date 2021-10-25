import Modal from "../../Modal/Modal";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  noBorder: {
    border: "none",
    fontWeight: "bold",
  },
  reSize: {
    fontSize: "20px",
    fontWeight: "bold",
  },
});

const AddTask = (props) => {
  const classes = useStyles();
  return (
    <Modal onClose = {props.onCancel}>
      <div style={{}}>
        <div>
          <TextField
            style={{ width: "379px" }}
            InputProps={{
              classes: {
                notchedOutline: classes.noBorder,
                input: classes.reSize,
              },
            }}
            autoFocus={true}
            fullWidth
            placeholder="What are you working on?"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "#EFEFEF",
            borderRadius: "5px",
            margin: "0px 0px",
            padding: "15px",
          }}
        >
          <p
            style={{
              margin: "0px",
              marginRight: "20px",
              fontSize: "20px",
              cursor: "pointer",
              marginTop: "3px",
            }} onClick = {props.onCancel}
          >
            {" "}
            cancel{" "}
          </p>
          <Button style = {{backgroundColor: "#222222"}}
          onClick = {props.onSave} 
          variant="contained"> save </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTask;
