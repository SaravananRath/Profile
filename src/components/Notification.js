import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});
const Notification = props => {
  const {
    classes: { close },
    handleClose,
    open
  } = props;
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">User created</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

export default withStyles(styles)(Notification);
