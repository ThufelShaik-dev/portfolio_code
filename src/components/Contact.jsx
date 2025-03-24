import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    toast.loading("Sending your message...");
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bpjnrepb", userInfo);
      toast.dismiss();
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      toast.dismiss();
      toast.error("Something went Wrong...");
    }
  };
  return (
    <>
      <div
        className="mx-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        name="Contact"
      >
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <span>Submit your details below—I'll be notified instantly!</span>
          <div className="flex flex-col items-center justify-center mt-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-slate-300 w-96 px-8 py-6 rounded-xl"
            >
              <h1 className="font-semibold text-xl mb-4">Let's Connect</h1>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="shadow rounded-lg border py-2 px-3 bg-white border-gray-300  leading-tight focus:ring-blue-500 focus:outline-none focus:shadow-outline appearance-none"
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="shadow rounded-lg border py-2 px-3 bg-white border-gray-300 leading-tight focus:ring-blue-500 focus:outline-none focus:shadow-outline appearance-none"
                  type="email"
                  name="email"
                  placeholder="Enter a Valid Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="shadow rounded-lg border py-2 px-3 bg-white border-gray-300 leading-tight focus:ring-blue-500 focus:outline-none focus:shadow-outline appearance-none "
                  name="message"
                  placeholder="Write Your Message Here..."
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <button
                type="submit"
                className="w-[100%] hover:bg-green-700 transition-all px-2 py-2 rounded-full bg-green-600 text-white font-bold  "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
