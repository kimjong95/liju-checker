import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 기본 스타일
import { useNavigate } from "react-router-dom";
import "../_common/Layout.scss";
import "./FormPage.scss";

export const FormPage = () => {
  //
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="page-layout">
      <div className="content">
        <h2>날짜를 선택하세요</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          className="sa-ju-datepicker" // 사주 테마 스타일 적용
        />
      </div>
      <div className="footer-button">
        <button className="card-button" onClick={() => navigate("/result")}>
          확인!
        </button>
      </div>
    </div>
  );
};
