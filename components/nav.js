import { makeStyles } from "@material-ui/core/styles";
import { Button, Toolbar, Container, Link } from "@material-ui/core/";

const navStyles = makeStyles((theme) => ({
  logoResize: {
    width: "18%",
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
}));

const Nav = () => {
  const classes = navStyles();
  return (
    <Container className={classes.containerTop} maxWidth="lg">
      <Toolbar>
        <img
          className={classes.logoResize}
          src="/images/apptness_logo.png"
          alt="apptness logo"
        />
        <Button
          className={classes.btnMargin}
          size="large"
          variant="contained"
          color="primary">
          <Link className={classes.loginLink} href="http://apptness.leadspedia.net/affiliate" target="_blank">
            Login
          </Link>
        </Button>
      </Toolbar>
    </Container>
  );
};

export default Nav;
