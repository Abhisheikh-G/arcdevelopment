import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { setValue, setSelectedIndex } = props;

  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            component={Link}
            to="/services"
            style={{ backgroundColor: "transparent" }}
            onClick={() => {
              setSelectedIndex(0);
            }}
          >
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem enim culpa veniam tempor id. Ad deserunt id minim ut commodo
              in ex anim et laborum qui non mollit. Commodo incididunt nisi
              pariatur pariatur nisi id nulla nostrud fugiat elit labore sunt
              anim velit. Consequat aliqua consectetur est in duis anim eu
              voluptate quis veniam veniam ut ut. Id do ad duis consequat
              excepteur ex exercitation incididunt.
            </Typography>
            <Typography variant="body1" paragraph>
              Incididunt consequat irure anim reprehenderit fugiat ad anim
              veniam proident nostrud. Dolore anim pariatur dolor Lorem non
              ipsum aliqua veniam veniam dolore pariatur.
            </Typography>
            <Typography variant="body1" paragraph>
              Id dolore enim ut excepteur cillum in consectetur aliqua. Nulla
              sit nisi quis occaecat consectetur proident dolor nisi sunt.
              Consequat amet minim cillum in pariatur occaecat. Reprehenderit
              officia dolore in velit. Cupidatat magna cupidatat incididunt
              laborum deserunt elit eiusmod cupidatat anim nostrud in. Proident
              irure ad aute ex nulla.
            </Typography>
            <Typography variant="body1" paragraph>
              Reprehenderit ipsum irure minim fugiat laboris occaecat deserunt
              magna veniam adipisicing anim mollit proident. Incididunt
              consequat eu ex aute mollit. Anim do velit sunt irure.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            component={Link}
            to="/mobileapps"
            style={{ backgroundColor: "transparent" }}
            onClick={() => {
              setSelectedIndex(2);
            }}
          >
            <img
              src={forwardArrow}
              alt={"Forward to iOS/Android Development page"}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid
          item
          container
          md
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      {/*----Animation Container ----*/}
      <Grid item container direction="row" justify="space-around">
        {/*-----Documents Section-----*/}
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduce Waste. Reduce Errors. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Incididunt ex velit veniam eu commodo est qui Lorem irure
                tempor. Mollit laboris in aliquip consequat magna cillum. Sunt
                in ad adipisicing exercitation pariatur tempor tempor ad tempor
                sint et non.
              </Typography>
              <Typography variant="body1" paragraph>
                Nostrud anim quis eu id. Ut pariatur reprehenderit duis amet
                magna est. Eu amet velit duis cupidatat laborum excepteur
                exercitation veniam incididunt eu amet. Laborum cillum commodo
                quis reprehenderit adipisicing deserunt quis.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        {/*-----Scale Section-----*/}
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right">
                Incididunt ex velit veniam eu commodo est qui Lorem irure
                tempor. Mollit laboris in aliquip consequat magna cillum. Sunt
                in ad adipisicing exercitation pariatur tempor tempor ad tempor
                sint et non.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*----End Animation Section-----*/}
      {/*----Roots Section-----*/}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
              height="450em"
              width="450em"
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography align="center" variant="h4" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Ea anim reprehenderit dolore magna incididunt. Adipisicing cillum
              eiusmod commodo labore dolor velit minim reprehenderit sint. Magna
              Lorem pariatur ea non elit aliquip aliqua eiusmod commodo labore
              excepteur culpa occaecat ut. Ea commodo proident Lorem culpa
              voluptate enim esse officia pariatur laboris qui. Esse nisi sint
              commodo commodo ullamco nostrud nulla ex et aliqua eiusmod Lorem.
              Consequat deserunt id dolor nulla nisi minim fugiat sit ad officia
              id sint aliqua in.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*----End Roots Section-----*/}
      {/*----Animation 2 Container ----*/}
      <Grid item container direction="row" justify="space-around">
        {/*-----Automation Section-----*/}
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Why waste time when you don't have to?
              </Typography>
              <Typography variant="body1" paragraph>
                Incididunt ex velit veniam eu commodo est qui Lorem irure
                tempor. Mollit laboris in aliquip consequat magna cillum. Sunt
                in ad adipisicing exercitation pariatur tempor tempor ad tempor
                sint et non.
              </Typography>
              <Typography variant="body1" paragraph>
                Nostrud anim quis eu id. Ut pariatur reprehenderit duis amet
                magna est. Eu amet velit duis cupidatat laborum excepteur
                exercitation veniam incididunt eu amet. Laborum cillum commodo
                quis reprehenderit adipisicing deserunt quis.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        {/*-----UX Section-----*/}
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right">
                Incididunt ex velit veniam eu commodo est qui Lorem irure
                tempor. Mollit laboris in aliquip consequat magna cillum. Sunt
                in ad adipisicing exercitation pariatur tempor tempor ad tempor
                sint et non.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*----End Animations 2----*/}
    </Grid>
  );
}
