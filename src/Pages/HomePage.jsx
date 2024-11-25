import ProductRow from "../components/ProductRow";
import Footer from "../components/ui/footer/Footer";
import Header from "../components/ui/header/Header";
import HerroSwiper from "../components/ui/swiperCard/HerroSwiper";
import Featers from "../components/ui/features/Featers";
import SectionRow from "../components/SectionRow";
import SpecialRow from "../components/SpecialRow";
import SpecialCard from "../components/ui/special/SpecialCard";

function HomePage() {
  return (
    <>
      <Header />
      <main className="px-14 sm:px-4">
        <HerroSwiper />
        <Featers />
        <ProductRow
          sectionName={"خصم لفترة محدودة"}
          discountPeriod={1}
          discountPercentage={40}
        />
        <SectionRow sectionName={"الاقسام"} />
        <ProductRow sectionName={"أفضل المبيعات"} />
        <SpecialRow sectionName={"عروض خاصة"} />
        <ProductRow sectionName={"الهواتف"} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
