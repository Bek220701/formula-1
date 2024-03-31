import React from "react";
import footimg from "../img/foot-img.avif";
import f3 from "../img/f3.avif";
import play from "../img/google-play.svg";
import store from "../img/app-store.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="foot-blocks">
          <div className="foot-block">
            <div className="foot-line"></div>
            <div className="foot-text">
              <div className="text-fo">
                <h2>Formula 2</h2>
                <h4>Check out the F2 team and driver line-ups</h4>
                <button className="foot-btn">EXPLORE</button>
              </div>
              <img src={footimg} alt="img" />
            </div>
          </div>
          <div className="foot-block">
            <div className="foot-line"></div>
            <div className="foot-text">
              <div className="text-fo">
                <h2>Formula 3</h2>
                <h4>Check out the F2 team and driver line-ups</h4>
                <button className="foot-btn">EXPLORE</button>
              </div>
              <img src={f3} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div id="plai-market">
        <div className="container">
          <div className="plai-block">
            <div className="plai-text">
              <h5>
                DOWNLOAD THE <br /> OFFICIAL F1 APP
              </h5>
              <img src={play} alt="img" />
              <img src={store} alt="img" />
            </div>
            <div className="plai-icon">
              <h1>
                {" "}
                <FaFacebookSquare />
              </h1>
              <h1>
                <IoLogoLinkedin />
              </h1>
              <h1>
                <FaInstagramSquare />
              </h1>
              <h1>
                <FaYoutube />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="our">
        <div className="container">
          <div className="our">
            <div className="our-part">
              <div className="part-pa">
                <img src={ "https://account.formula1.com/images/f1_logo.svg"} className="part" alt="img"/>
                <h1>OUR PARTNERS</h1>
                </div>
              <div className="sponsor">
                <img src={" https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/rolex.png" } alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/pirelli.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/aramco.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/Heineken%20-%20Outlined.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/qatar.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/AWS%20GLOBAL.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/crypto.com.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/msc.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/f_auto/q_auto/v1678707357/content/dam/fom-website/2020/sponsors/salesforce.png"} alt="img"/>
              </div>
              <div className="sponsor-line"></div>
              <div className="sponsor1">
                <img src={"https://media.formula1.com/image/upload/f_auto/q_auto/v1681231879/fom-website/2020/sponsors/Paramount%2B.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/lenovo.png"} alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/ferrari-trento.png"}  alt="img"/>
                <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/liqui-moly.png"} alt="img"/>
              </div>
              <div className="sponsor-line"></div>
              <div className="sponsor3">
              <img src={"https://media.formula1.com/image/upload/f_auto/q_auto/v1697556367/fom-website/2020/sponsors/Amex.png"} alt="img" />
              <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/Workday.png"} alt="img" />
              <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/BBS.png"} alt="img" />
              <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/TATA.png"} alt="img" />
              <img src={"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/188.png"} alt="img" />
              <img src={"https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png"} alt="img" />
              </div>
              <div className="sponsor-line"></div>
              <div className="new">

              <div className="latest">
                <h3>Latest News</h3>
                <h3>What is F1</h3>
                <h3>Video</h3>
                <h3>Drivers</h3>
                <h3>Teams</h3>
                <h3>Schedule</h3>
              </div>
              <div className="latest">
                <h3>Results</h3>
                <h3>2024 season</h3>
                <h3>Driver Standings</h3>
                <h3>Constructor Standings</h3>
                <h3>Arhive 1950-2022</h3>
                <h3>F1 Awards</h3>
              </div>
              <div className="latest">
              <h3>Gaming</h3>
                <h3>Esports</h3>
                <h3>Fantasy</h3>
                <h3>F1 23</h3>
                <h3>F1 Manager</h3>
                <h3>F1 Play</h3>
                <h3>F1 Mobile Raging</h3>
              </div>
              <div className="latest">
                <h3>Lime Timing</h3>
              </div>
              <div className="latest">
              <h3>Ticets</h3>
                <h3>F1® Experiences</h3>
                <h3>Store</h3>
                <h3>Paddock Club</h3>
                <h3>F1® TV</h3>
                <h3>F1® Authentics</h3>
              </div>
              <div className="latest">
                <h3>Rules & Regulations</h3>
              </div>
              </div>
              <div className="foot-contact">
                <h3>CONTACTS</h3>
                <h3>F1 TV SUPPORT</h3>
                <h3>PRIVACY POLICY</h3>
                <h3>COOKIE POLICY</h3>
                <h3>PREFERENCES</h3>
                <h3>GUIDELINES</h3>
                <h3>Legal Notices</h3>
                <h3>GUIDELINES</h3>
                <h3>LEGAL NOTICES</h3>
                <h3>CODE OF CONDUCT</h3>
                <h3>ANTI-BRIBERY</h3>
                <h3>HUMAN RIGHTS</h3>
                <h3>GENDER PAY REPORT</h3>
                <h3>TERMS OF USE</h3>
                <h3>PARTNERS</h3>
                <h3>F1® VAN VOICE</h3>
                <h3>BEYOND THE GRID - THE F1® PODCAST</h3>
                <h3>F1® CORPORATE SITE</h3>
                <h3>BECOME AN AFFILIATE</h3>
                <h3>OFFICIAL F1® RACE PROGRAMME</h3>
                <h3>MODERN SLAVERY STATEMENT</h3>
              </div>
              <div className="sponsor-line"></div>
              <div className="footer-foot">
                <img src={"https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"} alt="img" />
                <h4>© 2003-2024 Formula One World Championship Limited</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
