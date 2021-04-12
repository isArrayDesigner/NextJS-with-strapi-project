import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button, Card, CardHeader, CardActions, CardContent, Toolbar, Typography, Container} from '@material-ui/core/';


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
  logoResize: {
    width: '18%',
  },  
  btnMargin: {
    marginLeft: 'auto',
    paddingLeft: 50,
    paddingRight: 50,
  },
  containerTop:{
    marginTop: 30,
  },
  srvBtnMargin:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  taglineContainer:{
    marginTop:'8rem',
    marginBottom:'10rem',
    marginLeft:'30rem',
    marginRight:'30rem',
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    paddingRight: '5rem',
    paddingLeft: '5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  mainBackground: {
    backgroundImage: 'url(/images/background_img.png)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  subTitle1: {
    fontSize: '1.7rem',
    marginBottom: '1rem',
  },
  subTitle2: {
    fontWeight: 600,
    fontSize: '1.8rem',
  },
  services:{
    paddingTop: '3rem',
    paddingBottom: '3rem',
    backgroundImage: 'url(/images/service-bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  sectionTitle: {
    fontWeight: 300,
    fontSize: '1.75rem',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.secondary,
    color: 'white',
  },
  sectionSubtitle:{
    marginTop: '1rem',
    fontWeight: 600,
    color: 'white',
  },
  sectionTitle2: {
    fontWeight: 300,
    fontSize: '1.75rem',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.secondary,
    color: '#0e3441',
  },
  sectionSubtitle2:{
    marginTop: '1rem',
    fontWeight: 600,
    color: '#0e3441',
  },
  card:{
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    height: '100%',
  },
  cardContainer: {
    marginTop: '3rem',
  },
  about:{
    paddingTop: '3rem',
    paddingBottom: '3rem',
    backgroundColor: '#f5f5f5',

  },

}));

export default function apptnessWebsite() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container justify="center" alignItems="center" className={classes.mainBackground}>
        <Container className={classes.containerTop} maxWidth="lg">
          <Toolbar>
            <img className={classes.logoResize} src="/images/apptness_logo.png" alt="apptness logo"/>
            <Button className={classes.btnMargin} size="large" variant="contained" color="primary">Login</Button>
          </Toolbar>
        </Container>
        <Grid container spacing={1} className={classes.taglineContainer}>
          <Grid item xs={12} spacing={2}>
            <Typography align="center" variant="h4" color="primary" className={classes.subTitle1}>Stop the waste. Spend your marketing dollars wisely.</Typography>
          </Grid>
          <Grid item xs={12} spacing={2}>
          <Typography variant="h4" align="center" color="primary" className={classes.subTitle2}>DATA • EMAIL • SOCIAL • SEARCH • DISPLAY • MOBILE</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center" className={classes.services}>
        <Grid item>
          <Typography align="center" variant="h4" className={classes.sectionTitle}>&nbsp;&nbsp;Services&nbsp;&nbsp;</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" className={classes.sectionSubtitle}>Apptness Media Group</Typography>
        </Grid>
        <Container className={classes.cardContainer} maxWidth="lg">
        <Grid container justify="center" alignItems="center" alignItems="stretch" spacing={3}>
          <Grid item xs={12} md={3}>
            <Card className={classes.card}>
              <CardHeader><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></CardHeader>
              <CardContent>
              <Typography variant="body1">As specialists in digital advertising we’ve spent years helping agencies, brands, professional services and many others find the right digital strategy for their market and target audience. Let us work with you to implement the right processes to effectively grow your business.</Typography>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} md={3}>
            <Card className={classes.card}>
              <CardHeader><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></CardHeader>
                  
              <CardContent>
              <Typography variant="body1">Receive maximum monetization for quality traffic.
  Leverage our unique data sources to drive superior monetization.
  Work with all standard payout models, CPA, CPL, CPC, CPM, rev-share.</Typography>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} md={3}>
            <Card className={classes.card}>
              <CardHeader><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></CardHeader>
                  
              <CardContent>
              <Typography variant="body1">Data driven targeting allows you to access the right consumer at the right time at scale.
  Display, email, contextual, search inventory available.
  Precise targeting & data validation for email, phone, address.</Typography>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} md={3}>
            <Card className={classes.card}>
              <CardHeader><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></CardHeader>
                  
              <CardContent>
              <Typography variant="body1">Grow LTV and user interaction with dynamic messaging.
  Convert mobile web traffic into long term monetization.
  Maximize retention by engaging users with rich content.</Typography>
              </CardContent>
            </Card>
            </Grid>
            <Grid container justify="center" xs={12}>
              <Button className={classes.srvBtnMargin} size="large" variant="contained" color="secondary">Affiliate Sign Up</Button>
            </Grid>
            </Grid>
          </Container>
      </Grid>
      

      <Grid container justify="center" alignItems="center" className={classes.about}>
      <Grid item>
          <Typography align="center" variant="h4" className={classes.sectionTitle2}>&nbsp;&nbsp;About&nbsp;&nbsp;</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" className={classes.sectionSubtitle2}>Apptness Media Group</Typography>
        </Grid>
        <Container className={classes.cardContainer} maxWidth="lg">
        <Grid container justify="center" alignItems="center" alignItems="stretch" spacing={3}>
            <Grid item xs={12} md={4}>
            <Card className={classes.card2}>
              <CardHeader><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></CardHeader>
                  
              <CardContent>
              <Typography align="center" variant="h5">Who We Are</Typography>
              <Typography align="center" variant="body1">Apptness is a group of highly effective marketers from the big data industry that bring together many individual successes stories in both executive leadership and entrepreneurship. Our lean but highly effective team eats, sleeps, and breaths performance based marketing.</Typography>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card className={classes.card2}>
              <CardHeader><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></CardHeader>
                  
              <CardContent>
              <Typography align="center" variant="h5">What we Do</Typography>
              <Typography align="center" variant="body1">We offer innovative digital marketing products & work collaboratively with our clients to provide a truly unique set of solutions to meet business objectives. Whether its generating leads, consumer purchases, app installs, or other digital goals, we craft strategies that help you succeed.</Typography>
              </CardContent>
            </Card>

            </Grid>
            <Grid item xs={12} md={4}>
            <Card className={classes.card2}>
              <CardHeader><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></CardHeader>
                  
              <CardContent>
              <Typography align="center" variant="h5">Why Us?</Typography>
              <Typography align="center" variant="body1">Grow LTV and user interaction with dynamic messaging.
  Convert mobile web traffic into long term monetization.
  Maximize retention by engaging users with rich content.</Typography>
              </CardContent>
            </Card>
            </Grid>
            </Grid>
          </Container>

      </Grid>
      <Grid container justify="center" alignItems="center" className={classes.offices}>

      </Grid>
    </div>
  );
}