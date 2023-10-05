import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function SearchBar() {
  return (
    <div
      className={`
        flex bg-gray-200 p-2.5 rounded
        focus-within:ring-2 focus-within:ring-blue-300
      `}
    >
      <MagnifyingGlassIcon className="w-5 h-5 text-neutral-500" />

      <input
        type="text"
        id="search"
        name="search"
        placeholder="Buscar..."
        className={`
          bg-gray-200 w-56 ml-2.5 placeholder:text-neutral-500 outline-none
        `}
      />      
    </div>
  );
}

export default SearchBar;