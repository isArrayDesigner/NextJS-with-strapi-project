import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Toolbar,
  Container,
  Grid,
  Typography,
  Link,
} from "@material-ui/core/";

const navStyles = makeStyles((theme) => ({
  logoResize: {
    width: "18%",
  },
  btnMargin: {
    marginLeft: "auto",
    paddingLeft: 50,
    paddingRight: 50,
  },
  containerBottom: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  copyright: {
    color: "white",
  },
  contactLink: {
    color: "white",
  },
}));

const Footer = () => {
  const classes = navStyles();
  return (
    <Grid container className={classes.containerBottom}>
      <Container maxWidth="lg">
        <Grid
          container
          xs={12}
          md
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid xs={12} md>
            <Typography variant="subtitle1" className={classes.copyright}>
              © Apptness Media Group, 2016. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid xs={12} md align="right">
            <Typography className={classes.contactLink}>
              <Link
                className={classes.contactLink}
                href="mailto:support@apptness.io"
                target="_blank">
                Contact Us
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
