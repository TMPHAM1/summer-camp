import React from "react";
import PageWrapper from "../components/PageWrapper";
import Landing from "../pages/landing-3"
const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Landing />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
