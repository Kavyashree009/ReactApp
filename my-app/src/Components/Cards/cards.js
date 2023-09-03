import * as React from "react";
import "./cards.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent className="wrapper">
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold", backgroundColor: "#bbdefb" }}
        color="text.secondary"
        gutterBottom
      >
        Confirmed
      </Typography>
      <label for="Original">Original:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
      <br></br>
      <label for="Original">Total Confirmed:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
  </React.Fragment>
);

const card1 = (
  <React.Fragment>
    <CardContent className="wrapper">
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold", backgroundColor: "#bbdefb" }}
        color="text.secondary"
        gutterBottom
      >
        Confirmed
      </Typography>
      <label for="Original">Original:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
      <br></br>
      <label for="Original">Total Confirmed:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent className="wrapper">
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold", backgroundColor: "#bbdefb" }}
        color="text.secondary"
        gutterBottom
      >
        Confirmed
      </Typography>
      <label for="Original">Original:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
      <br></br>
      <label for="Original">Total Confirmed:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent className="wrapper">
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold", backgroundColor: "#bbdefb" }}
        color="text.secondary"
        gutterBottom
      >
        Confirmed
      </Typography>
      <label for="Original">Original:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
      <br></br>
      <label for="Original">Total Confirmed:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
  </React.Fragment>
);

const card4 = (
  <React.Fragment>
    <CardContent className="wrapper">
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold", backgroundColor: "#bbdefb" }}
        color="text.secondary"
        gutterBottom
      >
        Confirmed
      </Typography>
      <label for="Original">Original:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
      <br></br>
      <label for="Original">Total Confirmed:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
  </React.Fragment>
);

const card5 = (
  <React.Fragment>
    <CardContent className="wrapper">
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold", backgroundColor: "#bbdefb" }}
        color="text.secondary"
        gutterBottom
      >
        Confirmed
      </Typography>
      <label for="Original">Original:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
      <br></br>
      <label for="Original">Total Confirmed:</label>
      <input className="noline1" type="text" id="Original" value={"466466"} />
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
  </React.Fragment>
);

export default function Cards() {
  return (
    <>
      <div className="cardcomponent">
        <div>
          <Box sx={{ minWidth: 450, minHeight: 200, margin: "2px" }}>
            <Card variant="outlined">{card}</Card>
          </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 450, minHeight: 200, margin: "2px" }}>
            <Card variant="outlined">{card1}</Card>
          </Box>
        </div>
        <Box sx={{ minWidth: 450, minHeight: 200, margin: "2px" }}>
          <Card variant="outlined">{card2}</Card>
        </Box>
      </div>
      <div className="cardcomponent">
        <div>
          <Box sx={{ minWidth: 450, minHeight: 200, margin: "2px" }}>
            <Card variant="outlined">{card3}</Card>
          </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 450, minHeight: 200, margin: "2px" }}>
            <Card variant="outlined">{card4}</Card>
          </Box>
        </div>
        <Box sx={{ minWidth: 450, minHeight: 200, margin: "2px" }}>
          <Card variant="outlined">{card5}</Card>
        </Box>
      </div>
    </>
  );
}
