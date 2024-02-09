import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, image, firstName, lastName, email, address, company } = user;
  return (
    <div className="overflow-hidden mt-7">
      <img src={image} alt={firstName} className="object-cover w-full h-72" />
      <div className="p-4 bg-slate-200 h-full">
        <h5 className="py-2 text-lg font-bold">
          <Link to={`/user/${id}`}>
            {firstName} {lastName}
          </Link>
        </h5>
        <div className="flex flex-col gap-2">
          <p className="">Email : {email}</p>
          <p className="">Street : {address.address}</p>
          <p className="">City : {address.city}</p>
          <p className="">Company : {company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.object,
};
