import { useJobForm } from "../hooks/useJobForm";
import CustomTextArea from "../componenets/ui/CustomTextArea";
import CustomSelect from "../componenets/ui/CustomSelect";
import CustomInput from "../componenets/ui/CustomInput";

const JobPost = () => {
  const { register, handleSubmit, onSubmit, handleCancel, errors, isPending } =
    useJobForm();

  return (
    <section className="flex justify-center items-center ">
      <div className="bg-white p-5 rounded-lg shadow-md  w-[70%] md:w-[40%] mx-6">
        <h2 className="text-4xl text-center font-bold mb-4">
          Create Job Listing
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-[800px] overflow-y-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">
            Job Info
          </h2>

          <div className="mb-4">
            <CustomInput
              label="Job Title"
              type="text"
              name={"jobTitle"}
              placeholder="Front-End Developer"
              register={register("jobTitle")}
              error={errors.jobTitle}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomTextArea
              label="Job Description"
              placeholder="We are looking for a talentedand passionate
                 Frontend "
              register={register("jobDescription")}
              error={errors.jobDescription}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Annual Salary"
              type="number"
              placeholder="Enter Annual Salary"
              register={register("annualSalary")}
              error={errors.annualSalary}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Requirements"
              type="text"
              placeholder="Bachelor's degree in computer science"
              register={register("requirements")}
              error={errors.requirements}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomTextArea
              label="Benefits"
              placeholder="Health insurance, 401k, paid time off"
              register={register("benefit")}
              error={errors.benefit}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput //new added
              label="Tags"
              type="text"
              placeholder="development, coding, python, reactjs, etc"
              register={register("tags")}
              error={errors.tags}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomSelect
              label="Job Type" //new added
              options={[
                { value: "full-time", label: "Full-Time" },
                { value: "part-time", label: "Part-Time" },
                { value: "freelance", label: "Freelance" },
                { value: "internship", label: "Internship" },
              ]}
              register={register("jobType")}
              error={errors.jobType}
            />
          </div>

          <div className="mb-4">
            <CustomSelect
              label="Remote" //new added
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              register={register("remote")}
              error={errors.remote}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Address"
              type="text"
              placeholder="e.g., Johnson Rd Apt 11B"
              register={register("address")}
              error={errors.address}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="State"
              type="text"
              placeholder="e.g., TX"
              register={register("state")}
              error={errors.state}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="City"
              type="text"
              placeholder="e.g., Iowa Park"
              register={register("city")}
              error={errors.city}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Zip Code" //new added
              type="number"
              placeholder="e.g., 65678"
              register={register("zipCode")}
              error={errors.zipCode}
              className="w-full "
            />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">
            Company Info & Location
          </h2>

          <div className="mb-4">
            <CustomInput
              label="Company Name"
              type="text"
              placeholder="e.g., Tech Corp"
              register={register("companyName")}
              error={errors.companyName}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomTextArea //new added
              label="Company Description"
              placeholder="Describe your company"
              register={register("companyDescription")}
              error={errors.companyDescription}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Company Website" //new added
              type="text"
              placeholder="e.g., www.techcorp.com"
              register={register("companyWebsite")}
              error={errors.companyWebsite}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Company Phone"
              type="number"
              placeholder="e.g., 1234567890"
              register={register("number")}
              error={errors.number}
              className="w-full "
            />
          </div>

          <div className="mb-4">
            <CustomInput
              label="Email Address"
              type="email"
              placeholder="e.g., info@techcorp.com"
              register={register("emailAddress")}
              error={errors.emailAddress}
              className="w-full "
            />
          </div>

          {/* <div className="mb-4">
            <CustomInputFile //new added
              label="Upload Job Description (PDF/Docx)"
              register={register("jobFile")}
              error={errors.jobFile}
              accept=".pdf,.doc,.docx"
              className="w-full "
            />
          </div> */}

          <button
          disabled={isPending}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600
               text-white px-4 py-2 my-3 rounded focus:outline-none"
          >
            {isPending ? "Creating..." : "Create"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="block text-center w-full bg-red-500 hover:bg-red-600
               text-white px-4 py-2 rounded focus:outline-none"
          >
            Cancel
          </button>
        </form>
      </div>
    </section>
  );
};

export default JobPost;
