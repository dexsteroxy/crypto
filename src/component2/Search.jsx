import React, { useContext, useState } from "react";
import searchIcon from "../images/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";
import { data } from "autoprefixer";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    console.log(query);
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  return (
    <>
      <form className=" w-96 relative flex items-center ml-7 "
      
      onSubmit={handleSubmit}>
        <input
          className=" w-full rounded bg-gray-100 pl-2 required: outline-0 border-2 border-transparent
         focus:border-blue text-darkblue"
          type="text"
          placeholder=" Search here..."
          value={searchText}
          name="search"
          onChange={handleInput}
        />
        <button
          type="submit"
          className=" absolute right-1 cursor-pointer bg-darkblue rounded-full items-center"
        >
          <img
           
            src={searchIcon}
            alt="search"
            className=" w-full h-auto"
          />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul
          className=" absolute top-11 right-0 w-96 h-96 rounded
  overflow-x-hidden
  py-2 bg-darkblue-secondary bg-opacity-60 backdrop-blur-md scrollbar-thin scrollbar-thumb-darkblue-secondary scrollbar-track-gray-300"
        >
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className=" flex items-center ml-4 my-2 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className=" w-[1.2rem] h-[1.2rem] mx-1.5"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className=" w-full h-full flex justify-center items-center">
              <div
                className=" w-8 h-8 border-4 border-blue rounded-full border-b-darkblue animate-spin"
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className=" relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
