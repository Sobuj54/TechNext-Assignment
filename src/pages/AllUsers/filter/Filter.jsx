import PropTypes from "prop-types";
import SearchUser from "../../../components/SearchUser";

const Filter = ({ users, setUsers, sortBy, setSortBy }) => {
  const handleSelectedValue = (e) => {
    setSortBy(e.target.value);
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
              defaultValue={sortBy}
              className="w-40 h-10 text-center focus:outline-none ml-2">
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="company">Company Name</option>
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
  sortBy: PropTypes.string,
  setSortBy: PropTypes.func,
};
