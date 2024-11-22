import { RiShieldCheckLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

function PaymentHeader() {
  return (
    <header
      dir="rtl"
      className="flex justify-between items-center border-b px-14 py-3 font-logo w-full"
    >
      <div className="flex items-center">
        <span className="w-6 h-6 text-primary flex items-center">
          <RiShieldCheckLine />
        </span>
        <span className="font-fb font-bold text-lg text-p[#454545]">
          دفع امن
        </span>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/a6d7/8a8f/2501911f1f8921cbd38b239a5a0795b5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV~G6CUfZoHSFkqZS8mpugplNUCxdARCaYAA08dRPhQd9P8zsXvXV21qBqvM30B0GtjGXxCPi1o36UYfXeXwVZpwHWMWfwnsLxHf3JRsQVPx9ar2GnfS0Y7MXdbKVx7KIl8VAdwkMdA8tVOSmJqENrTQ0kFcdWIxYNNbZFn7biQSeRWba1TGgYfL5MSvHAZyup1BdH3iVZWpmzArwM4XeNX4KWiVzi79MmfKc~2J48FzGbPHa7KMXtrGPfx4W92WGmCohBSPwalsCPMraHPJIg-6HQUErj7XQH2Lm1doSKPIlfHHh1d1PN0U02y~ZUxbDeTkdA53QNGqRlL5VeCAJA__"
          alt="Logo"
          className="w-10 h-10 rotate-[240deg] flex items-center"
        />
        <span className="font-bold text-3xl leading-10 ">تسوق</span>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center">
          <span className="w-6 h-6 text-primary flex items-center ">
            <IoChatbubblesOutline />
          </span>
          <span className="font-fb font-bold text-lg text-[#454545]">
            الدعم الفني
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-6 h-6 text-primary flex items-center">
            <FiPhoneCall />
          </span>
          <span className="font-fb font-bold text-lg text-[#454545]">
            54841
          </span>
        </div>
      </div>
    </header>
  );
}

export default PaymentHeader;
