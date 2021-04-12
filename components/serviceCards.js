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

const cardList = [
  {
    title: [<strong>Digital</strong>, " ", "Strategy"],
    description:
      "As specialists in digital advertising we’ve spent years helping agencies, brands, professional services and many others find the right digital strategy for their market and target audience. Let us work with you to implement the right processes to effectively grow your business.",
    headImage: { src: "/images/digital-strategy.png", alt: "digital strategy" },
  },
  {
    title: "PUBLISHERS",
    description: [
      <ul className={styles.cardDescUl}>
        <li>Receive maximum monetization for quality traffic.</li>
        <li>Leverage our unique data sources to drive superiormonetization.</li>
        <li>
          Work with all standard payout models, CPA, CPL, CPC, CPM,rev-share.
        </li>
      </ul>,
    ],
    headImage: { src: "/images/publishers.png", alt: "publisers icon" },
  },
  {
    title: "ADVERTISER",
    description: [
      <ul className={styles.cardDescUl}>
        <li>
          Data driven targeting allows you to access the right consumer at the
          right time at scale.
        </li>
        <li>Display, email, contextual, search inventory available.</li>
        <li>
          Precise targeting &amp; data validation for email, phone, address.
        </li>
      </ul>,
    ],
    headImage: { src: "/images/advertiser.png", alt: "advertiser" },
  },
  {
    title: [<strong>MOBILE</strong>, " ", "SOLUTIONS"],
    description: [
      <ul className={styles.cardDescUl}>
        <li>Grow LTV and user interaction with dynamic messaging.</li>
        <li>Convert mobile web traffic into long term monetization.</li>
        <li>Maximize retention by engaging users with rich content.</li>
      </ul>,
    ],
    headImage: { src: "/images/mobile-solutions.png", alt: "advertiser" },
  },
];

const ServiceCards = () => {
  const classes = srvcCardStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignItems="stretch"
      spacing={3}
      key={"srvceCardGridWrap"}>
      {cardList.map((card, ind) => (
        <Grid item xs={12} md key={"srvceCardGrid" + ind}>
          <Box className={classes.cardImageDiv} key={"srvceCardBox" + ind}>
            <Avatar
              className={classes.cardImage}
              src={card.headImage.src}
              alt={card.headImage.alt}
              key={"srvceCardAvatar" + ind}></Avatar>
          </Box>
          <Card className={classes.card} key={"srvceCardMain" + ind}>
            <CardContent key={"srvceCardContent" + ind}>
              <Typography
                align="center"
                variant="h5"
                className={classes.cardTitle}
                key={"srvceCardTitle" + ind}>
                {card.title}
              </Typography>
              <Typography
                variant="body1"
                className={classes.cardDesc}
                key={"srvceCardDesc" + ind}>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceCards;
