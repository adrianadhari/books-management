import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-xl w-max bg-white border-1">
      <FaMagnifyingGlass />
      <input
        type="text"
        name="search"
        id="search"
        className="bg-transparent border-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
