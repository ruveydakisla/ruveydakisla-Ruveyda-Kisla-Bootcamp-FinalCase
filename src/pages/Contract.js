var web3 = new Web3(Web3.givenProvider);
// change provider
// Contract address of the deployed smart contract
const contractAddress = '0x59C69064145B923d166a9FA2023c54E64d8f4e47';
const storageContract = new web3.eth.Contract(
  KiralamaKontrati,
  contractAddress
);
  // Hold variables that will interact with our contract and frontend
  const [number, setUint] = useState(0);
  const [getNumber, setGet] = useState('0');


  const numberSet = async (t) => {
    t.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    // Get permission to access user funds to pay for gas fees
    const gas = await storageContract.methods.set(number).estimateGas();
    const post = await storageContract.methods.set(number).send({
      from: account,
      gas,
    });
  };

  const numberGet = async (t) => {
    t.preventDefault();
    const post = await storageContract.methods.get().call();
    setGet(post);
  };
