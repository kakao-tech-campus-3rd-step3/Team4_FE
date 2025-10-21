import type { ChatResponse } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import { BASE_URL } from '@/constants/routes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Chat = {
  role: 'user' | 'assistant';
} & ChatResponse;

function CharacterChat() {
  const navigate = useNavigate();
  const [chatLog] = useState<Chat[]>([
    {
      role: 'assistant',
      message: '안녕하세요! 오늘 기분은 어떠신가요? 😊',
    },
    {
      role: 'user',
      message: '안녕! 오늘은 좀 피곤해',
    },
    {
      role: 'assistant',
      message: '피곤하시군요 😔 그러면 가벼운 스트레칭을 해보는 건 어떨까요?',
    },
    {
      role: 'user',
      message: '좋은 아이디어야! 어떤 스트레칭을 하면 좋을까?',
    },
    {
      role: 'assistant',
      message: '목과 어깨 스트레칭이 좋을 것 같아요! 천천히 머리를 좌우로 돌려보세요 🧘‍♀️',
    },
  ]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* 상단 뒤로가기 버튼 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #E5E5E5',
          paddingInline: '10px',
        }}
      >
        <button
          onClick={() => {
            navigate('/character');
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background-color 0.2s ease',
          }}
        >
          <span style={{ fontSize: '20px' }}>←</span>
          <Typography variant="body2Regular" color="gray900">
            뒤로가기
          </Typography>
        </button>
      </div>

      {/* 채팅 메시지 영역 (스크롤) */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {chatLog.map((chat, index) => (
          <div key={index}>
            {chat.role === 'assistant' ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  alignSelf: 'flex-start',
                }}
              >
                <img
                  src={`${BASE_URL}assets/character/default.png`}
                  alt="character"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                    flexShrink: 0,
                    backgroundColor: '#F6EAD7',
                    padding: '5px',
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#F6EAD7',
                    border: '1.5px solid #CEBDA2',
                    borderRadius: '16px',
                    padding: '12px 16px',
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                    width: '60%',
                  }}
                >
                  <Typography variant="label2Regular" color="gray900">
                    {chat.message}
                  </Typography>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FFEECA',
                    border: '1.5px solid #EED49D',
                    borderRadius: '16px',
                    padding: '12px 16px',
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                  }}
                >
                  <Typography variant="label2Regular" color="gray900">
                    {chat.message}
                  </Typography>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 하단 입력란 */}
      <div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '20px',
            marginInline: '10px',
          }}
        >
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1.5px solid #CEBDA2',
              borderRadius: '10px',
              outline: 'none',
              fontSize: '14px',
              backgroundColor: '#F6EAD7',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#B98B46';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#CEBDA2';
            }}
          />
          <button
            style={{
              backgroundColor: '#CEBDA2',
              border: 'none',
              borderRadius: '10px',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B98B46';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#CEBDA2';
            }}
          >
            <span style={{ color: '#FFFFFF', fontSize: '18px' }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterChat;
