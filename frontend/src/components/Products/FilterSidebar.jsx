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

     const handleFilterChange = (e)=>{
           const {name,value,checked,type} = e.target;
           console.log({name,value,checked,type});
     }
     
  return (
        
    <div className='p-4'>
        <h3 className ="text-xl font-medium text-gray-800 mb-4 ">Filter</h3>
           {/* // category section */}
           <div className='mb-6'>
               <label className='block text-gray-600 font-medium mb-3'>Category</label>
               {categories.map((category)=>(
                   <div key ={category} className='flex items-center mb-1'>
                        <input type="radio" name="category" value={category} onChange={handleFilterChange} className='mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'></input>
                        <span className='text-gray-700'>{category}</span>
                   </div>
               ))}
           </div>

           {/* Gender section */}
          <div className='mb-6'>
               <label className='block text-gray-600 font-medium mb-3'>Gender</label>
               {categories.map((gender)=>(
                   <div key ={gender} className='flex items-center mb-1'>
                        <input type="radio" name="category" value={gender} onChange={handleFilterChange} className='mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'></input>
                        <span className='text-gray-700'>{gender}</span>
                   </div>
               ))}
           </div>
           {/* cOLOR filter  */}
          <div className='mb-6'>
               <label className='block text-gray-600 font-medium mb-2'>Color</label>
               <div className='flex flex-wrap gap-2'>
                 {color.map((color)=>(
                  <button key={color} name="color" value={color} onChange={handleFilterChange} className='w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105' style={{backgroundColor: color.toLowerCase()}}></button>
               ))}
               </div>
           </div>
           {/* size filter */}
            <div className='mb-6'>
              <label className='block text-gray-600 font-medium mb-2'>Size</label>
                {sizes.map((size)=>(
                    <div key={size} className='flex items-center mb-1'>
                       <input type="checkbox" name="size" value={size} onChange={handleFilterChange} className='mr-2 h-4 w-4 text-blue-400 border-gray-300' />
                        <span className='text-gray-700'>{size}</span>
                    </div>
                ))}
            </div>

            {/* Material filter */}
             
            <div className='mb-6'>
              <label className='block text-gray-600 font-medium mb-2'>Material</label>
                {sizes.map((material)=>(
                    <div key={material} className='flex items-center mb-1'>
                       <input type="checkbox" name="material" value={material} onChange={handleFilterChange} className='mr-2 h-4 w-4 text-blue-400 border-gray-300' />
                        <span className='text-gray-700'>{material}</span>
                    </div>
                ))}
            </div>

            {/* brand filter */}
             <div className='mb-6'>
              <label className='block text-gray-600 font-medium mb-2'>Brand</label>
                {brand.map((brand)=>(
                    <div key={brand} className='flex items-center mb-1'>
                       <input type="checkbox" name="brand" value={brand} onChange={handleFilterChange} className='mr-2 h-4 w-4 text-blue-400 border-gray-300' />
                        <span className='text-blue-700'>{brand}</span>
                    </div>
                ))}
              </div>
                {/* Price range filter */}
                <div className='mb-4'>
                    <label className='block text-gray-600 font-medium mb-2'>
                        Price Range
                    </label>
                    <input type="range" name="priceRange" min={0} max={100} className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer' />
                </div>
            <div className='flex justify-between text-gray-600 mt-2'>
                 <span>$0</span>
                 <span>${priceRange[1]}</span>
            </div>
    </div>
  )
}

export default FilterSidebar;