import Input from "@/components/ui/productDetials/Input";
import Footer from "../components/ui/footer/Footer";
import Header from "../components/ui/header/Header";
import PolicyDetials from "../components/ui/productDetials/PolicyDetials";
import HeaderProductList from "../components/ui/ProductList/HeaderProductList";
import SwiperCard from "../components/ui/swiperCard/SwiperCard";
import RadioButton from "@/components/ui/productDetials/RadioButton";
import DataHead from "@/components/ui/productDetials/DataHead";
import BuyButton from "@/components/ui/productDetials/BuyButton";
import Colors from "@/components/ui/productDetials/Colors";
import Spaces from "@/components/ui/productDetials/Spaces";
import AddToCard from "@/components/ui/productDetials/AddToCard";
import ProductDetials from "@/components/ui/productDetials/ProductDetials";
import Rate from "@/components/ui/productDetials/Rate";
import WriteComment from "@/components/ui/productDetials/WriteComment";
import Reviews from "@/components/ui/productDetials/Reviews";
import ProductRowWithCursoul from "@/components/ProductRowWithCursoul";

function ProductPage() {
  return (
    <>
      <Header />
      <HeaderProductList />
      <main
        dir="rtl"
        className="px-14 sm:px-4 flex sm:flex-col gap-5 sm:gap-2 py-6 sm:py-3"
      >
        <SwiperCard />
        <div dir="rtl" className="p-7 sm:px-2 sm:py-0 card-shadow">
          <ProductDetials />
          <Spaces />
          <Colors />

          <AddToCard />
          <DataHead title={"للطلب السريع يرجي إدخال البيانات المطلوبة:"} />
          <Input />
          <DataHead title={"عروض التوفير"} />
          <RadioButton />
          <BuyButton />
          {/* <ProductDescription /> */}
          <PolicyDetials />
        </div>
      </main>
      <div
        dir="rtl"
        className="px-14 sm:px-4 py-14 sm:py-4 flex sm:flex-col justify-between items-center"
      >
        <WriteComment />
        <div className="w-[555px] sm:w-[339px] flex flex-col gap-2 sm:gap-1 sm:mt-4 sm:pr-4">
          <Rate percentage={60} numberofStar={5} />
          <Rate percentage={40} numberofStar={4} />
          <Rate percentage={20} numberofStar={3} />
          <Rate percentage={10} numberofStar={2} />
          <Rate percentage={5} numberofStar={1} />
        </div>
      </div>
      <Reviews carouselDirection="carousel-track_left" />
      <Reviews carouselDirection="carousel-track_right" />
      <div className="px-14 sm:px-4">
        <ProductRowWithCursoul sectionName={"منتجات مشابهه"} />
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
