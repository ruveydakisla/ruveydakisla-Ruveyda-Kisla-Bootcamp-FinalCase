import React, { useEffect, useState } from 'react';
import { KiralamaKontrati } from '../abi/abi'
import '../style/Pages.css';
import Web3 from 'web3';
var web3 = new Web3(Web3.givenProvider);
// change provider
// Contract address of the deployed smart contract
const contractAddress = '0x9e8ec3979c8aD79Eab50e68d979839350227852B';
const storageContract = new web3.eth.Contract(
  KiralamaKontrati,
  contractAddress
);
export default function AddProperty() {

useEffect(() => {
  web3 = new Web3(Web3.givenProvider);
});
const [getNumber, setGet] = useState({});
const [name,setName]=useState("");
const [address,setAddress]=useState("");
const [addressInfo,setAddressInfo]=useState("");

const setFields = async (t) => {
  t.preventDefault();
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  // Get permission to access user funds to pay for gas fees
  const gas = await storageContract.methods.MulkEkle(name,addressInfo,address).estimateGas();
  const post = await storageContract.methods.MulkEkle(name,addressInfo,address).send({
    from: account,
    gas,
  });
};

const numberGet = async (t) => {

  t.preventDefault();
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  const post = await storageContract.methods.Mulkler().call();
  setGet(post);
  console.log(post);
};

  return (
    <div className="main">
      <div className="card">
        <form className="form" onSubmit={setFields}>
          <label className="Titles">Add Property</label>
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
          <text className="TextEx">Address</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(t) => setAddress(t.target.value)}
          />
          <button className="button" type="submit" value="Confirm">
            Add Property
          </button>
          <button className="button" onClick={numberGet}>
            Add Property
          </button>
          
        </form>
        <br />
      </div>
    </div>
  );
}
