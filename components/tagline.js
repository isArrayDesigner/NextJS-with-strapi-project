import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core/";

const taglineStyles = makeStyles((theme) => ({
  mainTitle: {
    fontSize: "1.7rem",
    marginBottom: ".25rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
    }
  },
  subtitle: {
    fontWeight: 600,
    fontSize: "1.8rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
    }
  },
  taglineContainer: {
    marginTop: "8rem",
    marginBottom: "10rem",
    marginLeft: "30rem",
    marginRight: "30rem",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    paddingRight: "5rem",
    paddingLeft: "5rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    [theme.breakpoints.down('lg')]: {
      marginLeft: "15rem",
      marginRight: "15rem",
      paddingRight: "8rem",
      paddingLeft: "8rem",
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: "8rem",
      marginRight: "8rem",
      paddingRight: "8rem",
      paddingLeft: "8rem",
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: "2rem",
      marginRight: "2rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
    }
  },
}));

const Tagline = (props) => {
  const classes = taglineStyles();
  return (
    <Grid container spacing={1} className={classes.taglineContainer}>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="h4"
          color="primary"
          className={classes.mainTitle}>
          {props.mainTitle}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          className={classes.subtitle}>
          {props.subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Tagline;
