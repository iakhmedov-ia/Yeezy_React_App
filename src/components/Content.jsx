import "./Content.css";

export default function Content() {
  return (
    <>
      <div className="content_inner container">
        <div className="content_info">
          <p className="tool_text"> ---UI Design Tool </p>
          <h1>
            <img
              className="circle_line"
              src="../images/circle-line.svg"
              alt="circle-line"
            />
            Portraying design has now become
            <img
              className="hero_first"
              src="../images/mini-hero-1.png"
              alt="hero-1"
            />
            facile
          </h1>
          <p className="yeezy_text">
            Yeezy has everything you need to bring ideas life Placing the power
            of design in <br /> everyone’s hands.
          </p>
          <img src="../images/lines.svg" alt="lines" />
          <div className="rate">
            <img src="../images/logo-black.svg" alt="logo-black" />
            <div className="rate-info">
              <p className="first_child"> Yeezy </p>
              <p> Rated 5.0 Amazing Over 12.5k Review </p>
            </div>
          </div>
        </div>
        <div className="content_figures">
          <img className="content_lines" src="../images/lines.svg" alt="lines"/>
          <img className="ellipse" src="../images/Ellipse.png" alt="ellipse" />
          <img className="hero" src="../images/hero.png" alt="hero" />
          <div className="content_play">
            <div className="amount_months">
              <p className="amount"> $1,068 </p>
              <p> On 30th Of Every Month </p>
            </div>
            <button className="btn_play" title="Play" > Play Now </button>
          </div>
          <div className="hero_list">
            <div className="hero_item">
              <img src="../images/mini-hero-2.png" alt="hero-2" />
              <div className="hero_item--info">
                <p> Jon Snow </p>
                <p> Lead UI/UX Designer </p>
              </div>
              <img className="pencil" src="../images/pencil.svg" alt="pencil" title="Edit"/>
            </div>
            <span className="line"></span>
            <div className="hero_item">
              <img src="../images/mini-hero-3.png" alt="hero-3" />
              <div className="hero_item--info">
                <p> Khal Drago </p>
                <p> Senior Product designd </p>
              </div>
              <img className="pencil" src="../images/pencil.svg" alt="pencil" title="Edit"/>
            </div>
          </div>
          <img className="dots" src="../images/dots.svg" alt="dots" />
        </div>
      </div>
    </>
  );
}
