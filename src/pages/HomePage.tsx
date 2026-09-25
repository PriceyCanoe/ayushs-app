import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PopularMedicines from "../components/home/PopularMedicines";
import AppBanner from "../components/home/AppBanner";
import Footer from "../components/home/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      <main>
        <Hero />
        <Categories />
        <WhyChooseUs />
        <PopularMedicines />
        <AppBanner />
      </main>

      <Footer />

    </div>
  );
};

export default HomePage;