import { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const [isOpen, SetisOpen] = useState(false);
  const [name, Setname] = useState("All Categories");
  const [searchKeyword, SetsearchKeyword] = useState("");
  const [filteredList, SetfilteredList] = useState([]);

  const [countryDropdownOpen, SetCountryDropdownOpen] = useState(false); 
  const [countryList, SetCountryList] = useState([]);
  const [countrySearch, SetCountrySearch] = useState("");
  const [filteredCountries, SetFilteredCountries] = useState([]);
  const [selectedCountry, SetSelectedCountry] = useState("Select Country");

  const list = [
    "Milks & Dairies",
    "Wines & Alcohol",
    "Clothing & Beauty",
    "Pet Food & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Seafood",
    "Noodles & Rice",
    "Ice cream",
  ];

  const handleOpt = () => {
    SetisOpen((prevState) => !prevState);
  };

  const handleClick = (i, text) => {
    Setname(text);
    SetisOpen(false);
  };

  useEffect(() => {
    const filtered = list.filter((item) =>
      item.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    SetfilteredList(filtered);
  }, [searchKeyword]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/"
        );
        if (response?.data?.data) {
          const countries = response.data.data.map((item) => item.country);
          SetCountryList(countries);
          SetFilteredCountries(countries);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    getCountry();
  }, []);

  useEffect(() => {
    const filtered = countryList.filter((country) =>
      country.toLowerCase().includes(countrySearch.toLowerCase())
    );
    SetFilteredCountries(filtered);
  }, [countrySearch, countryList]);

  const handleCountrySelect = (country) => {
    SetSelectedCountry(country);
    SetCountryDropdownOpen(false);
  };

  return (
    <>
    <div className='w-screen hidden md:flex justify-between items-center font-medium text-slate-400 p-2 px-4'>
      <div className='flex items-center gap-2'>
        <p className='pr-2 border-r-2 h-4 flex justify-center items-center hover:text-green-400 cursor-pointer'>About Us</p>
        <p className='pr-2 border-r-2 h-4 flex justify-center items-center hover:text-green-400 cursor-pointer'>My Account</p>
        <p className='pr-2 border-r-2 h-4 flex justify-center items-center hover:text-green-400 cursor-pointer'>Wishlist</p>
        <p className='pr-2 border-r-2 h-4 flex justify-center items-center hover:text-green-400 cursor-pointer'>Order Tracking</p>
      </div>
      <div>
        <p>Need help? Call US: <span className='text-green-400'>+ 1800 900</span></p>
      </div>
    </div>
      <div className="border-b-2 border-b-slate-100 border-t-2 border-t-slate-100 header w-screen h-16 md:h-24 bg-white flex items-center justify-between p-3">
        <div className="text-3xl md:hidden">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div>
          <img className="h-10 md:h-14" src="./logo.svg" alt="Logo" />
        </div>
        <div className="border-green-200 border-2 hover:border-green-300 rounded-md h-3/4 w-3/6 md:flex justify-start items-center gap-4 hidden transition-all">
          <div
            className="h-5 border-r-2 border-r-gray-300 w-1/4 flex items-center justify-center gap-2 relative"
            onClick={handleOpt}
          >
            <p className="font-semibold select-none cursor-pointer">{name}</p>
            <div className="pt-1 flex justify-center items-center">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div
              className={`absolute ${
                isOpen ? "flex" : "hidden"
              } flex-col gap-2 p-3 top-10 left-0 h-64 w-52 bg-white border-2 border-slate-200 rounded-lg`}
            >
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => SetsearchKeyword(e.target.value)}
                onClick={(e) => e.stopPropagation()} 
                placeholder="Search categories..."
                className="border-green-200 border-2 h-10 outline-none rounded-md p-2 mb-2"
              />
              <ul className="overflow-y-scroll">
                {filteredList.map((item, i) => (
                  <li
                    className="text-slate-400 font-normal p-2 text-sm hover:bg-green-400 hover:text-white cursor-pointer"
                    key={i}
                    onClick={() => handleClick(i, item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between w-3/4 h-full pr-5 ">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-4/5 border-none outline-none"
            />
            <div className="text-2xl cursor-pointer flex justify-center items-center">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
        </div>
        
        <div
          className="relative h-10 w-32 border-2 p-2 rounded-md border-slate-200 md:flex justify-between items-center cursor-pointer hidden"
          onClick={() => SetCountryDropdownOpen(!countryDropdownOpen)}
        >
          <p className="font-semibold text-xs overflow-scroll sc">{selectedCountry}</p>
          <div className="text-sm flex justify-end items-center mt-1">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <div
            className={`absolute ${
              countryDropdownOpen ? "flex" : "hidden"
            } flex-col gap-2 p-3 top-12 left-0 h-64 w-52 bg-white border-2 border-slate-200 rounded-lg`}
          >
            <input
              type="text"
              value={countrySearch}
              onChange={(e) => SetCountrySearch(e.target.value)}
              onClick={(e) => e.stopPropagation()} 
              placeholder="Search country..."
              className="border-green-200 border-2 h-10 outline-none rounded-md p-2 mb-2"
            />
            <ul className="overflow-y-scroll">
              {filteredCountries.map((country, i) => (
                <li
                  className="text-slate-400 font-normal p-2 text-sm hover:bg-green-400 hover:text-white cursor-pointer"
                  key={i}
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-2xl flex gap-4">
          <div className="hidden md:flex md:justify-end md:items-end cursor-pointer">
            <ion-icon name="git-compare-outline"></ion-icon>
            <p className="text-sm text-slate-500 font-semibold">Compare</p>
          </div>
          <div className="md:flex md:justify-end md:items-end cursor-pointer">
            <ion-icon name="heart-outline"></ion-icon>
            <p className="text-sm text-slate-500 hidden md:block font-semibold">
              Wishlist
            </p>
          </div>
          <div className="md:flex md:justify-end md:items-end cursor-pointer">
            <ion-icon name="cart-outline"></ion-icon>
            <p className="text-sm text-slate-500 hidden md:block font-semibold">
              Cart
            </p>
          </div>
          <div className="hidden md:flex md:justify-end md:items-end cursor-pointer">
            <ion-icon name="person-outline"></ion-icon>
            <p className="text-sm text-slate-500 font-semibold">Account</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
