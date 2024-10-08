import styled from "styled-components";
import { MypageTitleWithButton } from "./MyTravel";
import PlusIcon from "../../../assets/icons/PlusIcon";
import testImg from "../../../assets/images/testImg1.png";

export default function MyTravelogue() {
  return (
    <div>
      <MypageTitleWithButton>
        내 여행기
        <div>
          <div>
            <PlusIcon />
          </div>
          작성하기
        </div>
      </MypageTitleWithButton>

      <ImgCardGridBox>
        <ImgCard>
          <p>제주</p>
          <span>03.21 ~ 03.24</span>
        </ImgCard>
        <ImgCard>
          <p>제주</p>
          <span>03.21 ~ 03.24</span>
        </ImgCard>
        <ImgCard>
          <p>제주</p>
          <span>03.21 ~ 03.24</span>
        </ImgCard>
      </ImgCardGridBox>
    </div>
  );
}

const ImgCardGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
`;

const ImgCard = styled.div`
  background-image: url(${testImg});
  background-position: center;
  background-size: cover;
  width: 225px;
  height: 225px;
  border-radius: 16px;

  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.08),
    2px 2px 10px 0px rgba(0, 0, 0, 0.08);
  & > p {
    color: ${(props) => props.theme.color.white};
    font-size: 24px;
    font-weight: 700;
  }

  & > span {
    color: ${(props) => props.theme.color.white};
    font-size: 16px;
    font-weight: 400;
  }
`;
