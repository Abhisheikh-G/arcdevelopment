import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

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
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

export default function Websites({ setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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
              to="/mobileapps"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                setSelectedIndex(0);
              }}
            >
              <img
                src={backArrow}
                alt="Back to iOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Website Development
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
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/services"
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                setSelectedIndex(2);
              }}
            >
              <img src={forwardArrow} alt={"Forward to Services Page"} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="graph with magnifying glass revealing 1's and 0's"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, nisi.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="world outline made of dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography align={matchesSM ? "center" : undefined}>
            {" "}
            variant="body1" paragraph> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corrupti, inventore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Neque, nisi.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            inventore.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="a megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            paragraph
            variant="body1"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, nisi.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="website standing on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque, nisi.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            inventore.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            inventore.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
