/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// https://i.imghippo.com/files/MbvYR1721193133.png
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", data.message, "success");
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          })
          .catch((error) => console.error("Error:", error));
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl">
      <figure className="">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body flex-row justify-between ms-10">
        <div>
          <h2 className="card-title">
            <span className="text-xl font-semibold">Name:</span>{" "}
            <span className="text-base">{name}</span>
          </h2>
          <h2 className="card-title">
            <span className="text-xl font-semibold">Chef:</span>{" "}
            <span className="text-base">{chef}</span>
          </h2>
          <h2 className="card-title">
            <span className="text-xl font-semibold">Price:</span>{" "}
            <span className="text-base">{price} Taka</span>
          </h2>
        </div>

        {/* <p>Click the button to watch on Jetflix app.</p> */}
        <div className="card-actions flex-col space-y-2 ">
          <button className="btn bg-[#D2B48C] btn-square">
            <TiEye className="text-xl text-white" />
          </button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn bg-[#3C393B] btn-square">
              <MdEdit className="text-xl text-white" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#EA4744] btn-square"
          >
            <MdDelete className="text-xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
