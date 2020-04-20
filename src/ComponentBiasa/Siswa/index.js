import React, { useEffect, useState } from "react";

// const Index = () =>{}
// export default ()=>{}
// export default class componentName extends Component {
//   render() {
//     return <div>Ini adalah Siswa</div>;
//   }
// }

// cara satu (biasa)
// export default () => {
//   const [jumlahMurid, setJumlahMurid] = useState(0); //set jumlah siswa
//   const [nilaiSiswa, setNilaiSiswa] = useState(90); //set nilai siswa

//   //untuk tambah siswa
//   const tambahSiswa = () => {
//     setJumlahMurid(jumlahMurid + 1);
//   };
//   const dropOut = () => {
//     setJumlahMurid(jumlahMurid - 1);
//   };

//   //set nilai siswa
//   const tambahNilai = () => {
//     setNilaiSiswa(nilaiSiswa + 1);
//   };
//   const kurangNilai = () => {
//     setNilaiSiswa(nilaiSiswa - 1);
//   };
//   //   useEffect(function () {
//   //     console.log("useEffect");
//   //   }, []);

//   //useEffect bisa lebih dari 1 karena dia function
//   //useEffect untuk jumlah murid
//   useEffect(
//     function () {
//       console.log("useEffect untuk jumlah murid yang berubah", jumlahMurid);
//     },
//     [jumlahMurid]
//   );
//   //useEffect untuk nilai siswa
//   useEffect(
//     function () {
//       console.log("useEffect untuk nilai siswa yang berubah", nilaiSiswa);
//     },
//     [nilaiSiswa]
//   );

//   return (
//     <div>
//       <div>
//         {/* button untuk jumlah siswa */}
//         <button onClick={tambahSiswa}>Tambah</button>
//         <button onClick={dropOut}>Drop Out</button>
//       </div>
//       <div>jumlah murid: {jumlahMurid}</div>

//       {/* untuk nilai siswa */}
//       <div>
//         Nilai:
//         <button onClick={tambahNilai}>Tambah</button>
//         <button onClick={kurangNilai}>Kurang</button>
//       </div>
//       <div>Nilai siswa adalah {nilaiSiswa}</div>
//     </div>
//   );
// };

// cara dua pakai props
export default (props) => {
  const { dataJumlahMurid } = props;
  const [jumlahMurid, setJumlahMurid] = useState(0); //set jumlah siswa
  const [nilaiSiswa, setNilaiSiswa] = useState(90); //set nilai siswa

  //untuk tambah siswa
  const tambahSiswa = () => {
    setJumlahMurid(jumlahMurid + 1);
  };
  const dropOut = () => {
    setJumlahMurid(jumlahMurid - 1);
  };

  //set nilai siswa
  const tambahNilai = () => {
    setNilaiSiswa(nilaiSiswa + 1);
  };
  const kurangNilai = () => {
    setNilaiSiswa(nilaiSiswa - 1);
  };
  //   useEffect(function () {
  //     console.log("useEffect");
  //   }, []);

  //useEffect bisa lebih dari 1 karena dia function
  //useEffect untuk jumlah murid
  useEffect(
    function () {
      console.log("useEffect untuk jumlah murid yang berubah", jumlahMurid);
      dataJumlahMurid(jumlahMurid);
    },
    [jumlahMurid, dataJumlahMurid]
  );
  //useEffect untuk nilai siswa
  useEffect(
    function () {
      console.log("useEffect untuk nilai siswa yang berubah", nilaiSiswa);
    },
    [nilaiSiswa]
  );

  return (
    <div>
      <div>
        {/* button untuk jumlah siswa */}
        <button onClick={tambahSiswa}>Tambah</button>
        <button onClick={dropOut}>Drop Out</button>
      </div>
      <div>jumlah murid: {jumlahMurid}</div>

      {/* untuk nilai siswa */}
      <div>
        Nilai:
        <button onClick={tambahNilai}>Tambah</button>
        <button onClick={kurangNilai}>Kurang</button>
      </div>
      <div>Nilai siswa adalah {nilaiSiswa}</div>
    </div>
  );
};
