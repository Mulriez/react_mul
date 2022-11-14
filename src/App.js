import React from "react";
import Reduce from "./useREF/useReducer";
import RefTutorial from "./useREF/useTutor";
import LayoutTutor from "./useREF/useLayoutEffect";
import Parent from "./useREF/optimize";

export default function App() {
  return (
    <React.Fragment>
      <Reduce />
      {/* <RefTutorial/> */}
      <LayoutTutor/>
      <Parent/>
    </React.Fragment>
  );
}
