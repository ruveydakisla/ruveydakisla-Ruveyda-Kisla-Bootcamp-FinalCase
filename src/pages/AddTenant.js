import {useState} from 'react';
import { KiralamaKontrati } from '../abi/abi'
import '../style/Pages.css';
import Web3 from 'web3';


var web3=new Web3(Web3.givenProvider);

const contractAddress='0x9e8ec3979c8aD79Eab50e68d979839350227852B';
const storageContract=new web3.eth.Contract(
  KiralamaKontrati,contractAddress
)

export default function AddTenant() {
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [addressInfo,setAddressInfo]=useState("");

  const setFields = async (t) => {
    t.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    // Get permission to access user funds to pay for gas fees
    const gas = await storageContract.methods.KiraciEkle(name,addressInfo,address).estimateGas();
    const post = await storageContract.methods.KiraciEkle(name,addressInfo,address).send({
      from: account,
      gas,
    });
  };

  return (
    <div className="main">
      <div className="card">
        <form className="form" onSubmit={setFields}>
          <label className="Titles">Add To Tenant</label>
          <text className="TextEx">Name</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(t) => setName(t.target.value)}
          />
          <text className="TextEx">Address Information</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(t) => setAddressInfo(t.target.value)}
          />
          <text className="TextEx">Adress</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(t) => setAddress(t.target.value)}
          />
          <button className="button" type="submit" value="Confirm">
            Add Tenant
          </button>
        </form>
        <br />

        {/* {getNumber} */}
      </div>
    </div>
  );
}
