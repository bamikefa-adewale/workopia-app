/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import CustomInput from "../CustomInput";
import CustomTextArea from "../CustomTextArea";
import CustomInputFile from "../customInputFile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplyJobSchema } from "../../../utilitis/Schema";
import { toast } from "react-toastify";
export const ApplyJobModal = ({ isPending }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ApplyJobSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Application submitted successfully!");
    handleOpen();
    reset();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        disabled={isPending}
        className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium cursor-pointer text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
      >
        {isPending ? "Applying..." : " Apply Now"}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <p className="items-center capitalize text-center my-5 text-3xl font-semibold">
          Submit your details
        </p>
        <DialogBody className="h-[32rem] overflow-auto hide-scrollbar">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <CustomInput
                label=" Your Name"
                type="text"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                register={register("name")}
                error={errors.name}
              />
            </div>
            <div className="mb-4">
              <CustomInput
                label="Email Address"
                type="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                register={register("email")}
                error={errors.email}
              />
            </div>

            <div className="mb-4">
              <CustomTextArea
                label="Proposal Details"
                name="proposalDetails"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                register={register("proposalDetails")}
                error={errors.proposalDetails}
              />
            </div>

            <div className="mb-4">
              <CustomInputFile
                label="Upload your CV"
                name="uploadcv"
                accept=".pdf,.doc,.docx"
                register={register("uploadcv")}
                error={errors.uploadcv}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Proposal
            </button>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
};
