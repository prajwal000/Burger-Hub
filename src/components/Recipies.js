import { Container } from "react-bootstrap";

const Recipies = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <h3 className="pt-5 pb-2 fw-bolder text-center ">
            Our Special Recipies
          </h3>
          <div className="text-center pb-5">
            <img src="/assets/bar.png" alt="bar" />
          </div>
          <div className="row">
            <div className="col-lg-6 position-relative">
              <img
                src="/assets/Recipies1.webp"
                alt="bar"
                width="100%"
                className=" recipies-img"
              />
              <button className="recipies-btn position-absolute">
                Turkey Burgers
              </button>
            </div>
            <div className="col-lg-6 position-relative">
              <img
                src="/assets/Recipies2.webp"
                alt="bar"
                width="100%"
                className=" recipies-img"
              />
              <button className="recipies-btn position-absolute">
                Elk Burgers
              </button>
            </div>
          </div>
          <div className="row my-4">
            {" "}
            <div className="col-lg-12 position-relative">
              <img
                src="/assets/recipies3.webp"
                alt="bar"
                width="100%"
                className=" recipies-img3"
              />
              dfvdfvdf
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Recipies;
