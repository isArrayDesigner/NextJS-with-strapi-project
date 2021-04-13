import React from "react";
import Layout from "../components/layout.js";
import { strapiData } from "../utils";
import AboutCards from "../components/aboutCards.js";
import ServiceCards from "../components/serviceCards.js";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Button,
  Link,
  Typography,
  Card,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  services: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundImage: "url(/images/service-bg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  sectionTitle: {
    fontWeight: 300,
    fontSize: "1.75rem",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.secondary.main,
    color: "white",
  },
  sectionSubtitle: {
    marginTop: "1rem",
    fontWeight: 600,
    color: "white",
  },
  card: {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    height: "100%",
  },
  cardContainer: {
    marginTop: "3rem",
  },
  srvBtnMargin: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  sectionTitle2: {
    fontWeight: 300,
    fontSize: "1.75rem",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.secondary.main,
    color: "#0e3441",
  },
  sectionSubtitle2: {
    marginTop: "1rem",
    fontWeight: 600,
    color: "#0e3441",
  },
  about: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundColor: "#f5f5f5",
  },
}));

function parseMarkdown(markdownText) {
  const htmlText = markdownText
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, '<br />')

  return htmlText.trim()
}

const apptnessWebsite = ({
  homepageItems,
  serviceCardsList,
  aboutCardsList,
}) => {
  const classes = useStyles();
  return (
    <Layout
      companyName={homepageItems.footer.copyrightCompany}
      copyrightYear={homepageItems.footer.copyrightYear}
      contactUrl={homepageItems.footer.contactUs.linkURL}
      contactText={homepageItems.footer.contactUs.linkText}
      taglineMainTitle={homepageItems.tagline.line1}
      taglineSubtitle={homepageItems.tagline.line2}
      contactSectionTitle={homepageItems.contactSectionTitle.title}
      companyName={homepageItems.contactInfo.companyName}
      contactCompanyName={homepageItems.contactInfo.companyName}
      address={homepageItems.contactInfo.addressWithIcon.physicalAddress}
      addressIcon={"https://strapi-t9rw.onrender.com" + homepageItems.contactInfo.addressWithIcon.addressIcon.url}
      phoneNumber={homepageItems.contactInfo.phoneWithIcon.phoneNumber}
      phoneIcon={"https://strapi-t9rw.onrender.com" + homepageItems.contactInfo.phoneWithIcon.phoneIcon.url}
      emailAddress={homepageItems.contactInfo.emailWithIcon.emailAddress}
      emailIcon={"https://strapi-t9rw.onrender.com" + homepageItems.contactInfo.emailWithIcon.emailIcon.url}>
      {/* Services Section */}
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.services}>
        <Grid item>
          <Typography
            align="center"
            variant="h4"
            className={classes.sectionTitle}>
            &nbsp;&nbsp;{homepageItems.servicesSectionTitle.title}&nbsp;&nbsp;
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            className={classes.sectionSubtitle}>
            {homepageItems.contactInfo.companyName}
          </Typography>
        </Grid>
        <Container className={classes.cardContainer} maxWidth="lg">
          <Grid
            container
            justify="center"
            alignItems="center"
            alignItems="stretch"
            spacing={3}
            key={"srvceCardGridWrap"}>
            {serviceCardsList.map((card, ind) => (
              <ServiceCards
                key={card + ind}
                title={card.cardTitle}
                description={card.cardBody}
                imageSrc={
                  "https://strapi-t9rw.onrender.com" + card.cardImage.image.url
                }
                imageAlt={card.cardImage.alt}
              />
            ))}
          </Grid>
          <Grid container justify="center">
            <Button
              className={classes.srvBtnMargin}
              size="large"
              variant="contained"
              color={homepageItems.buttonGeneral.buttonColor}>
              <Link
                href={homepageItems.buttonGeneral.buttonUrl}
                target="_blank">
                {homepageItems.buttonGeneral.buttonText}
              </Link>
            </Button>
          </Grid>
        </Container>
      </Grid>
      {/* Services Section End */}
      {/* About Section */}
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.about}>
        <Grid item>
          <Typography
            align="center"
            variant="h4"
            className={classes.sectionTitle2}>
            &nbsp;&nbsp;{homepageItems.aboutSectionTitle.title}&nbsp;&nbsp;
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            className={classes.sectionSubtitle2}>
            {homepageItems.contactInfo.companyName}
          </Typography>
        </Grid>
        <Container className={classes.cardContainer} maxWidth="lg">
          <Grid
            container
            justify="center"
            alignItems="center"
            alignItems="stretch"
            spacing={3}>
            <Grid
              container
              justify="center"
              alignItems="center"
              alignItems="stretch"
              spacing={3}
              key={"srvceCardGridWrap"}>
              {aboutCardsList.map((card, ind) => (
                <AboutCards
                  key={card + ind}
                  title={parseMarkdown(card.cardTitle)}
                  description={parseMarkdown(card.cardBody)}
                  imageSrc={
                    "https://strapi-t9rw.onrender.com" +
                    card.cardImage.image.url
                  }
                  imageAlt={card.cardImage.alt}
                />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
      {/* About Section End */}
    </Layout>
  );
};

export async function getStaticProps() {
  //get homepage data from strapi

  const homepages = await strapiData("homepages");
  const homepageItems = homepages[0];
  const serviceCardsList = homepages[0].serviceCard;
  const aboutCardsList = homepages[0].aboutCard;



  return {
    props: {
      homepageItems,
      serviceCardsList,
      aboutCardsList,
    },
  };
}

export default apptnessWebsite;
