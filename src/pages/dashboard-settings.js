import React from "react";

import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";

const DashboardSettings = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div
          className="dashboard-main-container mt-24 mt-lg-31"
          id="dashboard-body"
        >
          <div className="container">
            <div className="mb-15 mb-lg-23">
              <div className="row">
                <div className="col-xxxl-9 px-lg-13 px-6">
                  <h5 className="font-size-6 font-weight-semibold mb-11">
                    Update Profile
                  </h5>
                  <div className="contact-form bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                    <form action="/">
                      <fieldset>
                        <div className="row mb-xl-1 mb-9">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="firstname"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                              First Name
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="firstname"
                                placeholder="eg. John"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="lastname"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                              Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="lastname"
                                placeholder="eg. Smith"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-8">
                        <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="imgUrl"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                              Avatar URL
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="imgUrl"
                                placeholder="URL Link for Profile"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                            <input
                              type="button"
                              value="Update Profile"
                              className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                            />
                          </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardSettings;
