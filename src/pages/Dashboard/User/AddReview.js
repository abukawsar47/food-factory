import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [review, setReview] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);
  // console.log(user);

  const handleReview = handleSubmit(async (data) => {
    const review = {
      img: user?.photoURL,
      name: user?.displayName,
      user: user?.email,
      comment: data?.comment,
      ratting: data?.ratting,
    };
    console.log(user);
    console.log(review);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        setReview(result);
        console.log(result);
        /*   if (result?.insertedId) {
          toast.success("Successfully placed your Review!");
        } */
        reset();
      });
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card flex-shrink-0 w-full max-w-2xl md:shadow-2xl bg-base-100  lg:my-16">
        <div className="card-body">
          <h1 className="text-center font-bold text-4xl">Add Review</h1>
          <form onSubmit={handleReview}>
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>

                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  {...register("name")}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>

                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  {...register("user")}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Profession</span>
                </label>

                <input
                  type="text"
                  placeholder="Your Profession"
                  {...register("profession", { required: true })}
                  className="input input-bordered w-full"
                />

                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.profession?.type === "required" &&
                      "Profession is required"}
                  </span>
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Ratting (1 to 5)</span>
                </label>

                <input
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Ratting "
                  {...register("ratting", { required: true })}
                  className="input input-bordered w-full"
                />

                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.ratting?.type === "required" &&
                      "Ratting is required"}
                  </span>
                </label>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Comment (Minimum 20 and Maximum 200 Word)
                </span>
              </label>

              <textarea
                type="text"
                maxLength="200"
                minLength="20"
                placeholder="Your Comment... "
                {...register("review", {
                  required: true,
                  maxLength: 200,
                  minLength: 20,
                })}
                className="input input-bordered w-full pt-2 h-[90px]"
              />

              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.review?.type === "required" && "review is required"}
                </span>
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-primary text-white w-full"
              value="Review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
