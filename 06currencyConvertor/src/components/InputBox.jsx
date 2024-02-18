// This component is used to create  a input box
import React, { useId } from "react";
// Another new hook called useId is popular in react
// used to generate unique id that can passed to accessbility attributes

function InputBox({
  label, // Label for input box
  amount, // Amount to convert
  onAmountChange, // settermethod from useState for amountchange
  onCurrencyChange, // settermethod from useState for currencyChange
  currencyOptions = [], // What options to show in currency dropdown
  selectCurrency = "usd", // currency to be selected when rendered
  amountDisable = false, // disable/ enable changing values in input box
  currencyDisable = false, // disable/ enable changing values in input box
  className = "", // To take in additional css from user
}) {
  // useId hook
  // bound it to label and input

  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          min="0"
          // && condition to make sure onAmountchange impl is passed
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // default selected value
          disabled={currencyDisable}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {/* IF you have loops in jsx, remember to use loops */}
          {currencyOptions.map((curCurrency) => (
            <option key={curCurrency} value={curCurrency}>
              {curCurrency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
