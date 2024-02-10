import { useState } from "react";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

const SearchUser = ({ setUsers }) => {
  const [searchData, setSearchData] = useState("");

  const handleInputChange = (e) => {
    setSearchData(e.target.value);

    fetch(`https://dummyjson.com/users/search?q=${searchData}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="search" className="relative">
        <input
          type="text"
          id="search"
          placeholder="Search Name"
          onChange={handleInputChange}
          className="p-2 px-3 border-2 rounded-l-full rounded-r-full focus:outline-sky-300 border-sky-400"
        />
        <CiSearch className="absolute top-[50%] translate-y-[-50%] right-5 text-lg font-medium text-black/60" />
      </label>
    </div>
  );
};

export default SearchUser;

SearchUser.propTypes = {
  setUsers: PropTypes.func,
};
