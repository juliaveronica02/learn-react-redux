// import React, { Component } from "react";
import React from "react";

// export default class componentName extends Component {
//   render() {
//     return <div>Ini adalah Sekolah</div>;
//   }
// }

// export default class componentName extends Component {
//   render() {
//     return <div>Jumlah anak sekolah di sini adalah:</div>;
//   }
// }

export default (props) => {
  const { jumlahMurid } = props;
  return (
    <div>
      <h1>Jumlah anak sekolah disini adalah : {jumlahMurid}</h1>
    </div>
  );
};
