import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { scrollHidden } from "../../assets/styles/home.style";
import { webHeaderTabs } from "../../utils/staticDatas";

interface Props {
  minWidth?: string;
}

export default function Layout({ minWidth = "1440px" }: Props) {
  const navigate = useNavigate();
  return (
    <LayoutContainer>
      <Header $minWidth={minWidth}>
        <HeaderLeft>
          <Logo>Logo</Logo>

          <HeaderTabRow>
            {webHeaderTabs.map((tab) => (
              <span onClick={() => navigate(tab.route)} key={tab.label}>
                {tab.label}
              </span>
            ))}
          </HeaderTabRow>
        </HeaderLeft>

        <HeaderRight>
          <span onClick={() => navigate("/mypage")}>마이페이지</span>

          <LoginButton>로그인</LoginButton>
        </HeaderRight>
      </Header>

      <OutletBox $minWidth={minWidth}>
        <Outlet />
      </OutletBox>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;

  background-color: ${(props) => props.theme.color.background};
`;

const Header = styled.div<{ $minWidth: string }>`
  width: 100%;
  min-width: ${(props) => props.$minWidth && props.$minWidth};
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 100px;
  background-color: ${(props) => props.theme.color.white};
`;

const Logo = styled.div``;

const headerTextStyle = css`
  color: ${(props) => props.theme.color.gray900};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
`;

const HeaderTabRow = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;

  & > span {
    ${headerTextStyle}
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  & > span {
    ${headerTextStyle};
  }
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 50px;
  border-radius: 16px;

  background: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: ${(props) => props.theme.color.mainHover};
  }
`;

const OutletBox = styled.div<{ $minWidth: string }>`
  width: ${(props) => props.$minWidth && props.$minWidth};
  margin: 0 auto;
  height: calc(100% - 90px);
  padding: 0 120px 80px 120px;
  overflow-y: auto;
  overflow-x: hidden;
  ${scrollHidden};
`;
