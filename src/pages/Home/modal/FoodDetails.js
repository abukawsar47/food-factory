import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import fetcher from "../../../api";
import auth from "../../../firebase.init";

const FoodDetails = ({ foodDetails, setFoodDetails }) => {
  const { name, price, description, available, img, _id } = foodDetails;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [user] = useAuthState(auth);

  const handleOrder = async (data) => {
    // e.preventDefault();

    const order = {
      productId: _id,
      img: img,
      name: name,
      price: price,
      consumerEmail: user?.email,
      consumerName: user?.displayName,
      orderQuantity: data?.orderQuantity,
      number: data?.number,
      address: data?.address,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        /*  if (result?.insertedId) {
          toast.success("Successfully placed your order!");
        } */
        reset();
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-4xl">
          <label
            onClick={() => {
              setFoodDetails(null);
            }}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmit(handleOrder)}
            className="flex flex-col lg:flex-row items-center "
          >
            <div className="">
              <img
                className="w-full"
                src={img}
                alt="food"
                {...register("img")}
              />
            </div>
            <div className="lg:ml-5">
              <h3 className="text-2xl font-bold my-1">{name}</h3>
              <p className="py-2 text-md font-bold">
                Price: <span className="text-primary">${price}</span>
              </p>
              <p className="py-2 text-md font-bold">
                Available: <span className="text-primary">${available}</span>
              </p>
              <p className="py-1">{description}</p>
              <div className="form-control w-full max-w-md my-1">
                <label className="label">
                  <strong className="label-text text-md font-bold my-1">
                    Additional Info
                  </strong>
                </label>
                <div className="flex flex-col lg:flex-row gap-3">
                  <div>
                    <input
                      type="text"
                      name="address"
                      min="1"
                      max={available}
                      placeholder="Your Address"
                      required
                      className="input input-sm input-bordered w-full"
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="number"
                      length="11"
                      placeholder="Your Number"
                      required
                      className="input input-sm input-bordered w-full"
                      {...register("number", { required: true })}
                    />
                  </div>
                </div>
                <label className="label">
                  <strong className="label-text text-md font-bold my-1">
                    Order Quantity
                  </strong>
                </label>
                <div className="flex flex-col lg:flex-row gap-3">
                  <div>
                    <input
                      type="number"
                      name="orderQuantity"
                      min="1"
                      max={available}
                      required
                      className="input input-sm input-bordered w-full"
                      {...register("orderQuantity", { required: true })}
                    />
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.order?.type === "required" &&
                          "Order Quantity is required"}
                        {errors?.order?.message}
                      </span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    disabled={errors?.order}
                    className="btn btn-sm btn-primary hover:btn-secondary duration-1000 font-bold "
                    value="Order Now"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
