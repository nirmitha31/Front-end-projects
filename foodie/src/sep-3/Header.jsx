import { useSelector } from "react-redux";

function Header() {
  const totalPresent = useSelector((state) => state.attendance.present);

  return <h2>Present Students : {totalPresent}</h2>;
}

export default Header;
