import "./style.css";

const BootstrapCarousel = () => {
  return (
    <div className="my-5">
      <h2 className="text-capitalize text-center">testimonials</h2>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner profile">
          <div className="carousel-item active profile-details">
            <p className="profile-text">
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>

            <img
              src="/images/person-1.png"
              className="profile-img"
              alt="Slide 1"
            />
            <h5 className="profile-name">Maria Jones</h5>
            <p className="profile-title">CEO, Co-Founder, XYZ Inc.</p>
          </div>
          <div className="carousel-item profile-details">
            <p className="profile-text">
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>

            <img
              src="/images/person-1.png"
              className="profile-img"
              alt="Slide 2"
            />
            <h5 className="profile-name">Maria Jones</h5>
            <p className="profile-title">CEO, Co-Founder, XYZ Inc.</p>
          </div>
          <div className="carousel-item profile-details">
            <p className="profile-text">
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>

            <img
              src="/images/person-1.png"
              className="profile-img"
              alt="Slide 3"
            />
            <h5 className="profile-name">Maria Jones</h5>
            <p className="profile-title">CEO, Co-Founder, XYZ Inc.</p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="first">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="first">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BootstrapCarousel;
