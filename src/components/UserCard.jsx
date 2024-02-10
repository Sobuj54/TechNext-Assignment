import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, image, firstName, lastName, email, address, company } = user;
  return (
    <div className="overflow-hidden border-2 border-teal-200 rounded-md shadow-lg mt-7 shadow-teal-200">
      <img src={image} alt={firstName} className="object-cover w-full h-72" />
      <div className="h-full p-4 bg-slate-200">
        <h5 className="py-2 text-lg font-bold">
          <Link to={`/user/${id}`}>
            {firstName} {lastName}
          </Link>
        </h5>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-medium">Email</span> : {email}
          </p>
          <p>
            <span className="font-medium">Street</span> : {address.address}
          </p>
          <p>
            <span className="font-medium">City</span> : {address.city}
          </p>
          <p>
            <span className="font-medium">Company</span> : {company.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.object,
};
