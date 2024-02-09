import PropTypes from "prop-types";
import { useState } from "react";
import SearchUser from "../../../components/SearchUser";

const Filter = ({ users, setUsers }) => {
  const [value, setValue] = useState("default");
  const handleSelectedValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <section className="flex items-center justify-between h-24 px-10 bg-orange-100">
      {/* left part */}
      <div className="flex items-center gap-6">
        <p>Showing {users.length} results</p>
      </div>

      <SearchUser setUsers={setUsers} />

      {/* right part */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <label htmlFor="sort">
            Sort by
            <select
              id="sort"
              onChange={handleSelectedValue}
              defaultValue={value}
              className="w-40 h-10 text-center focus:outline-none ml-2">
              <option value="default">Default</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room</option>
              <option value="Dining">Dining</option>
              <option value="Office">Office</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Kids">Kids</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};
