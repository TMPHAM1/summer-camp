import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import ProfileSidebar from "../ProfileSidebar";

import imgF1 from "../../assets/image/l2/png/featured-job-logo-1.png";
import imgF2 from "../../assets/image/l1/png/feature-brand-1.png";
import imgF3 from "../../assets/image/svg/harvard.svg";
import imgF4 from "../../assets/image/svg/mit.svg";
import imgL from "../../assets/image/svg/icon-loaction-pin-black.svg";


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

const ModalUserRole = (props) => {
  const gContext = useContext(GlobalContext);
  const handleRoleSelect = (event) => {
    gContext.setUserRole(event.target.id);
    gContext.setUserRoleModalVisible(false)
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.userRoleModalVisible}
      onHide={() => gContext.setUserRoleModalVisible(false)}
    >
      <Modal.Body className="p-0">
        <div className="container position-relative">
          <div className="login-modal-main bg-white rounded-8 overflow-hidden">
            <div className="row no-gutters d-flex justify-content-center align-items-center pt-3">
              <p>Please choose which role you would like to view the portal as:</p>
              <div className="text-center d-flex justify-content-around w-100 align-items-center" style={{height: '25rem'}}>
             <button id="teacher" className={`btn btn-${gContext.header.variant} text-uppercase font-size-3`}  onClick={handleRoleSelect}>
              View as Teacher
             </button>
             <button id="student" className={`btn btn-${gContext.header.variant} text-uppercase font-size-3`} onClick={handleRoleSelect}>
              View as Parent
             </button>
             </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalUserRole;
