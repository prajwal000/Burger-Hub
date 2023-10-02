const HeroBanner = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src="assets/slider1.webp"
              className="d-block w-100 sliders"
              alt="..."
            />
            <div className="slider1">
              <h2 className="text-white py-2">
                Grilled BBQ Burgers. Available Now
              </h2>
              <h1 className="text-white">THE GOODNESS OF THE BEST</h1>
              <button className="primary-button">Order Now</button>
              <p className="text-white pt-5">
                Get 20% off on BBQ Burgers,Use Code BBQB
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="assets/slider2.webp"
              className="d-block w-100 sliders"
              alt="..."
            />
            <div className="slider2">
              <h2 className="text-white  py-2">Hasty & Tasty</h2>
              <h1 className="text-white">WAKE UP YOUR TASTE BUDS</h1>

              <button className="secondary-button">Order Now</button>

              <p className="text-white pt-5 py-3">
                Get 20% off on Bevrages ,Use Code BVG
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/slider3.webp"
              className="d-block w-100 sliders"
              alt="..."
            />
            <div className="slider3">
              <h2 className="text-white text-center py-2">
                Char-grilled & Flavor-filled
              </h2>
              <h1 className="text-white">THE GOODNESS OF THE BEST</h1>
              <div className="text-center">
                <button className="primary-button">Order Now</button>
              </div>
              <p className="text-white pt-5 text-center py-1">
                Get 20% off on BBQ Burgers,Use Code BBQB
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default HeroBanner;
