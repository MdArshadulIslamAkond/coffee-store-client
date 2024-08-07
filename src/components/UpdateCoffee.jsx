import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, supplier, category, chef, taste, price, photo} = coffee;

    const handleUpdateCoffee =(e) => {
        e.preventDefault();
        const formAddCoffee = e.currentTarget;
        console.log(formAddCoffee)
        const form = new FormData(formAddCoffee);
        const name = form.get('name');
        const supplier = form.get('supplier');
        const category = form.get('category');
        const chef = form.get('chef');
        const taste = form.get('taste');
        const price = form.get('price');
        const photo = form.get('photo');
        const updatedCoffee = {name: name, supplier: supplier, category: category, chef: chef, test: taste, price: price, photo:photo}
        console.log(updatedCoffee);
        // Your logic to add new coffee goes here
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(response => response.json())
        .then(data =>{
            console.log('Success:', data);
            if(data.updatedCount){
                Swal.fire({
                    title: 'success',
                    text: data.message,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        });
    }
    return (
        <div>
        <Header/>
         <div className="bg-[url('/src/assets/images/more/11.png')]">
         <div className="max-w-7xl mx-auto">
         <div className="my-12">
             <Link to='/' className="flex items-center space-x-4 py-2">
             <FaArrowLeft /> <span>Back to home</span>
             </Link>
         </div>
<div className="bg-[#F4F3F0]">
<div className="mx-32">
<h2 className="text-3xl text-center">Update Existing Coffee Details</h2>
<p className="text-center px-24">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
<div className="hero bg-base-200">

 <div className="card w-full">
 <form onSubmit={handleUpdateCoffee} className="card-body p-0 rounded-none">
     <div className="flex gap-6 ">
         <div className="w-1/2">
         <div className="form-control">
         <label className="label">
             <span className="label-text">Name</span>
         </label>
         <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered" required />
         </div>
         <div className="form-control">
         <label className="label">
             <span className="label-text">Supplier</span>
         </label>
         <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered" required />
         </div>
         <div className="form-control">
         <label className="label">
             <span className="label-text">Category</span>
         </label>
         <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered" required />
         </div>
         </div>
         <div className="w-1/2">
         <div className="form-control">
         <label className="label">
             <span className="label-text">Chef</span>
         </label>
         <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered" required />
         </div>
         <div className="form-control">
         <label className="label">
             <span className="label-text">Taste</span>
         </label>
         <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered" required />
         </div>
         <div className="form-control">
         <label className="label">
             <span className="label-text">Price</span>
         </label>
         <input type="text" name="price" defaultValue={price} placeholder="Enter coffee details" className="input input-bordered" required />
         </div>
         </div>
     </div>
     <div className="form-control">
         <label className="label">
             <span className="label-text">Photo</span>
         </label>
         <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered" required />
         </div>
     <div className="form-control mt-6">
     <button className="btn btn-primary bg-[#D2B48C]">Update Coffee Details</button>
     </div>
 </form>
 </div>

</div>
</div>
</div>
         </div>
         </div>
          <Footer/>
     </div>
    );
};

export default UpdateCoffee;