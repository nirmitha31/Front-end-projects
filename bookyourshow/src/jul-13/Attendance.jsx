import { useDispatch } from "react-redux";
import { markPresent, markAbsent } from "./attendanceSlice";

function Attendance() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(markPresent())}>Present</button>

      <button onClick={() => dispatch(markAbsent())}>Absent</button>
    </>
  );
}

export default Attendance;
