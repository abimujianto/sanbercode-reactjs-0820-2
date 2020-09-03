import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="form">
        <div className="content">
          <h1>Form Pembelian Buah</h1>
          <label className="name">Nama Pelanggan</label>
          <input className="inputText" type="text" />
          <br></br>
          <br></br>
          <div className="pilihan">
            <input type="checkbox" />
            <label>Semangka</label>
            <br></br>
            <input type="checkbox" />
            <label>Jeruk</label>
            <br></br>
            <input type="checkbox" />
            <label>Nanas</label>
            <br></br>
            <input type="checkbox" />
            <label>Salak</label>
            <br></br>
          </div>
          <label className="bold">Daftar Item</label>
          <input type="checkbox" className="inAnggur" />
          <label>Anggur</label>
          <br></br>
          <button className="btn">Kirim</button>
        </div>
      </div>
    </div>
  );
}

export default App;
