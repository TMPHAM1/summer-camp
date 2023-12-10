import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";

const Pricing = () => {
  return (
    <>
      <PageWrapper>
        <div className="pt-md pt-17">
          {/* <!-- pricing area function start --> */}
          {/* <!-- pricing section --> */}
          <div className="pricing-area">
            <div className="container pt-12 pt-lg-24 pb-13 pb-lg-25">
              <div className="row justify-content-center">
                <div
                  className="col-xxl-6 col-lg-7 col-md-9"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  {/* <!-- section-title start --> */}
                  <div className="section-title text-center mb-12 mb-lg-18 mb-lg-15 pb-lg-15 pb-0">
                  <font size="20"> <i class="fas fa-check text-success"></i> </font>
                    <h2 className="mb-9">
                      Congratulations on successfully registering for your course!
                    </h2>
                    <p className="text-default-color font-size-4 px-5 px-md-10 px-lg-15 px-xl-24 px-xxl-22">
                      You should be receiving an email confirmation for you successful enrollment.
                    </p>
                  </div>
                  {/* <!-- section-title end --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- pricing area function end --> */}
        </div>
      </PageWrapper>
    </>
  );
};
export default Pricing;
