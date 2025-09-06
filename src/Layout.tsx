import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { DESIGN_BASE, DESIGN_RATIO, PAGE_PADDING, SAFE_FALLBACK } from "./constants/layout";

const AppViewport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100dvh;
  background: ${({ theme }) => theme.colors.background.disabled};

  overflow: hidden;
`;

const DeviceFrame = styled.div`
  /* 412 x 892 비율 고정 */
  aspect-ratio: ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H};
  height: 100dvh;

  /* usable height 기반 너비 산출도 가능하지만, 여기선 전체 높이 기반 유지 */
  width: clamp(${DESIGN_BASE.MIN_WIDTH}px, calc(100dvh * ${DESIGN_RATIO.W} / ${DESIGN_RATIO.H}), ${DESIGN_BASE.MAX_WIDTH}px);

  background: ${({ theme }) => theme.colors.background.default};
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = styled.div`
  /* ios safari 상하단 안전영역 대응 */
  --safeTop: env(safe-area-inset-top, 0px);
  --safeBottom: env(safe-area-inset-bottom, 0px);

  padding-top: calc(max(var(--safeTop), ${SAFE_FALLBACK.TOP_MIN}px) + ${PAGE_PADDING.TOP_EXTRA}px);

  padding-bottom: calc(max(var(--safeBottom), ${SAFE_FALLBACK.BOTTOM_MIN}px) + ${PAGE_PADDING.BOTTOM_EXTRA}px);

  padding-inline: ${({ theme }) => theme.spacing[9]};

  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
`;

// 모바일 퍼스트 디자인
export default function AppLayout() {
  return (
    <AppViewport>
      <DeviceFrame>
        <Layout>
          <Outlet />
        </Layout>
      </DeviceFrame>
    </AppViewport>
  );
}
