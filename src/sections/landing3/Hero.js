import React from "react";
import { Button } from "react-bootstrap";

import { Select } from "../../components/Core";
import imgC1 from "../../assets/image/l3/png/hero-image-1.png";
import imgC2 from "../../assets/image/l3/png/hero-image-2.png";

const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative z-index-1  mt-25 mt-md-15 mt-lg-0 mt-xl-22">
        <div className="container">
          <div className="row position-relative align-items-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-26 pb-lg-26 pt-md-20"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-dealy="750"
            >
              <div className="row">
                <div className="col-md-8 col-sm-10">
                  <h1 className="font-size-11 mb-12">
                    Register and join our summer courses now
                  </h1>
                  <p className="font-size-6">
                   Easily manage your courses and view attendance at your fingertips. Portal for both students and faculty.
                  </p>
                </div>
              </div>
              <div className="pt-12">
{/*   
                    <div className="button-block">
                      <Button className="line-height-reset  text-uppercase">
                        Enroll Now
                      </Button>
                    </div> */}
              </div>
            </div>
            <div className="col-12 pos-abs-tr z-index-n1 position-static position-lg-absolute ml-auto hero-image-positioning-2">
              <div className="image-group row justify-content-center">
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="750"
                  >
                    <img src={imgC1} alt="hero 1" />
                  </div>
                </div>
                <div className="col-sm-6 col-10 mt-10 mt-lg-0">
                  <div
                    className="single-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-dealy="1200"
                  >
                    <img src={imgC2} alt="hero 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
