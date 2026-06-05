import type { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderColor: "#f6b83d",
};

// Loader
const Loading = () => {
  return (
    <ClipLoader
      color="#f6b83d"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;
