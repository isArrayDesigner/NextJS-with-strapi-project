import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Container, Link } from "@material-ui/core/";

const navStyles = makeStyles((theme) => ({
  logoResize: {
    width: "40%",
  },
  btnMargin: {
    marginLeft: "auto",
    paddingLeft: 50,
    paddingRight: 50,
  },
  containerTop: {
    marginTop: 30,
  },
  loginLink: {
    color: 'white',
  },
  awesomeButton: {
    marginLeft: '10px',
  },

}));

const Nav = (props) => {
  const classes = navStyles();
  return (
    <Container className={classes.containerTop} maxWidth="lg">
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            className={classes.logoResize}
            src={props.logoUrl}
            alt={props.logoAlt}
          />
        </Grid>
        <Grid item xs={12} md={6} align="right">
        <Button
          className={classes.btnMargin}
          size="large"
          variant="contained"
          color="primary">
          <Link className={classes.loginLink} href={props.loginLinkUrl} target="_blank">
            {props.loginButtonText}
          </Link>
        </Button>
        <Button
          className={classes.awesomeButton}
          size="large"
          variant="contained"
          color="primary">
          <Link className={classes.loginLink} href="https://strapi-t9rw.onrender.com/admin" target="_blank">
            I'm Awesome!
          </Link>
        </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Nav;
