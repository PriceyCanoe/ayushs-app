const Hero = () => {
  return (
    <section className="overflow-hidden bg-linear-to-r from-sky-50 via-white to-cyan-50">

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr_0.8fr] lg:py-20">

        {/* Text */}
        <div>

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
            Your Health, Our Priority
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl">
            Genuine Medicines
            <br />

            <span className="text-emerald-500">
              Delivered To Your Door
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Buy medicines online, get them delivered safely and
            conveniently — because your health matters.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-600">
              Shop Now →
            </button>

            <button className="rounded-full border-2 border-emerald-500 bg-white px-7 py-3 text-sm font-bold text-emerald-600 hover:bg-emerald-50">
              Upload Prescription
            </button>

          </div>

        </div>

        {/* Medicine illustration */}
        <div className="relative flex min-h-[350px] items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-cyan-100" />

          <div className="relative z-10">

            <div className="mx-auto h-7 w-28 rounded-t-lg bg-slate-200 shadow" />

            <div className="flex h-48 w-36 items-center justify-center rounded-b-3xl rounded-t-xl bg-white shadow-xl">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-5xl text-slate-400">
                +
              </div>

            </div>

          </div>

          <div className="absolute bottom-16 left-10 rotate-[-15deg] space-x-2">
            <span className="inline-block h-5 w-10 rounded-full bg-blue-400" />
            <span className="inline-block h-5 w-10 rounded-full bg-blue-300" />
            <span className="inline-block h-5 w-10 rounded-full bg-white shadow" />
          </div>

        </div>

        {/* Features */}
        <div className="space-y-7">

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              🛡️
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                100% Genuine Medicines
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Directly from trusted pharma partners
              </p>
            </div>
          </div>


          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              🚚
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Fast & Safe Delivery
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                At your doorstep, on time
              </p>
            </div>
          </div>


          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              👨‍⚕️
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Expert Support
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Pharmacists available for your queries
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;