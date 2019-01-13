import React from "react";
import MenuAppBar from "../components/MenuAppBar";
import ButtonAppBar from "../components/ButtonAppBar";
import ButtonAppBar2 from "../components/ButtonAppBar2";
import Typography from "@material-ui/core/Typography";
function Completed() {
  return (
    <div>
      <MenuAppBar />
      <br />
      <ButtonAppBar />
      <ButtonAppBar2 />
      <div
        style={{
          width: "100%",
          height: 460,
          backgroundColor: "#EEEEEE",
          marginTop: 48,
          borderBottom: "3px solid #D0D8DD"
        }}
      />
      <div style={{ width: "100%", height: 51, backgroundColor: "#0477BD" }}>
        <Typography align="right" color="textPrimary" variant="h6">
          TOTAL Rs. 12,500
          <span style={{ paddingLeft: 40, paddingRight: 40 }}>ORDERS 150</span>
        </Typography>
      </div>
    </div>
  );
}
export default Completed;
