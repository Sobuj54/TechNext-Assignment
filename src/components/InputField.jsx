import PropTypes from "prop-types";

const InputField = ({ title, type, name, id, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="text-base font-medium text-gray-900">
        {" "}
        {title}{" "}
      </label>
      <div className="mt-2.5 relative">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required
          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
        />
      </div>
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};
