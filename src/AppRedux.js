import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import Siswa from "./ComponentRedux/Siswa";
import Sekolah from "./ComponentRedux/Sekolah";

const store = createStore(reducer);
export default () => {
  return (
    <Provider store={strore}>
      <Siswa />
      <Sekolah />
    </Provider>
  );
};
