import {
  american_express_image,
  mastercard_image,
  pay_pal_image,
  visa_electron,
  visa_image,
} from "../../../assets/images";

import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  SnapchatLogoIcon,
} from "../../../assets/icons";

interface footerLinksObject {
  title: string;
  links: string[];
  icon?: any;
  extra?: string;
}

type footerLinks = footerLinksObject[];

const footerLinks: footerLinks = [
  {
    title: "Help and Information",
    links: ["Help", "Track Order", "Delivery & returns"],
  },

  {
    title: "About Asos",
    links: [
      "About us",
      "Careers at ASOS",
      "Corperate responsibilities",
      "Investor's site",
    ],
  },

  {
    title: "More From Asos",
    links: [
      "Mobile and ASOS app",
      "ASOS marketplace",
      "Gift vouchers",
      "Black friday",
      "ASOS x Thrift+",
    ],
  },

  {
    title: "Shopping From:",
    links: ["You're in"],
  },
];

const FooterDesktopScreen = () => {
  return (
    <div className="footer-desktop-screen-container">
      <div className="socials-and-payments-container">
        <div className="socials-and-payments-inner-container">
          <section className="socials-section">
            <FacebookLogoIcon />
            <InstagramLogoIcon />
            <SnapchatLogoIcon />
          </section>
          <section className="payment-cards-section">
            <img src={visa_image} alt="visa_card" />
            <img src={mastercard_image} alt="mastercard" />
            <img src={pay_pal_image} alt="pay-pal" />
            <img src={american_express_image} alt="american-express" />
            <img src={visa_electron} alt="visa-electron" />
          </section>
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-links-inner-container">
          {footerLinks.map(data => {
            return (
              <section key={data.title}>
                <h1>{data.title}</h1>
                <div>
                  {data.links.map((link, index) => (
                    <span key={index}>{link}</span>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="footer-bottom-container">
        <div className="footer-bottom-inner-container">
          <span>© 2022 ASOS</span>

          <section>
            <span>Privacy & cookies</span>
            <span>Ts&Cs</span>
            <span>Accessibilities</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktopScreen;
