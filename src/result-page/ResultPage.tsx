import { useEffect, useRef, useState } from "react";
import "./ResultPage.scss";

export const ResultPage = () => {
  //
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null); // 팝업에 대한 참조 생성

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3500); // 3.5초 후에 실행

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false); // 팝업 외부를 클릭하면 팝업 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="page-layout">
      <div className="content">
        <div className="result-layout">
          <div className="header"></div>
          <div className="content">
            <h2>계미일주</h2>
            <p>
              계미일주(癸未日柱)의 연애, 사랑, 결혼과 관련된 내용을
              정리해드리겠습니다.
            </p>
            <p>중요한 키워드는 다음과 같습니다:</p>
            <p>
              - 성취보다는 부드러운 삶: 계미일주는 희생정신을 가지고 있고,
              소박한 행복 철학을 추구합니다. 돈이나 건강에 구애받지 않고,
              부드럽고 소박한 삶을 살아갑니다.
            </p>
            {/* <p>
          - 이해심과 원만한 대인관계: 계미일주는 영리하고 총명하며 타인을
          이해하는 습성을 가지고 있습니다. 대인관계가 원만하고 좋은 평판을
          가지고 있습니다.
        </p> */}
            {/* <p>
          - 결과지향적이고 마음이 급한 성향: 계미일주는 결과에 집중하고 신속한
          결정을 선호하는 경향이 있습니다. 이러한 성향으로 인해 일부는
          과정보다는 결과에 집착하여 어려움을 만들기도 합니다.
        </p>
        <p>
          - 건강과 배우자에 대한 고민: 계미일주는 체질적으로 건강 고충을 겪을 수
          있으며, 배우자와의 관계에서 자존심에 의지하므로 여러 가지 어려움이
          발생할 수 있습니다.
        </p>
        <p>
          - 자유롭고 자족적인 삶: 계미일주는 자신만의 행복 철학이나 종교적
          신심을 통해 돈이나 건강에 구애받지 않고 단순하고 자존심 있는 삶을
          추구하는 경향이 있습니다.
        </p>
        <p>
          - 대운에 따른 성공: 혼자서는 특별한 재능이 없어 보일 수 있지만,
          계미일주는 대운에 따라 성공할 수 있는 잠재력을 가지고 있습니다.
        </p>
        <p>
          - 야망과 약간의 주의가 필요: 계미일주는 야망을 가지고 있지만, 주위의
          열악한 조건 때문에 실제로는 성과를 거두지 못하는 경우가 많습니다.
          조심스럽고 미래를 고려하는 선택이 필요합니다.
        </p> */}
            <p>
              - 배우자 선택과 대인관계: 계미일주 남성은 자신보다 강한 여성을
              선호하고, 계미일주 여성은 과도한 간섭이나 폭력적인 남편으로 인한
              고통을 겪을 수 있습니다. 대인관계는 원만하지만 자신을 극복해야
              하는 상황이 많습니다.
            </p>
            <p>
              - 사업 인연과 교육계, 금융계 직업: 계미일주는 식신과 편재를 가진
              지장간과 연결되어 사업 인연을 추구하는 경향이 있습니다. 교육계와
              금융계에서 성공할 수 있는 특성을 갖고 있습니다.
            </p>
            {/* <p>
          - 육친과 관계: 계미일주의 육친은 편관(偏官)입니다. 계미일주와 관계에
          있는 타인이 편관 성향을 갖고 있으며, 이를 주의해야 합니다.
        </p> */}
            {/* <p>
          - 십이운성: 계미일주는 십이운성 중 묘(墓)에 해당하며, 성취보다는
          조용하고 나른한 성향을 가지고 있습니다. 대운 중에 흥미로운 변화를
          경험할 수도 있습니다.
        </p> */}
            <p>
              - 직장과 재물, 배우자에 대한 영향: 계미일주는 직장과 재물, 그리고
              배우자에 대한 영향을 받기 쉽습니다. 직장과 재물 측면에서 약함을
              느낄 수도 있으며, 배우자와의 관계에서 어려움을 겪을 수도 있습니다.
            </p>
            <p>
              이러한 특징을 고려하여, 계미일주와의 연애와 결혼 관계에서는
              조화롭고 원만한 대인관계를 유지하고, 결과보다는 과정과 성장을
              중요시하며, 건강과 자기 신념에 관심을 기울이는 점을 고려해야
              합니다. 또한 야망과 주의가 필요하며, 사업 인연에 주의하고, 직장과
              재물, 배우자에 대한 관계에서 조심하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </div>
      <button className="card-button" onClick={() => alert("링크복사")}>
        결과 공유
      </button>
      <button className="card-button-kakao" onClick={() => alert("KAKAO!")}>
        카카오톡 공유
      </button>
      <button className="card-button-insta" onClick={() => alert("INSTAGRAM")}>
        인스타그램 공유
      </button>

      {showPopup && (
        <div className="popup" ref={popupRef}>
          <div className="popup-header">연애프로필에 당신을 등록해보세요!</div>
          <div className="popup-content">
            당신의 사랑과 행복을 찾아오는 사주연애입니다. 여러분의 프로필을
            등록해준다면, 우리는 당신의 이상적인 상대를 찾아드릴 수 있어요.
            당신의 사랑 이야기를 시작해봐요!
          </div>
          <button className="popup-button">프로필 등록하기</button>
        </div>
      )}
    </div>
  );
};
