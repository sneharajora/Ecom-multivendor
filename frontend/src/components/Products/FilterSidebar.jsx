import React from 'react'
import { useSearchParams } from 'react-router';

const FilterSidebar = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [filters,setFilter] = useState({
        category:"",
        gender:"",
        color:"",
        size:[],
        material:[],
        brand:[],
        minPrice: 0,
        maxPrice: 100,

    });

    const [priceRange,setPriceRange] = useState([0,100]);
    const categories = ["Top Wear","Bottom Wear"];

    const color = [
        "Red",
        "Blue",
        "Black",
        "Green",
        "Yellow",
        "Gray",
        "White",
        "Pink",
        "Beige",
        "Navy",
    ];
     const sizes = ["XS","S","M","L","XL","XXL"];
 

     const material =[
         "Cotton",
         "Wool",
         "Denim",
         "Polyester",
         "Silk",
         "Linen",
         "Viscose",
         "Fleece",
     ];
     constbrands =[
        "Urban Threads",
        "Modern Fit",
        "Street Style",
        "Beach Breeze",
        "Fashioninsta",
        "ChicStyle",
     ];
     const genders = ['Men',"Women"];

     useEffect(()=>{
         const params = Objects.FromEntries([...searchParams]);

         setFilter({
             category: params.category || "",
             gender: params.gender || "",
             color: params.color || "",
             size:params.size ? params.size.split(",") : [],
             material:params.material ? params.material.split(",") : [],
             brand:params.brand? params.brand.split(",") : [],
             minPrice:params.minPrice || 0,
            maxPrice : params.maxPrice || 100,
         });
          setPriceRange([0,params.maxPrice || 100]);
     },[searchParams]);
     
  return (
        
    <div className='p-4'>
        <h className ="text-xl font-medium text-gray-800 mb-4 ">Filter</h>
           {/* // category section */}
           <div className='mb-6'>
               <label className='block text-gray-600 font-medium mb-3'>Category</label>
               {categories.atmap((category)=>(
                   <div>

                   </div>
               ))}
           </div>
    </div>
  )
}

export default FilterSidebar;