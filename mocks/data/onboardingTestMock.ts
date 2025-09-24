import type { OnboardingTest } from '../../src/api/types';

export const onboardingTestMock: OnboardingTest[] = [
  {
    id: 1,
    question: 'Q. 중요한 면접날 예상치 못한 소나기가 내리기 시작했습니다.',
    imageUrl: 'https://github.com/user-attachments/assets/7ef27a50-6b8d-45a7-beb7-8805fc933f9d',
    answers: [
      'A. 괜찮아, 우산 챙기면 되지! 오히려 시원해서 좋네.',
      'B. 살짝 불안하지만 준비했던 내용을 다시 점검한다.',
      'C. 괜히 기분이 가라앉는다. 면접에도 영향이 있을까 걱정된다.',
      'D. 왜 하필 오늘 비야? 점점 짜증이 밀려온다.',
    ],
  },
  {
    id: 2,
    question: 'Q. 주말 아침, 특별한 약속이 없습니다. 당신은 보통?',
    imageUrl: 'https://github.com/user-attachments/assets/828052b9-a7a3-4b44-89d5-7844218b14ff',
    answers: [
      'A. 아침에 바로 일어나 산책이나 운동을 한다.',
      'B. 오전 중에 정리나 자기계발을 한다.',
      'C. 낮까지 푹 자고 오후에야 움직인다.',
      'D. 하루 종일 침대에서 거의 움직이지 않는다.',
    ],
  },

  {
    id: 3,
    question: 'Q. 새로운 과제를 받았을 때 당신의 첫 반응은?',
    imageUrl: 'https://github.com/user-attachments/assets/5450c372-b01a-46a1-b9c5-e1f21bf8257a',
    answers: [
      'A. “어떻게 하면 더 효율적으로 할 수 있을까?” 방법을 떠올린다.',
      'B. “이건 내가 잘할 수 있을까?” 스스로 점검한다.',
      'C. “혹시 실패하면 어쩌지…” 먼저 걱정이 앞선다.',
      'D. “복잡하고 귀찮아 보인다” 시작하기가 싫다.',
    ],
  },

  {
    id: 4,
    question: 'Q. 스터디 모임에서 낯선 사람들과 처음 만났습니다. 당신은?',
    imageUrl: 'https://github.com/user-attachments/assets/194ace8a-f944-4ed3-8580-7c91709412b6',
    answers: [
      'A. 먼저 다가가서 말을 걸고 분위기를 띄운다.',
      'B. 상황을 보다가 자연스럽게 대화에 참여한다.',
      'C. 누가 말을 걸면 대답은 하지만 먼저 나서진 않는다.',
      'D. 불편해서 가급적 말을 최소화한다.',
    ],
  },
  {
    id: 5,
    question: 'Q. 연속된 불합격 통보를 받았을 때 당신의 반응은?',
    imageUrl: 'https://github.com/user-attachments/assets/7c906a30-504e-481a-a827-53bacf302d8d',
    answers: [
      'A. 경험이 쌓였네, 다음에 더 잘하자!',
      'B. 하루 정도 기분이 가라앉지만 금방 다시 지원한다.',
      'C. 의욕이 확 줄고 잠시 쉬고 싶어진다.',
      'D. “역시 난 안 돼…” 자책하며 장기간 멈춘다.',
    ],
  },
  {
    id: 6,
    question: 'Q. 지금 나의 취업 준비 상태를 가장 잘 설명하는 것은?',
    imageUrl: 'https://github.com/user-attachments/assets/7ef27a50-6b8d-45a7-beb7-8805fc933f9d',
    answers: [
      'A. 이미 서류나 면접에 도전하고 있고, 스스로의 방향성을 점검하며 보완하려는 단계다.',
      'B. 목표 기업이나 분야가 뚜렷하고, 그에 맞는 구체적인 준비 계획을 실행하고 있다.',
      'C. 관심 있는 분야 정도는 떠올려 두었지만, 구체적인 준비나 계획은 아직 시작하지 못했다.',
      'D. 어떤 방향으로 나아가야 할지 모르겠고, 때로는 회피하거나 포기하고 싶은 마음이 든다.',
    ],
  },
];
