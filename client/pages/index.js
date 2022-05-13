import { ethers } from "ethers";
import { useState } from "react";
import YourCollectible from "../YourCollectible";

const Index = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [tokens, setTokens] = useState([]);
  const [message, setMessage] = useState("Здесь ничего нет, а хотелось бы ...");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTokens([]);
    const { ethereum } = window;
    if (!ethereum) {
      alert("Use brouser with metamask");
      return;
    }
    if (!ethereum.isConnected()) {
      alert("Connect or login to your metamask and refresh the page");
      return;
    }
    const chainId = await ethereum.request({ method: "eth_chainId" });
    const targetChainId = "0x4";
    if (chainId !== targetChainId) {
      alert("You are not connected to the target chain");
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const currentAccount = accounts[0];

    try {
      setMessage("Ждёмс...");
      const yourCollectible = YourCollectible(contractAddress);
      const countOfTokens = ethers.utils.formatUnits(
        await yourCollectible.balanceOf(currentAccount),
        0
      );
      if (+countOfTokens === 0) {
        setMessage("По этому аккаунту ничего нет :(");
        return;
      }
      console.log("countOfTokens: ", countOfTokens);
      const tokensIds = (
        await Promise.all(
          Array(+countOfTokens)
            .fill(null)
            .map((value, index) =>
              yourCollectible.tokenOfOwnerByIndex(currentAccount, index)
            )
        )
      ).map((id) => ethers.utils.formatUnits(id, 0));
      console.log("tokensIds: ", tokensIds);
      const tokensURLs = await Promise.all(
        tokensIds.map((id) => yourCollectible.tokenURI(id))
      );
      console.log("tokensURLs: ", tokensURLs);
      const tokensInfo = await Promise.all(
        tokensURLs.map((url) => fetch(url).then((response) => response.json()))
      );
      console.log("tokensInfo: ", tokensInfo);
      setTokens(tokensInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const renderTokens = () => {
    return tokens.map((token, index) => (
      <div
        className=" text-center m-4 inline-block border-2 border-black rounded-xl"
        key={index}
      >
        <h1 className=" text-3xl">{token.name}</h1>
        <h2 className=" text-xl">{token.description}</h2>
        <img className="p-4" src={token.image} alt={token.description} />
      </div>
    ));
  };

  return (
    <div className="m-4">
      <form className="h-10 my-10 text-center" onSubmit={handleSubmit}>
        <label className="m-2 text-xl" htmlFor="contractAddress">
          Здесь адрес контракта:
        </label>
        <input
          className="m-2 p-2 text-xl rounded border-2 border-black focus:outline-none focus:bg-gray-200 w-1/3 bg-white"
          value={contractAddress}
          onChange={(event) => setContractAddress(event.target.value)}
          type="text"
          name="contractAddress"
        />
        <button className="m-2 p-2 text-xl border-2 border-black rounded-xl hover:bg-black hover:text-white">
          Забирай мой аккаунт и показывай что там!!
        </button>
      </form>
      <div>
        {tokens.length > 0 ? (
          <div className="flex justify-around">{renderTokens()}</div>
        ) : (
          <h1 className=" text-3xl">{message}</h1>
        )}
      </div>
    </div>
  );
};

export default Index;
