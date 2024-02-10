import { useState } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import graphqlClient from "./graphqlClient";
import FilterInput from "./components/FilterInput";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    client: graphqlClient,
  });
  const [filter, setFilter] = useState("");

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCountries = data.countries.filter((country: any) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="main">
      <Header />
      <div className="app">
        <FilterInput onChange={setFilter} />
        {filteredCountries.length === 0 ? (
          <p>No result found</p>
        ) : (
          <CountryList countries={filteredCountries} />
        )}
      </div>
    </div>
  );
};

export default App;
