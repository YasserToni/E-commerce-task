import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      dir="rtl"
      className="flex justify-between items-center border-b py-2 px-14 font-logo w-full"
    >
      <div className="flex justify-between items-center gap-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/a6d7/8a8f/2501911f1f8921cbd38b239a5a0795b5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV~G6CUfZoHSFkqZS8mpugplNUCxdARCaYAA08dRPhQd9P8zsXvXV21qBqvM30B0GtjGXxCPi1o36UYfXeXwVZpwHWMWfwnsLxHf3JRsQVPx9ar2GnfS0Y7MXdbKVx7KIl8VAdwkMdA8tVOSmJqENrTQ0kFcdWIxYNNbZFn7biQSeRWba1TGgYfL5MSvHAZyup1BdH3iVZWpmzArwM4XeNX4KWiVzi79MmfKc~2J48FzGbPHa7KMXtrGPfx4W92WGmCohBSPwalsCPMraHPJIg-6HQUErj7XQH2Lm1doSKPIlfHHh1d1PN0U02y~ZUxbDeTkdA53QNGqRlL5VeCAJA__"
          alt="Logo"
          className="w-10 h-10 rotate-[240deg]"
        />
        <span className="font-bold text-3xl leading-10">تسوق</span>
      </div>
      <ul className="flex justify-between  gap-14">
        <li className="text-lg font-medium leading-6">
          <Link to="/">الصفحة الرئيسية </Link>
        </li>
        <li className="font-normal">
          <Link to="/product-list">منتجاتنا</Link>
        </li>
        <li>
          <a href="#">معلومات عنا</a>
        </li>
        <li>
          <a href="#">تواصل معنا</a>
        </li>
      </ul>
      <div className="flex justify-between gap-8">
        <CiSearch />
        <HiOutlineShoppingCart />
      </div>
    </div>
  );
}

export default Header;
