import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>HOLA, I AM</h2>
            <h1 className="landing-h1-name">
              YASHWANTH <br /> CHALLA
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI & Data Engineer</h3>
            <h2 className="landing-h2-main">
              <div className="landing-h2-info">Intelligent Systems</div>
              <div className="landing-h2-info-1">Data Architect</div>
            </h2>
          </div>
          <div className="scroll-hint-wrapper">
            <div className="scroll-hint">
              <span>Scroll to explore</span>
              <div className="scroll-line"></div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
