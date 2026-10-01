const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-red-600">
          NewsHub
        </h1>

        <nav className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#" className="text-red-600">Home</a>
          <a href="#" className="hover:text-red-600">World</a>
          <a href="#" className="hover:text-red-600">Fact check</a>
        </nav>

        <button className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100">
          Search
        </button>
      </div>
    </header>
  );
};

export default Navbar;