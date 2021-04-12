import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Typography, Container, Avatar } from "@material-ui/core/";

const contactStyles = makeStyles((theme) => ({
  sectionTitle: {
    marginTop: "3rem",
    marginBottom: "1rem",
    color: "#77a03f",
  },
  titleContainer: {
    borderBottom: "1px solid #ccc",
  },
  contactCompany: {
    fontWeight: "600",
    fontSize: "1.5rem",
  },
  phone: {
    fontWeight: "600",
    fontSize: "1.25rem",
  },
  email: {
    fontWeight: "600",
    fontSize: "1.25rem",
  },
  contactInfo: {
    color: theme.palette.primary.main,
    marginTop: "3rem",
    marginBottom: "7rem",
  },
}));

const Contact = () => {
  const classes = contactStyles();
  return (
    <Container className={classes.cardContainer} maxWidth="lg">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.services}>
        <Grid item md={8} className={classes.titleContainer}>
          <Typography variant="h4" className={classes.sectionTitle}>
            Our <strong>Offices</strong>
          </Typography>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.contactInfo}
        md={8}>
        <Grid container alignItems="flex-start" spacing={3} md>
          <Grid item>
            <img src="/images/location.png" />
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.contactCompany}>
              Apptness Media Group
            </Typography>
            <Typography variant="body1" className={classes.address}>
              399 NW 2nd Ave. Ste 100 <br /> Boca Raton, FL 33432
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          md>
          <Grid
            container
            item
            md
            xs={12}
            spacing={3}
            wrap="nowrap"
            alignItems="center">
            <Grid item>
              <img src="/images/footer-call.png" />
            </Grid>
            <Grid item>
              <Typography noWrap className={classes.phone}>
                Phone : (561) 299-1053
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md
            spacing={3}
            wrap="nowrap"
            alignItems="center">
            <Grid item>
              <img src="/images/email.png" />
            </Grid>
            <Grid>
              <Typography variant="h5" className={classes.email}>
                Email:
                <Link href="mailto:support@apptness.io" target="_blank">
                  support@apptness.io
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
