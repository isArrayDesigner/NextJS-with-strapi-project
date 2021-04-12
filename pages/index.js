import React from "react";
import Nav from "../components/nav";
import Tagline from "../components/tagline";
import Services from "../components/services";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
} from "@material-ui/core/";

// export const getStaticProps = async () => {
//   const res = await fetch("");
//   const data = await res.json();

//   return {
//     props: {},
//   };
// };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainBackground: {
    backgroundImage: "url(/images/background_img.png)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

export default function apptnessWebsite(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.mainBackground}>
        <Nav />
        <Tagline
          mainTitle="Stop the waste. Spend your marketing dollars wisely."
          subtitle=" DATA • EMAIL • SOCIAL • SEARCH • DISPLAY • MOBILE"
        />
      </Grid>
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
