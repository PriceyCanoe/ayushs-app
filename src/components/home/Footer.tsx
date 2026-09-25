const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-xl font-bold">
                +
              </div>

              <div>

                <h2 className="font-bold">
                  MediCare
                </h2>

                <p className="text-xs text-slate-400">
                  Health • Wellness • For You
                </p>

              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Your trusted online pharmacy for genuine medicines,
              wellness products and healthcare support.
            </p>

          </div>


          {/* Links */}
          <div>

            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-400">

              <a href="#" className="hover:text-white">
                Home
              </a>

              <a href="#" className="hover:text-white">
                Medicines
              </a>

              <a href="#" className="hover:text-white">
                Health & Wellness
              </a>

              <a href="#" className="hover:text-white">
                About Us
              </a>

              <a href="#" className="hover:text-white">
                Contact
              </a>

            </div>

          </div>


          {/* Social */}
          <div>

            <h3 className="font-semibold">
              Follow Us
            </h3>

            <div className="mt-4 flex gap-3">

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 hover:bg-emerald-500">
                f
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 hover:bg-emerald-500">
                ◎
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 hover:bg-emerald-500">
                𝕏
              </button>

            </div>

          </div>

        </div>


        <div className="mt-10 border-t border-slate-700 pt-6 text-xs text-slate-500">
          © 2026 MediCare. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;