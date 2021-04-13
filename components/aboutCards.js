import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core/";

const aboutCardStyles = makeStyles((theme) => ({
  cardImage: {
    marginRight: "auto",
    marginLeft: "auto",
    height: 88,
    width: 88,
  },
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  cardTitle: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontWeight: 600,
  },
}));

const AboutCards = (props) => {
  const classes = aboutCardStyles();
  return (
    <Grid item xs={12} md key="cardgrid">
      <Card className={classes.card} key="cardmain">
        <CardContent key="cardcontent">
          <Avatar
            className={classes.cardImage}
            src={props.imageSrc}
            alt={props.imageAlt}
            key="cardimage"></Avatar>
          <Typography
            align="center"
            variant="h5"
            className={classes.cardTitle}
            key="cardtitle">
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.cardDesc}
            key="carddesc">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AboutCards;
