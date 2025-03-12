
export const CustomProfileDetails2 = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-gray-100">
        <div className="p-2 ">
          <p className="text-3xl">Marketting Specialist</p>{" "}
          <span className="text-gray-500">Part-Time</span>
        </div>
        <div className=" flex gap-5  ">
          <button
            className="py-2 px-6 rounded-md text-white w-full bg-blue-600 
             mt-2"
          >
            Edit
          </button>
          <button
            className="py-2 px-6 rounded-md text-white w-full bg-red-600 
             mt-2"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bg-slate-100 p-2 mt-3">
        <h4 className="mt-2 mb-4 text-2xl">Applicants</h4>
        <h1>No applicants for this job</h1>
      </div>
    </>
  );
};
