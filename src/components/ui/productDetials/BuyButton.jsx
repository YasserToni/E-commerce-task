function BuyButton() {
  return (
    <div className="border-t border-[#E5E9F1] mb-7 w-[581px] sm:w-[305px]">
      <div className="py-5 flex items-center justify-between font-bold font-fb text-xl text-[#3A4353]">
        <span>إجمالي المبلغ:</span>
        <span>6500ج</span>
      </div>
      <button className="w-full py-4 rounded-[61px] bg-[#3074F0] text-xl font-bold font-fb text-white linerBackgound bottom-shadow">
        اشتري الان - الدفع عند الاستلام
      </button>
    </div>
  );
}

export default BuyButton;
