const AppBanner = () => {
  return (
    <section className="pb-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl bg-sky-50 px-8 py-8 md:flex-row">

          <div className="flex items-center gap-6">

            <div className="text-7xl">
              📱
            </div>

            <div>

              <p className="text-sm font-semibold text-emerald-500">
                Healthy Living Made Easier
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-800">
                Download Our Mobile App
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Order medicines, track your delivery, manage
                prescriptions and more.
              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <button className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white">
              ▶ Google Play
            </button>

            <button className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white">
               App Store
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AppBanner;