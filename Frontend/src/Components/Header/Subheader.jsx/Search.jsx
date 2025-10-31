import { SearchIcon } from "lucide-react"


const Search = () => {
  return (
    <div className='searchBox relative w-[100%] h-[50px] bg-gray-300 rounded-md '>
      <input className='input' type="text" placeholder='Search For Products...' />
      <button className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer h-10 w-10 rounded-full hover:bg-gray-400/30 justify-center flex items-center transition-all">
        <SearchIcon/>
      </button>
    </div>
  )
}

export default Search
