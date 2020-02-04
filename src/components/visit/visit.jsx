import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import visitImage from "../../assets/pexels-photo-325200.jpeg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  // image: {
  //   backgroundImage: `url(${visitImage})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundColor:
  //     theme.palette.type === "dark"
  //       ? theme.palette.grey[900]
  //       : theme.palette.grey[50],
  //   // backgroundSize: "cover",
  //   backgroundPosition: "center"
  // },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  //check
  media: {
    height: 0,
    paddingTop: "45.25%" // 16:9
  },
  card: {
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: "50px",
    left: "50px",
    color: "black",
    backgroundColor: "white"
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "white",
    fontSize: "50px"

    // transform: translate(-50% -50%),
    // -ms-transform: translate(-50%,-50%),
  }
}));

export default function Visit() {
  const classes = useStyles();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/adminSignIn">
          |ADMIN|
        </a>
        <div className="collapse  navbar-collapse ">
          <ul className="navbar-nav  ml-auto">
            <li className="navbar-item">
              <Link to="/signIn" className="nav-link">
                {/* <img src={signOutIcon} alt="signOutIcon" /> */}
                |USER|
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Card md={12} className={classes.card}>
        <CardMedia image={visitImage} className={classes.media} />
      </Card>
    </>
  );
}
