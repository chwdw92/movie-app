import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Loading() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <span style={{ marginRight: "20px" }}>Loading...</span>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
