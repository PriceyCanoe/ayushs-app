const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            NewsHub
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Your daily source for trusted news.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © 2026 NewsHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;