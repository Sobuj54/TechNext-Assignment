import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spinner;
