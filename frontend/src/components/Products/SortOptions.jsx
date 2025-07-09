import React from 'react'
import {useSearchParams} from "react-router";

const SortOptions = () => {
        const [searchParams,setSearchParams] = useSearchParams();
          
        const handelSortChange = () =>{
              const sortBy = e.target.value;
               searchParams.set("sortBy", sortBy);
               setSearchParams(searchParams);
        };

      
         
  return (
    <div className='mb-4 flex items-center  justify-end'>
     <select id="sort" className='border p-2 rounded-md focus:outline-none'>
       onChange={handelSortChange}
       value={searchParams.get("sortBy") || ""}
       <option value="">Default</option>
       <option value="priceAsc">Price: Low to High</option>
       <option value="priceDesc">Popularity</option>
     </select>
    </div>
  )
}

export default SortOptions  