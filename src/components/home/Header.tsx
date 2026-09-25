const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-2xl font-bold text-white">
            +
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Medi<span className="text-emerald-500">Care</span>
            </h1>

            <p className="text-[10px] text-slate-500">
              Health • Wellness • For You
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          <a
            href="#"
            className="border-b-2 border-emerald-500 py-7 text-sm font-semibold text-emerald-600"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-emerald-500"
          >
            Medicines
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-emerald-500"
          >
            Health & Wellness
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-emerald-500"
          >
            About Us
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-emerald-500"
          >
            Contact
          </a>

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden h-10 w-64 items-center gap-2 rounded-full bg-slate-100 px-4 md:flex">

            <span className="text-xl text-slate-500">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search medicines, brands..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

          </div>

          {/* Cart */}
          <button className="relative text-xl text-slate-700 hover:text-emerald-500">
            🛒

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          {/* Login */}
          <button className="hidden text-sm font-semibold text-slate-700 sm:block">
            ♙ Login / Sign Up
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;