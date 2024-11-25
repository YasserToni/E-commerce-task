function PaymentFooter() {
  return (
    <footer
      dir="rtl"
      className="flex items-center justify-between sm:justify-center bg-[#141D2E] px-14 sm:px-4 h-16 sm:h-[43px]"
    >
      <div className="flex items-center gap-4 s sm:hidden">
        <a
          href="#"
          className="font-fm font-medium text-base text-[#ABABAB] underline"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="font-fm font-medium text-base text-[#ABABAB] underline"
        >
          Privecy Policy
        </a>
      </div>
      <div dir="ltr" className="font-fr font-normal text-base text-[#ABABAB]">
        © 2024 Tasawq. All rights reserved.
      </div>
    </footer>
  );
}

export default PaymentFooter;
