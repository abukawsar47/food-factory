import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";

const AddEmployee = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      img: imageURL,
    };

    const res = await fetcher.post("employee", serviceData);
    console.log(res);
    reset();
    setImageURL("");
  };

  const handleUploadImage = (event) => {
    setLoading(true);
    const image = event.target.files[0];

    const formData = new FormData();

    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=cf4510a43c189be9cf7b260cd3d16da3",
        formData
      )
      .then((res) => {
        setImageURL(res.data.data.display_url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="card flex-shrink-0 w-full max-w-2xl md:shadow-2xl bg-base-100  lg:my-16">
      <div class="card-body">
        <h1 className="text-center font-bold text-4xl">Add Employee</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            <div class="w-full">
              <label htmlFor="employeeName" class="label">
                <span class="label-text">Employee Name</span>
              </label>
              <input
                type="text"
                id="employeeName"
                class="input input-bordered w-full"
                {...register("name")}
              />
            </div>
            <div class="w-full">
              <label class="label">
                <span class="label-text">Number</span>
              </label>
              <input
                type="tel"
                minLength="11"
                class="input input-bordered w-full"
                {...register("number")}
              />
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              class="input input-bordered w-full"
              {...register("email")}
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Role</span>
            </label>
            <input
              type="text"
              class="input input-bordered "
              {...register("role")}
            />
          </div>

          <div class="form-control">
            <label
              htmlFor="image"
              class={
                loading
                  ? "btn btn-primary loading mt-5"
                  : "btn btn-primary mt-5"
              }
            >
              {!imageURL ? "Upload Employee Image" : "Ready To Upload"}
            </label>
            <input
              type="file"
              id="image"
              class="input input-bordered hidden"
              onChange={handleUploadImage}
            />
          </div>
          <div class="form-control mt-6">
            <button
              type="submit"
              class="btn btn-primary"
              disabled={!imageURL ? true : false}
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
