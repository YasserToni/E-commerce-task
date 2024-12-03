import ProductRow from "../components/ProductRow";
import Footer from "../components/ui/footer/Footer";
import Header from "../components/ui/header/Header";
import HerroSwiper from "../components/ui/swiperCard/HerroSwiper";
import Featers from "../components/ui/features/Featers";
import SectionRow from "../components/SectionRow";
import SpecialRow from "../components/SpecialRow";
import SpecialCard from "../components/ui/special/SpecialCard";
import ProductRowWithCursoul from "@/components/ProductRowWithCursoul";

function HomePage() {
  return (
    <div className="font-fr">
      <Header />
      <main className="px-14 sm:px-4">
        <HerroSwiper />
        <Featers />
        <ProductRowWithCursoul
          sectionName={"خصم لفترة محدودة"}
          discountPeriod={1}
          discountPercentage={40}
        />
        <SectionRow sectionName={"الاقسام"} />
        {/* <ProductRow sectionName={"أفضل المبيعات"} /> */}
        <ProductRowWithCursoul sectionName={"أفضل المبيعات"} />
        <SpecialRow sectionName={"عروض خاصة"} />
        <ProductRow sectionName={"الهواتف"} />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
