import axios from "axios";
import React, { useState } from "react";
import fetcher from "../../api";
import { useForm } from "react-hook-form";

const AddFood = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      img: imageURL,
    };

    const res = await fetcher.post("foods", serviceData);
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
        <h1 className="text-center font-bold text-4xl">Add Food</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
            <label htmlFor="foodName" class="label">
              <span class="label-text">Food Name</span>
            </label>
            <input
              type="text"
              id="foodName"
              class="input input-bordered"
              {...register("name")}
            />
          </div>
          <div className=" flex lg:flex-row flex-col gap-5">
            <div class="w-full">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="number"
                min="10"
                class="input input-bordered w-full"
                {...register("price")}
              />
            </div>
            <div class="w-full">
              <label class="label">
                <span class="label-text">Available</span>
              </label>
              <input
                type="number"
                min="10"
                class="input input-bordered w-full"
                {...register("available")}
              />
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <textarea
              type="text"
              class="input input-bordered lg:h-[90px] h-[50px] pt-3"
              {...register("description")}
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
              {!imageURL ? "Upload Image" : "Ready To Upload"}
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
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
