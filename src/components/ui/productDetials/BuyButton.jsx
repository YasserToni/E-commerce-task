import { Link } from "react-router-dom";

function BuyButton() {
  // const navigate = useNavigate();
  return (
    <div className="border-t border-[#E5E9F1] mb-7 w-[581px] sm:w-[305px]">
      <div className="py-5 flex items-center justify-between font-bold font-fb text-xl text-[#3A4353]">
        <span>إجمالي المبلغ:</span>
        <span>6500ج</span>
      </div>
      <Link to="/checkout">
        <button
          // onClick={() => navigate("success-order")}
          className="w-full py-4 rounded-[61px] bg-[#3074F0] text-xl sm:text-lg font-bold font-fb text-white linerBackgound bottom-shadow"
        >
          اشتري الان - الدفع عند الاستلام
        </button>
      </Link>
    </div>
  );
}

export default BuyButton;
