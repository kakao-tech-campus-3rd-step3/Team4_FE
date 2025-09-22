import { useState } from 'react';
import type { OnboardingTest } from '../../api/types';
import { Typography } from '../../components/common/Typography';
import mocks from '../../mockSetup';
import { colorScale, semanticColors } from '../../styles/theme/colors';

function OnboardingTest() {
  const tests = mocks.data.onboardingTestMock;
  const totalTests = tests.length;

  const [currentTestIdx, setCurrentTestIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const [progressPercent, setProgressPercent] = useState<number>(0);

  const currentTest: OnboardingTest = tests[currentTestIdx];

  const handleNext = () => {
    if (currentTestIdx < totalTests - 1) {
      setCurrentTestIdx(currentTestIdx + 1);
      setProgressPercent(((currentTestIdx + 1) / totalTests) * 100);
    }
  };

  return (
    <div
      style={{
        minHeight: '92vh',
        backgroundColor: semanticColors.brand.background,
        display: 'flex',
        flexDirection: 'column',

        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            height: '15px',
            backgroundColor: colorScale.gray950,
            borderRadius: '8px',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            marginBottom: '30px',

            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${progressPercent}%`,
              height: '100%',

              borderRadius: '10px',

              backgroundColor: colorScale.red600,

              zIndex: 2,
            }}
          />
        </div>

        {/* 질문 텍스트 */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <Typography variant="body1Regular" style={{ color: semanticColors.text.default }}>
            {currentTest.question}
          </Typography>
        </div>

        {/* 고양이 이미지 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '60px',
          }}
        >
          <img
            src={currentTest.imageUrl}
            alt="cat"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* 선택 버튼들 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {currentTest.answer.map((answer) => (
            <button
              key={answer}
              onClick={() => setSelectedAnswer(answer)}
              style={{
                paddingInline: '10px',
                paddingBlock: '10px',
                backgroundColor:
                  selectedAnswer === answer
                    ? semanticColors.button.hover
                    : semanticColors.button.default,
                border: `2px solid ${selectedAnswer === answer ? semanticColors.button.border : semanticColors.button.hover}`,
                borderRadius: '8px',
                color: semanticColors.text.default,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Typography variant="label2Regular" style={{ color: semanticColors.text.default }}>
                {answer}
              </Typography>
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        style={{
          padding: '13px',
          backgroundColor: colorScale.gray950,
          borderRadius: '8px',

          cursor: 'pointer',
        }}
      >
        <Typography variant="label2Regular" style={{ color: semanticColors.background.default }}>
          다음
        </Typography>
      </button>
    </div>
  );
}

export default OnboardingTest;
