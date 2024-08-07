import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { FaArrowLeft } from "react-icons/fa";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee =(e) => {
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
        const newCoffee = {name: name, supplier: supplier, category: category, chef: chef, taste: taste, price: price, photo:photo}
        console.log(newCoffee);
        // Your logic to add new coffee goes here
        fetch("http://localhost:5000/coffees", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(response => response.json())
        .then(data =>{
            console.log('Success:', data);
            if(data.insertedId){
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
<h2 className="text-2xl md:text-3xl text-center">Add New Coffee</h2>
<p className="text-center md:px-24">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
<div className="hero bg-base-200">

    <div className="card w-full">
    <form onSubmit={handleAddCoffee} className="card-body p-0 rounded-none">
        <div className="md:flex gap-6 ">
            <div className="md:w-1/2">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Supplier</span>
            </label>
            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Category</span>
            </label>
            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered" required />
            </div>
            </div>
            <div className="md:w-1/2">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Chef</span>
            </label>
            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Taste</span>
            </label>
            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <input type="number" name="price" placeholder="Enter coffee price" className="input input-bordered" required />
            </div>
            </div>
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Photo</span>
            </label>
            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" required />
            </div>
        <div className="form-control mt-6">
            <input type="submit" value="Add Coffee" className="btn btn-primary bg-[#D2B48C]" />
        {/* <button className="btn btn-primary bg-[#D2B48C]">Add Coffee</button> */}
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

export default AddCoffee;