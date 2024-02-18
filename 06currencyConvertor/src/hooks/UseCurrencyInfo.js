// This is a custom hook
// custom hooks can also use exisiting hooks from core react lib

import { useEffect, useState } from "react";

// this hook takes in currency symbol returns some data about currency like conversion rate etc

function useCurrencyInfo(currency) {
  // to store currency conversion rate
  const [data, setData] = useState({});
  // When this hook is invoked call a fetch api to fetch currency info

  // useEffect to trigger fetch api

  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    // Cal fetch api
    // then convert response string to json
    // then hold in a variable on useStateHook
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log("data " + data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
