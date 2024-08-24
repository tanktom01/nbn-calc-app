const Hero = () => {
  return (
    <div className="hero-div">
      <div className="container">
        <div className="right-content">
          <h1 className="title-text">Calculate your Broadband Usage</h1>
          <p className="body-text">
            This is a free tool to help you understand your usage so that you
            pick the right plan for you!
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
