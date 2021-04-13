import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/ServiceCards.module.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@material-ui/core/";

const srvcCardStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    height: "85%",
  },
  cardContainer: {
    marginTop: "3rem",
  },

  cardImage: {
    marginRight: "auto",
    marginLeft: "auto",
    height: 88,
    width: 88,
    position: "absolute",
    left: "35%",
  },
  cardImageDiv: {
    position: "relative",
    height: 50,
  },
  cardTitle: {
    marginTop: "2.5rem",
    marginBottom: "1rem",
    textTransform: "uppercase",
  },
  cardDescUl: {
    paddingInlineStart: "0",
  },
  srvBtnMargin: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

const ServiceCards = (props) => {
  const classes = srvcCardStyles();
  return (
      //{cardList.map((card, ind) => (
        <Grid item xs={12} md key="srvceCardGrid">
          <Box className={classes.cardImageDiv} key="srvceCardBox">
            <Avatar
              className={classes.cardImage}
              src={props.imageSrc}
              alt={props.imageAlt}
              key="srvceCardAvatar"></Avatar>
          </Box>
          <Card className={classes.card} key="srvceCardMain">
            <CardContent key="srvceCardContent">
              <Typography
                align="center"
                variant="h5"
                className={classes.cardTitle}
                key="srvceCardTitle">
                {props.title}
              </Typography>
              <Typography
                variant="body1"
                className={classes.cardDesc}
                key="srvceCardDesc">
                {props.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      //))}
  );
};

export default ServiceCards;
