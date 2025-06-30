import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm,setSearch] = useState("");
    const [isOpen,setIsOpen] = useState(false);

        const handleSearchToggle = ()=>{
            setIsOpen(!isOpen);
        };

        const handleSearch = (e)=>{
            e.preventDefault();
            console.log("Search Term:" ,searchTerm);
            setIsOpen(false);
        }

  return (
    <div className= {`flex items-center justify-center w-full transition-all duration-300 ${isOpen? "absolute top-0 left-0 w-full bg-white h-24 z-50":"w-auto"}`}>
        {isOpen ?(
            <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
                 <div className='realative w-1/2'>
                   <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e)=> setSearch(e.target.value)}
                      className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 '
                   />
                   {/*search icon */}
                   <button type="submit" className='absolute right top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-700'>
                     <HiMagnifyingGlass className='h-6 w-6'/>
                   </button>
                 </div>
                  {/*close iconn */}
                  <button type="button" onClick={handleSearchToggle} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-700'>
                     <HiMiniXMark className='h-6 w-6'/>
                  </button>
            </form>
        ):(
            <button type='button' className='absolute right-2 top-1/9 transform -translate-y-1/2 text-gray-600 hover:text-gray-800' onClick={handleSearchToggle}>
                <HiMagnifyingGlass className='h-6 w-6 '/>
            </button>
        )}
    </div>
  );
}

export default SearchBar