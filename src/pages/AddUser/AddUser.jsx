import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../../components/InputField";

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const address = form.address.value;
    const company = form.company.value;
    const image = form.image.value;

    const userData = { firstName, lastName, email, address, company, image };

    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id > 100) {
          toast.success("User was successfully added !", {
            position: "top-center",
          });
          e.target.reset();
        }
      });
  };

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Add an User
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Provide Following Details
              </h3>

              <form onSubmit={handleSubmit} className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <InputField
                    title="First Name"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter Your First Name"
                  />

                  <InputField
                    title="Last Name"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                  />

                  <InputField
                    title="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                  />

                  <InputField
                    title="Address"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your City"
                  />

                  <InputField
                    title="Company Name"
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Enter Your Company Name"
                  />
                  <InputField
                    title="Image"
                    type="url"
                    name="image"
                    id="image"
                    placeholder="Enter Image URL"
                  />

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                      Add User
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AddUser;
