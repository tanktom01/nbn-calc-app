import { Alert } from "@cloudscape-design/components";

const Hero = () => {
  return (
    <div className="hero-div">
      <Alert
        dismissible
        statusIconAriaLabel="Info"
        header="This is a Beta Product"
      >
        This project is currently in <b>Early Access</b>, please report any bugs
        to 4oyulydw5@mozmail.com
      </Alert>
      <div className="container">
        <div className="right-content">
          <h1 className="title-text">Calculate your Broadband Usage</h1>
          <p className="body-text">
            This is a free tool to help you understand your usage so that you
            pick the right plan!
          </p>
          <img src="/hero-thing.png" />
        </div>
        <div className="left-content">
          <img src="/random-internet-thing.png" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
