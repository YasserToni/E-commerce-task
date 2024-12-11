import Footer from "@/components/ui/footer/Footer";
import Header from "@/components/ui/header/Header";
import HeaderProductList from "@/components/ui/ProductList/HeaderProductList";

function ContactusPage() {
  return (
    <>
      <Header />
      <HeaderProductList about={"تواصل معنا"} />
      <div dir="rtl" className="max-w-4xl mx-auto mt-4 py-10 px-4 sm:px-8">
        <section className="text-right">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-800 mb-6  ">
            تواصل معنا
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-fm">
            ندعوك لأن تكون جزءًا من تجربة قهوة سيروزا. استكشف النكهات، استمتع
            بالجودة، وتمتع بالراحة التي تأتي مع اختيار قهوة سيروزا. رضاك إلى
            قهوة استثنائية يبدأ هنا.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-fm">
            للاستفسارات، أو الاقتراحات، أو حتى لمشاركة لحظات قهوتك معنا، يرجى
            الاتصال بنا:
          </p>
          <div className="text-gray-600 text-sm sm:text-base leading-relaxed font-fm">
            <p className="mb-2">
              <span className="font-semibold font-fb">البريد الإلكتروني:</span>
              info@serozacoffee.com
            </p>
            <p>
              <span className="font-semibold font-fb">الهاتف المحمول:</span>
              201100608058+
            </p>
          </div>
        </section>
        <footer className="mt-8 text-right text-gray-500 text-sm sm:text-base font-fm">
          انضم إلينا في سيروزا، حيث كل كوب هو قصة، وكل رشفة دعوة لاستكشاف عمق
          حرفية القهوة عالية الجودة.
        </footer>
      </div>
      <Footer />
    </>
  );
}

export default ContactusPage;
