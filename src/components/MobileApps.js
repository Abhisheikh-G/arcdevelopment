import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  useMediaQuery,
  Hidden,
  IconButton,
} from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

import integrationAnimation from "../animations/integrationAnimation/data.json";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: integrationAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const { setValue, setSelectedIndex } = props;
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/customsoftware"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                setSelectedIndex(1);
              }}
            >
              <img
                src={backArrow}
                alt="Back to Custom Software Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Lorem enim culpa veniam tempor id. Ad deserunt id minim ut commodo
              in ex anim et laborum qui non mollit. Commodo incididunt nisi
              pariatur pariatur nisi id nulla nostrud fugiat elit labore sunt
              anim velit. Consequat aliqua consectetur est in duis anim eu
              voluptate quis veniam veniam ut ut. Id do ad duis consequat
              excepteur ex exercitation incididunt.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Incididunt consequat irure anim reprehenderit fugiat ad anim
              veniam proident nostrud. Dolore anim pariatur dolor Lorem non
              ipsum aliqua veniam veniam dolore pariatur.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Id dolore enim ut excepteur cillum in consectetur aliqua. Nulla
              sit nisi quis occaecat consectetur proident dolor nisi sunt.
              Consequat amet minim cillum in pariatur occaecat. Reprehenderit
              officia dolore in velit.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/websites"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                setSelectedIndex(3);
              }}
            >
              <img
                src={forwardArrow}
                alt={"Forward to Website Development Page"}
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*--- Second Section ----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
              reiciendis vero nihil facilis blanditiis temporibus nisi ab minus
              harum itaque, aut magni quasi molestias fuga beatae omnis nesciunt
              officia voluptates!
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              veritatis corporis accusantium nemo tempore hic quod voluptatibus
              magnam delectus doloribus animi provident minus, debitis suscipit
              ipsum dicta culpa earum dolorum?
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              align="right"
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
              reiciendis vero nihil facilis blanditiis temporibus nisi ab minus
              harum itaque, aut magni quasi molestias fuga beatae omnis nesciunt
              officia voluptates!
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              veritatis corporis accusantium nemo tempore hic quod voluptatibus
              magnam delectus doloribus animi provident minus, debitis suscipit
              ipsum dicta culpa earum dolorum?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            marginTop: matchesMD ? "10em" : "0",
            marginBottom: matchesMD ? "10em" : "0",
          }}
          direction="column"
          alignItems="center"
          md
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="a tear-one-off sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
