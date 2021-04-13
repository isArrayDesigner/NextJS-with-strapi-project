import { makeStyles } from "@material-ui/core/styles";
import AboutCards from './aboutCards'
import {
  Grid,
  Typography,
  Container,
} from "@material-ui/core/";

const aboutStyles = makeStyles((theme) => ({

  sectionTitle2: {
    fontWeight: 300,
    fontSize: "1.75rem",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.secondary.main,
    color: "#0e3441",
  },
  sectionSubtitle2: {
    marginTop: "1rem",
    fontWeight: 600,
    color: "#0e3441",
  },
  about: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundColor: "#f5f5f5",
  },
  cardContainer: {
    marginTop: "3rem",
  },
}));

const About = () => {
  const classes = aboutStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.about}>
      <Grid item>
        <Typography
          align="center"
          variant="h4"
          className={classes.sectionTitle2}>
          &nbsp;&nbsp;About&nbsp;&nbsp;
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          align="center"
          className={classes.sectionSubtitle2}>
          Apptness Media Group
        </Typography>
      </Grid>
      <Container className={classes.cardContainer} maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          alignItems="stretch"
          spacing={3}>
          <AboutCards />
        </Grid>
      </Container>
    </Grid>
  );
};

export default About;
