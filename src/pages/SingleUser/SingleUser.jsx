import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

const SingleUser = () => {
  const [user, setUser] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  if (!user) {
    return <Spinner />;
  }

  return (
    <section className="mx-auto my-20 max-w-7xl">
      <div className="flex items-center justify-evenly">
        {/* image part */}
        <div>
          <img src={user.image} alt={user.firstName} />
        </div>

        {/* description text */}
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-medium">
            {user.firstName} {user.lastName}
          </h1>

          <div className="flex items-center gap-10">
            <div className="space-y-3">
              <p>Email </p>
              <p>Street </p>
              <p>City </p>
              <p>Company </p>
            </div>
            <div className="mr-0 space-y-3 text-center">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="space-y-3">
              <p>{user.email}</p>
              <p> {user.address.address}</p>
              <p> {user.address.city}</p>
              <p> {user.company.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleUser;
