import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  return {
    wrapper: {
      border: `1px solid ${ctx.palette.primary.main}`,
      padding: "15px",
      minHeight: "100vh",
      flexGrow: "1",
      // position: "relative",
    },
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
      // position: "absolute",
    },
    icon: {
      color: "#2b5278",
      cursor: "pointer",
    },
  };
});
