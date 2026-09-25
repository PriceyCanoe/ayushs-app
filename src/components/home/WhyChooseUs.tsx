const benefits = [
  {
    icon: "🛡️",
    title: "100% Genuine Products",
    text: "We source only from licensed manufacturers.",
  },
  {
    icon: "🚚",
    title: "Quick Delivery",
    text: "Get your medicines at your doorstep.",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    text: "Our team is always here to help.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    text: "Multiple payment options for your convenience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-cyan-50 py-14">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-slate-800">
          Why Choose MediCare?
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4"
            >

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                {benefit.icon}
              </div>

              <div>

                <h3 className="font-semibold text-slate-800">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  {benefit.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;