import { useLoaderData, useNavigate } from 'react-router-dom'
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { useState } from 'react'
import CoffeeCard from '../CoffeeCard/CoffeeCard';
const Home = () => {
    const navigation = useNavigate();
    const loadedCoffees = useLoaderData();
    const[coffees, setCoffees] = useState( loadedCoffees );
    
    const handleAddCoffee = ()=>{
      navigation('/addCoffee');
    }
    return (
        <div>
            <div className='max-w-7xl mx-auto mt-32'>
     <h1 className='text-6xl text-[#331A15] text-center mb-4'>Our Popular Products</h1>
     <button onClick={handleAddCoffee} className='flex bg-[#E3B577] p-4 btn mx-auto '><span className='me-4 text-white'>Add Coffee</span><BiSolidCoffeeAlt className='text-white' /></button>
      <div className='grid md:grid-cols-2 gap-6 mt-12'>
          {
            coffees.map(coffee =>{
              return <CoffeeCard key={coffee._id} coffee ={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
            })
          }
      </div>

     </div>
        </div>
    );
};

export default Home;