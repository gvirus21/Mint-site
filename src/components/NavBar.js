import React from "react";

const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccounts(accounts);
    }
  };

  return (
    <div>
      {/* Left side - social links */}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      {/* Right side */}
      <div>About</div>
      <div>Team</div>

      {/* Connect */}
      {isConnected ? (
        <div>
          <p>Connected</p>
        </div>
      ) : (
        <div>
          <button onClick={connectAccount}>Connect</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;