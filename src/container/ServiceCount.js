import React from "react";
import ServiceCard from "../components/ServiceCard";

const ServiceCount = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-8 mt-24 py-6 lg:py-24">
      <ServiceCard count={"100+"} text={"Happy Students"} />
      <ServiceCard count={"10+"} text={"Happy Customers"} />
      <ServiceCard count={"25+"} text={"React Projects"} />
      <ServiceCard count={"50+"} text={"Public Projects "} />
    </div>
  );
};

export default ServiceCount;
