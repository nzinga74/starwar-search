import type { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="lds-ellipsis ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
