import { useNavigate } from "react-router-dom";
import "../_common/Layout.scss";
import "./MainPage.scss";

export const MainPage = () => {
  //
  const navigate = useNavigate();
  return (
    <div className="page-layout">
      <div className="content">
        <div className="card">
          <h3 className="card-title">
            사주연애, 당신에게 이상적인 상대를 매칭해드려요!
          </h3>
          <p className="card-subtext">
            우리는 사주의 힘을 빌려 당신과 궁합이 딱 맞는 이성을 소개해드려요.
            사주를 통해 연애, 사랑, 결혼에 대한 비밀을 해독하고, 당신이 만족할
            만한 상대를 찾아드릴 거예요. 바로 사주연애와 함께 시작해보세요! ✨✨
          </p>
        </div>
      </div>
      <div className="footer-button">
        <button className="card-button" onClick={() => navigate("/input")}>
          시작!
        </button>
      </div>
    </div>
  );
};
