import { Lottie } from "lottie-react";
import React from "react";
import loading from "./loading.json";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center">
      <Lottie className="" animationData={loading} />
    </div>
  );
};

export default Loading;