import React, { Component } from "react";
import "./Tugas12.css";

export class Tugas12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [],
      inputName: "",
      InputHarga: "",
      InputBerat: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      dataHargaBuah: [
        this.state.inputName,
        this.state.InputHarga,
        this.state.InputBerat,
      ],
      inputName: "",
      InputHarga: "",
      InputBerat: "",
    });
  };

  ChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  ChangeInputHarga = (event) => {
    this.setState({ InputHarga: event.target.value });
  };
  ChangeInputBerat = (event) => {
    this.setState({ InputBerat: event.target.value });
  };

  render() {
    return (
      <div className="warp-table">
        <div className="table">
          <h1 className="label">Table Harga Buah</h1>
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {this.state.dataHargaBuah.map((nama, harga, berat) => {
                  return (
                    <>
                      <td>{nama}</td>
                      <td>{harga}</td>
                      <td>{berat} Kg</td>
                    </>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={this.handleSubmit}>
          <strong>Name</strong>
          <input
            type="text"
            value={this.state.InputName}
            onChange={this.ChangeInputName}
          />
          <br />
          <strong>harga</strong>
          <input
            type="number"
            value={this.state.InputHarga}
            onChange={this.ChangeInputHarga}
          />
          <br />
          <strong>Berat</strong>
          <input
            type="number"
            value={this.state.InputBerat}
            onChange={this.ChangeInputBerat}
          />
          <br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default Tugas12;
