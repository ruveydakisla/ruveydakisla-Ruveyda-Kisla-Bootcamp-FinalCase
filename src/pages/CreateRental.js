import React, { useState } from 'react';
import Web3 from 'web3';
import { KiralamaKontrati } from '../abi/abi';
var web3 = new Web3(Web3.givenProvider);


// change provider
// Contract address of the deployed smart contract
const contractAddress = '0x9e8ec3979c8aD79Eab50e68d979839350227852B';
const storageContract = new web3.eth.Contract(
  KiralamaKontrati,
  contractAddress
);
export default function CreateRental() {

  const [tenantAddress,setTenantAddress]=useState('');
  const [realAddress,setRealAddress]=useState('');
  const [startdate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');
  
const setFields = async (t) => {
  t.preventDefault();
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  // Get permission to access user funds to pay for gas fees
  const gas = await storageContract.methods.KiralamaOlustur(tenantAddress,realAddress,startdate,endDate).estimateGas();
  const post = await storageContract.methods.KiralamaOlustur(tenantAddress,realAddress,startdate,endDate).send({
    from: account,
    gas,
  });
};
  return (
    <div className="main">
      <div className="card">
        <form className="form" onSubmit={setFields}>
          <label className="Titles">Create Rental</label>
          <text className="TextEx">Tenant Address</text>
          <input
            className="input" 
            type="text"
            name="name"
            onChange={(t) => setTenantAddress(t.target.value)}
          />
          <text className="TextEx">Real Address</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(t) => setRealAddress(t.target.value)}
          />
          <text className="TextEx">Rental Start Date</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(t) => setStartDate(t.target.value)}
          />
          <text className="TextEx">Lease End Date</text>
          <input
            className="input"
            type="text"
            name="name"
            onChange={(t) => setEndDate(t.target.value)}
          />
          <button className="button" type="submit" value="Confirm">
            Create Rental
          </button>
        </form>
        <br />

        {/* {getNumber} */}
      </div>
    </div>
  );
}
