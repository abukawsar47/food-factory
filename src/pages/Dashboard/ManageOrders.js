import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import DeleteOrderModal from "../Home/modal/DeleteOrderModal";
// import { Link } from "react-router-dom";
// import { signOut } from "firebase/auth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const [modalData, setModalData] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?.consumerEmail=${user.email}`)
        .then((res) => {
          console.log("res", res);

          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <div className="lg:md:mx-20 lg:md:my-7 mx-6 my-3">
      <h2 className="font-bold my-2">Manage Orders: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Order Quantity</th>
              <th>Price</th>
              <th>Order Cancel</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {orders.map((food, index) => (
              <tr key={food?._id}>
                <th>{index + 1}</th>
                <td className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={food?.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </td>
                <td>{food?.name}</td>
                <td>{food?.orderQuantity}</td>
                <td>{food?.price * food?.orderQuantity}</td>

                <td>
                  {/*   {food?.pricePerUnit && !food.paid && (
                    <label
                      onClick={() => {
                        setModalData(food);
                      }}
                      htmlFor="delete-modal"
                      className="btn modal-button btn-xs btn-error "
                    >
                      Cancel
                    </label>
                  )} */}
                  <label
                    onClick={() => {
                      setModalData(food);
                    }}
                    htmlFor="delete-modal"
                    className="btn modal-button btn-xs btn-error "
                  >
                    Cancel
                  </label>
                  {food?.pricePerUnit && food.paid && (
                    <div>
                      <button className="btn btn-xs btn-success">Paid</button>
                    </div>
                  )}
                </td>
                <td>
                  {/*  {food?.pricePerUnit && !food.paid && (
                    <Link to={`/dashboard/payment/${food?._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )} */}
                  <button className="btn btn-xs btn-success">pay</button>
                  {/*    {food?.pricePerUnit && food.paid && (
                    <div className="border border-success p-2 rounded">
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id: <br />
                        <small className="text-success">
                          {food.transactionId}
                        </small>
                      </p>
                    </div>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalData && (
        <DeleteOrderModal
          modalData={modalData}
          setModalData={setModalData}
          url={`http://localhost:5000/myOrders/${modalData._id}`}
        />
      )}
    </div>
  );
};

export default MyOrders;
