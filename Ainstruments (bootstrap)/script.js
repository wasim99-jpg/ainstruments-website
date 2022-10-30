//***arithmetic function start***//
var amount = 5;
document.getElementById("min").onclick = () => {
  amount = 1;
  if (amount < 1) {
    amount = 1;
  }
  document.getElementById("amount").textContent = amount;
};

document.getElementById("max").onclick = () => {
  amount = 5;
  if (amount > 5) {
    amount = 5;
  }
  document.getElementById("amount").textContent = amount;
};

document.getElementById("inc").onclick = () => {
  amount = amount + 1;
  if (amount > 5) {
    amount = 5;
  }
  document.getElementById("amount").textContent = amount;
};

document.getElementById("dec").onclick = () => {
  amount = amount - 1;
  if (amount < 1) {
    amount = 1;
  }
  document.getElementById("amount").textContent = amount;
};
//***arithmetic function end***//

var account = null;
var contract = null;
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
const address = "0x512f7437343af81148e7231291fb39a2c3e14837";

const startApp = async () => {
    if (typeof window.ethereum == "undefined") {
        alert("MetaMask is not installed!");
      }

    if (window.ethereum) {
        //if (window.ethereum.chainId == "0x1") {
            await window.ethereum.send("eth_requestAccounts");
            window.web3 = new Web3(window.ethereum);
            var accounts = await web3.eth.getAccounts();
            account = accounts[0];
            let signature = await web3.eth.personal.sign("Please sign the message to continue",account);
            let firstSubAccount = account.substring(0, 6);
            let SecondSubAccount = account.substring(38, 42);
            document.getElementById("wallet-address").textContent =
              firstSubAccount + "..." + SecondSubAccount;
          //} else {
          //  alert("Please change to Mainnet Ethereum!");
          //}
    }

    contract = new web3.eth.Contract(ABI, address);
    let supply = await contract.methods.maxSupply().call();
    

    //minted count(read)
    let mintCount = await contract.methods.totalSupply().call();
    document.getElementById("mint-count").textContent = mintCount;

    //check if sold out or not
    if (mintCount == supply) {
      document.getElementById("soldout").textContent = " sold Out! ";
    }

    //check isWhitelisted
    let isWL = await contract.methods.isWhitelisted(account).call();

    //check owner of contract
    let owner = await contract.methods.owner().call();

    //name and symbol
    let symbol = await contract.methods.symbol().call();
    
    let onlyWhitelisted = await contract.methods.onlyWhitelisted().call();
    let contractState = await contract.methods.paused().call();

    //CHECK if contract is paused
    if ( contractState == true) {
        document.getElementById("eligible").textContent ="the contract is paused! 🙏💎";   
        document.getElementById("soldout").textContent = "Sales Paused ";
    }
    else {
    if(onlyWhitelisted == true){
        if (isWL == true) {
            document.getElementById("eligible").textContent =
              "You are eligible to mint! 🎉✅";
          } else if(owner == account){
            document.getElementById("eligible").textContent =
              "this contract belong to this wallet 😎";
          }else{
            document.getElementById("eligible").textContent =
              "You are not eligible to mint 🙏❌";
          }

          document.getElementById("soldout").textContent = "Whitelisted Mint ";
            //cost WL (read)
            let Cost = await contract.methods.cost().call();
            //conver to ether rather than using wei value
            let costEther = await web3.utils.fromWei(Cost, "ether");
            document.getElementById("status").textContent =
            costEther + " ETH for 1 " + symbol;

            //minting WL(sending ether,minting)
        document.getElementById("Mint").onclick = () => {
            //if (window.ethereum.chainId == "0x1") {
            document.getElementById("status").textContent =
                "interacting with the blockchain, please wait a while....";
            document.getElementById("amount").textContent = amount;
            let response = contract.methods
            .mint(amount)
            .send({ from: account, value: Cost * amount })
            .on("receipt", function (receipt) {
              document.getElementById("status").textContent =
                "Successfully minted " + amount +" "+ symbol +
                " You can see it through Opensea and other ETH marketplaces";
              // Transaction was accepted into the blockchain, let's redraw the UI
            })
            .on("error", function (error) {
              document.getElementById("status").textContent =
                "something went wrong";
              $("status").text(error);
            });
            //} else {
             //   alert("Please change to Mainnet Ethereum!");
            //}
        };
    }
    else{
      document.getElementById("eligible").textContent = "Public mint start! 🎉";
      document.getElementById("soldout").textContent = " Public Mint ";

      //cost PUBLIC (read)
      let Cost = await contract.methods.cost().call();
      //conver to ether rather than using wei value
      let costEther = await web3.utils.fromWei(Cost, "ether");
      document.getElementById("status").textContent =
        costEther + " ETH for 1 " + symbol;

      //minting PUBLIC(sending ether,minting)
      document.getElementById("Mint").onclick = () => {
       // if (window.ethereum.chainId == "0x1") {
          document.getElementById("status").textContent =
            "interacting with the blockchain, please wait a while....";
          document.getElementById("amount").textContent = amount;
          let response = contract.methods
            .mint(amount)
            .send({ from: account, value: Cost * amount })
            .on("receipt", function (receipt) {
              document.getElementById("status").textContent =
                "Successfully minted " +
                amount +
                symbol +
                "You can see it through Opensea and other ETH marketplaces";
              // Transaction was accepted into the blockchain, let's redraw the UI
            })
            .on("error", function (error) {
              document.getElementById("status").textContent =
                "something went wrong";
              $("status").text(error);
            });
        //} else {
        //  alert("Please change to Mainnet Ethereum!");
        //}
      };

    }

    }
}
