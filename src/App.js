// import React, { useState } from "react";
// import Siswa from "./ComponentBiasa/Siswa";
// import Sekolah from "./ComponentBiasa/Sekolah";
// function App() {
//   const [jumlahMurid, setJumlahMurid] = useState(0); //set jumlah siswa
//   const dataJumlahMurid = (jumlahMurid) => {
//     setJumlahMurid(jumlahMurid);
//   };
//   return (
//     <div>
//       <div>
//         <Siswa dataJumlahMurid={dataJumlahMurid} />
//         <Sekolah jumlahMurid={jumlahMurid} />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Siswa from "./ComponentBiasa/Siswa";
// import Sekolah from "./ComponentBiasa/Sekolah";
// function App() {
//   const [jumlahMurid, setJumlahMurid] = useState(0); //set jumlah siswa
//   const dataJumlahMurid = (jumlahMurid) => {
//     setJumlahMurid(jumlahMurid);
//   };
//   return (
//     <div>
//       <div>
//         <Siswa dataJumlahMurid={dataJumlahMurid} />
//         <Sekolah jumlahMurid={jumlahMurid} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Counter from "./component/Counter";
import Reducer from "./Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(Reducer);
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App;
