import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";
// Use out own hook

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState("0");
  const currencyInfo = useCurrencyInfo(from);

  // extract all keys from currencyInfo
  const currencyOptions = Object.keys(currencyInfo);

  // swap curency conversion
  const swap = () => {
    let temp = to;
    setTo(from);
    setFrom(temp);
    temp = amount;
    setAmount(convertedAmount);
    setConvertedAmount(temp);
  };
  const convert = () => {
    console.log(currencyInfo);
    // actual conversion
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const backgroundImageUrl =
    "https://images.pexels.com/photos/417430/pexels-photo-417430.jpeg";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 text-center">
          <h1 className="font-bold ">CURRENCY CONVERTOR</h1>
        </div>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              // Prevent page refresh
              e.preventDefault();
              // convert currency
              convert(); // Invoke convert method on form submit
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
