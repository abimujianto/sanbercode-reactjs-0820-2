import React from "react";
import "./Tugas-10.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class BuahDaftar extends React.Component {
  render() {
    return (
      <div className="warp-table">
        <div className="table">
          <h1 className="label">Table Harga Buah</h1>
          <table>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
            {/* dibuat fungsi untuk mapping lalu dibikin untuk comp trnya yaitu Table */}
            {dataHargaBuah.map((el) => {
              return (
                <Table
                  name={el.nama}
                  harga={el.harga}
                  berat={el.berat / 1000}
                />
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

class Table extends BuahDaftar {
  render() {
    return (
      <tr>
        <td className="td1">{this.props.name}</td>
        <td className="td2">{this.props.harga}</td>
        <td className="td3">{this.props.berat} kg</td>
      </tr>
    );
  }
}

class Tugas10 extends React.Component {
  render() {
    return (
      <>
        <BuahDaftar />
      </>
    );
  }
}

export default Tugas10;
