import { useState } from 'react';
import { BigNumber } from 'ethers';
import roboPunksNFT from '../RoboPunksNFT.json';

const ethers = require('ethers');

const roboPunksNFTAddress = "0x0947d777D93850e511b24dc79c05Bb470cc640e0";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    const handleMint = async () => {
        if (window.ethereum) {
            const provider = new ethers.provider.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const roboPunksNFTContract = new ethers.contract(
                roboPunksNFT.abi,
                roboPunksNFTAddress,
                signer
            )

            try {
                const response = await roboPunksNFTContract.mint(BigNumber.from(mintAmount));
                console.log('Response: ',response);
    
            } catch (err) {
                console.log("Error:", err);
            }
        }

    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    return (
        <div>
            <h1>
                Robopunks
            </h1>

            <p>Robopunks is the new Ape</p>

            {
                isConnected ? (
                    <div>
                        <div>
                            <button onClick={handleDecrement}>-</button>
                            <input type='number' value={mintAmount} />
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button onClick={handleMint}>Mint</button>
                    </div>
                ) :  <p>You must be connected to mint </p>
            }
        </div>
    )

}



export default MainMint;
