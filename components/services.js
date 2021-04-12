import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Container, Link } from "@material-ui/core/";
import ServiceCards from "./serviceCards";

const servicesStyles = makeStyles((theme) => ({
  services: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundImage: "url(/images/service-bg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  sectionTitle: {
    fontWeight: 300,
    fontSize: "1.75rem",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.secondary.main,
    color: "white",
  },
  sectionSubtitle: {
    marginTop: "1rem",
    fontWeight: 600,
    color: "white",
  },
  card: {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    height: "100%",
  },
  cardContainer: {
    marginTop: "3rem",
  },
  srvBtnMargin: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

const Services = () => {
  const classes = servicesStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.services}>
      <Grid item>
        <Typography
          align="center"
          variant="h4"
          className={classes.sectionTitle}>
          &nbsp;&nbsp;Services&nbsp;&nbsp;
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          align="center"
          className={classes.sectionSubtitle}>
          Apptness Media Group
        </Typography>
      </Grid>
      <Container className={classes.cardContainer} maxWidth="lg">
        <ServiceCards />
        <Grid container justify="center">
          <Button
            className={classes.srvBtnMargin}
            size="large"
            variant="contained"
            color="secondary">
              <Link href="http://apptness.leadspedia.net/affiliate" target="_blank">
                Affiliate Sign Up
            </Link>
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Services;
