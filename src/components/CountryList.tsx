import React, { useState } from "react";
import Modal from "./Modal";

interface Country {
  code: string;
  name: string;
  emoji: string;
}

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [showModal, setShowModal] = useState<boolean>(false);
  const colors: string[] = ["lightblue", "lightgreen", "lightcoral"];

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setSelectedColor(colors[Math.floor(Math.random() * colors.length)]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const startIndex: number = (page - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const countriesForPage: Country[] = countries.slice(startIndex, endIndex);

  return (
    <div className="country__list">
      <ul>
        {countriesForPage.map((country) => (
          <li
            key={country.code}
            onClick={() => handleSelect(country)}
            style={{
              backgroundColor:
                selectedCountry && selectedCountry.code === country.code
                  ? selectedColor || "white"
                  : "white",
              cursor: "pointer",
              padding: "8px",
              marginBottom: "4px",
            }}
          >
            {country.name}
          </li>
        ))}
      </ul>
      
      <div className="pagination">
        <button
          className="button"
          onClick={prevPage}
          disabled={page === 1}
          style={{
            backgroundColor: `${startIndex <= 1 ? "grey" : "green"}`,
            cursor: `${startIndex <= 1 ? "" : "pointer"}`,
          }}
        >
          Previous
        </button>
        <span>
          {" "}
          Page {page} of {countries.length / countriesForPage.length}
        </span>
        <button
          className="button"
          onClick={nextPage}
          disabled={endIndex >= countries.length}
          style={{
            backgroundColor: `${
              endIndex >= countries.length ? "grey" : "green"
            }`,
            cursor: `${endIndex >= countries.length ? "" : "pointer"}`,
          }}
        >
          Next
        </button>
      </div>
      {selectedCountry && showModal && (
        <Modal country={selectedCountry} onClose={closeModal} />
      )}
    </div>
  );
};

export default CountryList;
