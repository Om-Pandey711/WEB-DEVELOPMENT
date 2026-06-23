import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        if (res[currency]) {
          setData(res[currency]);
        } else {
          console.error("Currency not found in response:", currency);
        }
      })
      .catch((err) => console.error("Error fetching:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
