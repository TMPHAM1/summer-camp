import React, {useContext, useState} from "react";

import PageWrapper from "../components/PageWrapper";
import { AuthContext } from "../context/AuthContext";
import { updateUser } from "../utils/apiCalls";
import styled, {keyframes} from "styled-components";

const DashboardSettings = () => {
  const loaderAnimation = keyframes`{to{transform: rotate(1turn)}}`
const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  --_c:no-repeat radial-gradient(farthest-side,#25b09b 92%,#0000);
  background: 
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  animation: ${loaderAnimation} 1s infinite;
`;

const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 450px;
`
  const aContext = useContext(AuthContext);
  const {user} = aContext;
  const [submitSuccessful, setSubmitSuccessful] = useState(false)
  const [formValues, setFormValues] = useState({
    first_name: user.first_name || '',
    last_name: user.last_name || ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateForm = (e) => {
    const inputValue = e.target.id;
    const value = e.target.value;
    setFormValues({...formValues, [inputValue]: value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {id} = user
    try {
        await updateUser(formValues, id)
        setSubmitSuccessful(true)
    }
    catch (error) {
      console.log(error);
    }
  }
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
        >{isLoading ? <Container><Loader /></Container> :
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
                                htmlFor="first_name"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                              First Name
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="first_name"
                                placeholder="First Name"
                                value={formValues.first_name}
                                onChange={handleUpdateForm}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                htmlFor="last_name"
                                className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                              >
                              Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control h-px-48"
                                id="last_name"
                                placeholder="Last Name"
                                value={formValues.last_name}
                                onChange={handleUpdateForm}
                              />
                            </div>
                          </div>
                        </div>
                       
                        <div className="row">
                            <input
                              type="submit"
                              value="Update Profile"
                              className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
                              onSubmit={handleSubmit}
                            />
                          </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardSettings;
