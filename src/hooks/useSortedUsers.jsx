const useSortedUsers = (users, sortBy) => {
  // sorted users by name,email and company name
  const sortedUsers = [...users].sort((user1, user2) => {
    if (sortBy === "name") {
      if (user1.firstName > user2.firstName) return 1;
      if (user1.firstName < user2.firstName) return -1;
      return 0;
    } else if (sortBy === "email") {
      if (user1.email > user2.email) return 1;
      if (user1.email < user2.email) return -1;
      return 0;
    } else {
      if (user1.company.name > user2.company.name) return 1;
      if (user1.company.name < user2.company.name) return -1;
      return 0;
    }
  });

  return sortedUsers;
};

export default useSortedUsers;
