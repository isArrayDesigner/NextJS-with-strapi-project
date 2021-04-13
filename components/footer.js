import { makeStyles } from "@material-ui/core/styles";
import {
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

const Footer = (props) => {
  const classes = navStyles();
  return (
    <Grid container className={classes.containerBottom}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" className={classes.copyright}>
              © {props.companyName}, {props.copyrightYear}. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} align="right">
            <Typography className={classes.contactLink}>
              <Link
                className={classes.contactLink}
                href={props.contactUrl}
                target="_blank">
                {prop.contactText}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
