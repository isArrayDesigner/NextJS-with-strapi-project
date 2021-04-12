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

const cardList = [
  {
    title: "Who We Are",
    description:
      "Apptness is a group of highly effective marketers from the big data industry that bring together many individual successes stories in both executive leadership and entrepreneurship. Our lean but highly effective team eats, sleeps, and breaths performance based marketing.",
    headImage: { src: "/images/who-we-are.png", alt: "who we are icon" },
  },
  {
    title: "What we Do",
    description:
      "We offer innovative digital marketing products & work collaboratively with our clients to provide a truly unique set of solutions to meet business objectives. Whether its generating leads, consumer purchases, app installs, or other digital goals, we craft strategies that help you succeed.",
    headImage: { src: "/images/what-we-do.png", alt: "what we do icon" },
  },
  {
    title: "Why Us?",
    description:
      "Grow LTV and user interaction with dynamic messaging. Convert mobile web traffic into long term monetization. Maximize retention by engaging users with rich content.",
    headImage: { src: "/images/why-us.png", alt: "why us icon" },
  },
];


export const getStaticProps = async () => {
  //get homepage data from strapi
  const res = await fetch("http://localhost:1337/homepages/aboutCard");
  const data = await res.json();

  console.log(data)

  return {
    props: {aboutCard},
  };
};

const AboutCards = () => {
  const classes = aboutCardStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignItems="stretch"
      spacing={3}>
      {cardList.map((card) => (
        <Grid item xs={12} md>
          <Card className={classes.card}>
            <CardContent>
              <Avatar
                className={classes.cardImage}
                src={card.headImage.src}
                alt={card.headImage.alt} key="{card.headImage.src}"></Avatar>
              <Typography
                align="center"
                variant="h5"
                className={classes.cardTitle} key="{card.title}">
                {card.title}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.cardDesc} key="{card.description}">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutCards;
