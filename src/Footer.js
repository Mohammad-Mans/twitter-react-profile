import "./Footer.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/en/tos" target="blank">
        Terms of Service
      </a>
      <a href="https://twitter.com/en/privacy" target="blank">
        Privacy Policy
      </a>
      <a
        href="https://help.twitter.com/en/rules-and-policies/x-cookies"
        target="blank"
      >
        Cookie Policy
      </a>
      <a
        href="https://help.twitter.com/en/resources/accessibility"
        target="blank"
      >
        Accessibility
      </a>
      <a
        href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
        target="blank"
      >
        Ads info
      </a>
      <a href="/">
        More <MoreHorizIcon />
      </a>

      <p>&copy; 2023 X Corp.</p>
    </footer>
  );
}

export default Footer;
