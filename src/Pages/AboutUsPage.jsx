import Footer from "@/components/ui/footer/Footer";
import Header from "@/components/ui/header/Header";
import HeaderProductList from "@/components/ui/ProductList/HeaderProductList";

function AboutUsPage() {
  return (
    <>
      <Header />
      <HeaderProductList about={" معلومات عنا"} />
      <div dir="rtl" className="max-w-5xl mx-auto mt-4 py-10 px-4 sm:px-8">
        <section className="text-right mb-10">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-800 mb-4 font-fb">
            عنّا
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-fm">
            مرحبًا بك في سيروزا، علامة القهوة الرائدة التي أنشأتها GCP EG، حيث
            نكرّس جهودنا لتحببك مع القهوة. بدأت رحلة قهوة سيروزا برؤية عميقة
            وبسيطة: تقديم النظارة والجودة غير المسبوقتين مباشرة إلى كوبك. تأسست
            سيروزا في مصر، وهي شهادتنا على الثقافة الغنية للقهوة التي أتقنّاها
            بالتزامنا في كل خطوة.
          </p>
        </section>
        <section className="text-right mb-10">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-800 mb-4 font-fb">
            ما نقوم به:
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-fm">
            في قهوة سيروزا، نحن متخصصون في توفير القهوة المطحونة حديثًا والمعبأة
            كل يوم. وعدنا هو تسليم قهوتك خلال 48 ساعة من الطلب، لضمان أن كل رشفة
            تنسم بأقصى النكهات والعبير الذي تشتهر به حبوبنا. نحن نستورد فقط أجود
            الحبوب، مع اختبار دقيق وتحميصها لتحقيق ملف طعم غني ومكرر.
          </p>
        </section>
        <section className="text-right mb-10">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-800 mb-4 font-fb">
            التزاماتنا:
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-fm">
            نحن نقف وراء التزاماتنا بالنضارة، والسرعة، والجودة. كل دفعة من قهوة
            سيروزا مطحونة ومعبّدة بدرجات العناية. لضمان أنك تتلقى الأفضل فقط،
            التزاماتنا بتوصيل طلبك خلال 48 ساعة هو شهادة على التزامنا برضاك. في
            سيروزا، نحن لا نبيع قهوة فقط: نحن نقدم تجربة- وعد يمنح ممتاز لا
            يتنازل أبدًا عن الطعم أو الجودة.
          </p>
        </section>
        <section className="text-right mb-10">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-800 mb-4 font-fb">
            دعوتنا:
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-fm">
            ندعوك حقًا لتكون جزءًا من تجربة قهوة سيروزا. استكشف النكهات التي
            تأتي مع اختيارنا. رضاك إلى قهوة استثنائية يبدأ هنا.
          </p>
        </section>
        <section className="text-right">
          <h2 className="text-2xl sm:text-xl font-bold text-gray-800 mb-4 font-fb">
            للاتصال بنا:
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2 font-fm">
            للاستفسارات، أو الاقتراحات، أو حتى لمشاركة لحظات قهوتك معنا، يرجى
            الاتصال بنا:
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-fm">
            <span className="font-semibold font-fb">البريد الإلكتروني:</span>
            info@serozacoffee.com
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-fm">
            <span className="font-semibold font-fb">الهاتف المحمول:</span>
            201100608058+
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutUsPage;
