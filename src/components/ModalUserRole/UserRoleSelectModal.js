import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import styled, {keyframes} from "styled-components";
import { Modal } from "react-bootstrap";
import { updateUser } from "../../utils/apiCalls";



const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
  .modal-dialog {
    margin: 1.75rem auto;
    max-width: 100%;
  }
  .modal-content {
    background: transparent;
  }
`;

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

const ModalUserRole = (props) => {
  const gContext = useContext(GlobalContext);
  const [submitSuccessful, setSubmitSuccessful] = useState(false)
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateForm = (e) => {
    const inputValue = e.target.id;
    const value = e.target.value;
    setFormValues({...formValues, [inputValue]: value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {id} = props.user
    try {
        await updateUser(formValues, id)
        setSubmitSuccessful(true)
    }
    catch (error) {
      console.log(error);
    }
  }


  const successContent = <div className="row no-gutters d-flex justify-content-center align-items-center pt-3">
    <div className="text-center d-flex justify-content-around w-100 align-items-center">
    <font size="20"> <i class="fas fa-check text-success"></i> </font>

    </div>
    <div className="text-center d-flex justify-content-around w-100 align-items-center">
    <p>We have successfully updated your profile please feel free to continue exploring the Dashboard</p>
    </div>

 
 <div className="text-center d-flex justify-content-around w-100 align-items-center mb-5">
 <button id="teacher" className={`btn btn-${gContext.header.variant} text-uppercase font-size-3`}  onClick={props.onHide}>
              Close
             </button>
    </div>
</div>
const nameContent = <div className="row no-gutters d-flex justify-content-center align-items-center pt-3">
<p>Hello! Welcome to the Summer Camp Dashboard, We need a little bit of information about you before you can start registering!</p>
<div className="text-center d-flex justify-content-around w-100 align-items-center">
         <form>
    <div className="form-group">
      <label
        htmlFor="first_name"
        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
      >
        First Name
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="First Name"
        id="first_name"
        value={formValues.first_name}
        onChange={handleUpdateForm}
      />
    </div>
    <div className="form-group">
      <label
        htmlFor="last_name"
        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
      >
        Last Name
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Last Name"
        id="last_name"
        value={formValues.last_name}
        onChange={handleUpdateForm}
      />
    </div>
    <div className="form-group mb-8">
      <button type="submit" className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase" onClick={handleSubmit}>
        Submit{" "}
      </button>
    </div>
  </form>
  </div>
</div>
  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={props.showModal}
      onHide={() => props.toggleNameModal()}
    >
      <Modal.Body className="p-0">
        <div className="container position-relative">
          <div className="login-modal-main bg-white rounded-8 overflow-hidden">
            {isLoading ? <Container><Loader /></Container> :(submitSuccessful ? successContent : nameContent)}
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalUserRole;
