import { useTranslation } from "react-i18next";

function Navbar({ lang, setLang }) {
  return (
    <nav
      className="d-flex justify-content-between align-items-center mb-4 p-2"
      style={{ background: "linear-gradient(to left, #9ca3af, #f9fafb)" }}
    >
      <img
        src="/logo-finance.png"
        alt="Logo"
        style={{ height: "65px", display: "block", objectFit: "contain" }}
      />
      <select
        className="form-select w-auto"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{ cursor: "pointer" }}
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </nav>
  );
}

export default Navbar;
