import { useEffect, useState } from "react";
import MiniHero from "../../components/MiniHero";
import UserCard from "../../components/UserCard";
import Spinner from "../../components/Spinner";
import Filter from "./filter/Filter";
import useSortedUsers from "../../hooks/useSortedUsers";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const sortedUsers = useSortedUsers(users, sortBy);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const filterProps = {
    users,
    setUsers,
    sortBy,
    setSortBy,
  };

  return (
    <div>
      <MiniHero title="All Users" subTitle="Home > All Users" />
      <Filter {...filterProps} />

      {users.length > 0 ? (
        <div className="grid grid-cols-1 px-5 lg:px-0 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto mb-10">
          {sortedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AllUsers;
