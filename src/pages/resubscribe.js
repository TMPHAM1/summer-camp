import React, {useState} from "react";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  const [message, setMessage] = useState(null);
  const onClickHandler = () => {
    setMessage("You are now subscribed indefintetely")
  }
  return (
    <PageWrapper>
        <div>
      {message ?  <button onClick={onClickHandler} className="primary-btn btn">Resubscribe</button> : message}
    </div>
    </PageWrapper>
    
  )
};
export default IndexPage;
