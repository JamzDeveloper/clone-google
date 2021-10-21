import React, { createContext, useContext, useState } from "react";
import ContextData from "../interface/ContextData";
const initialContext: ContextData = {
  getResults: () => Promise.resolve(),
  results: {},
  isLoading: false,
  search: "",
  setSearch: () => {},
};

const ResultsContext = createContext<ContextData>(initialContext);

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

type Props = {
  children: React.ReactNode;
};
export const ResultsContextProvider = (props: Props) => {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const getResults = async (type: string) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, { 
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": `a3ac2bed7amshf50f28c6e3a6eb4p1e9363jsnaecc4e02a268`,
      },
    });
    const data = await response.json();

    setResults(data);

    setIsLoading(false);
  };

  const data = {
    getResults,
    results,
    search,
    setSearch,
    isLoading,
  };
  return (
    <ResultsContext.Provider value={data}>
      {props.children}
    </ResultsContext.Provider>
  );
};

export const useResultsContext = () => useContext(ResultsContext);
