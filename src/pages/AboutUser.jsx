import { useAuth } from "../contexts/AuthContext";
import avarter from "../assets/avarter.png";
import CustomInput from "../componenets/ui/CustomInput";
import CustomInputFile from "../componenets/ui/customInputFile";
import CustomProfileDetails from "../UserProfile/CustomProfileDetails";

const AboutUser = () => {
  const { auth } = useAuth();
  return (
    <section className="flex gap-5 justify-center items-center w-[70%] container mx-auto ">
      <div className="bg-white p-5 rounded-lg shadow-md w-full ">
        <div className="">
          <h2 className="text-4xl text-center font-bold mb-4">
            Profile Information
          </h2>
          <div className="flex justify-center">
            <img
              src={avarter}
              alt="avarter"
              className="h-24 w-24 rounded-full"
            />
          </div>
          <form>
            <div className="mt-3">
              <CustomInput label="Name" placeholder={auth.fullName} />
            </div>
            <div className="mt-3">
              <CustomInput label="Email Address" placeholder={auth.email} />
            </div>
            <div className="mt-3">
              <CustomInputFile
                label="Upload Profile"
                accept=".pdf,.doc,.docx"
              />
            </div>
            <button
              className="py-3 w-full rounded-md text-white bg-green-600 
             mt-2"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md w-full">
        <CustomProfileDetails />
      </div>
    </section>
  );
};

export default AboutUser;
