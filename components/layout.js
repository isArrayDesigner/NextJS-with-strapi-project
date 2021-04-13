import Head from "next/head";
import Nav from "../components/nav";
import Tagline from "../components/tagline";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainBackground: {
    backgroundImage: "url(/images/background_img.png)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

const Layout = ({
  children,
  title,
  description,
  taglineMainTitle,
  taglineSubtitle,
  companyName,
  contactCompanyName,
  copyrightYear,
  contactUrl,
  contactText,
  contactSectionTitle,
  addressIcon,
  address,
  phoneIcon,
  phoneNumber,
  emailIcon,
  emailAddress
}) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.mainBackground}>
          <Nav />
          <Tagline mainTitle={taglineMainTitle} subtitle={taglineSubtitle} />
        </Grid>
        <main>{children}</main>
        <Contact
          contactSectionTitle={contactSectionTitle}
          contactCompanyName={contactCompanyName}
          address={address}
          addressIcon={addressIcon}
          phoneIcon={phoneIcon}
          phoneNumber={phoneNumber}
          emailIcon={emailIcon}
          emailAddress={emailAddress}
          emailAddressUrl={emailAddress}
        />
        <Footer
          companyName={companyName}
          copyrightYear={copyrightYear}
          contactUrl={contactUrl}
          contactText={contactText}
        />
      </div>
    </>
  );
};

export default Layout;
