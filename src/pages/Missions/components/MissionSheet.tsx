import type { Mission } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import { Chip, ChipRow, Danger, Handle, Input, Overlay, Primary, Sheet } from '../Missions.styles';
import { MISSION_TAGS } from '../constants/icon';

type SheetMode = 'add-recommended' | 'create-custom' | 'view-plan';

type MissionSheetProps = {
  isOpen: boolean;
  mode: SheetMode;
  missionContent: string;
  selectedCategory: Mission['category'] | null;
  onClose: () => void;
  onContentChange: (value: string) => void;
  onCategoryChange: (category: Mission['category']) => void;
  onConfirm: () => void;
  onDelete: () => void;
};

const MissionSheet = ({
  isOpen,
  mode,
  missionContent,
  selectedCategory,
  onClose,
  onContentChange,
  onCategoryChange,
  onConfirm,
  onDelete,
}: MissionSheetProps) => {
  if (!isOpen) return null;

  const isReadonly = mode === 'add-recommended' || mode === 'view-plan';
  const showDeleteButton = mode === 'view-plan';
  const showConfirmButton = mode !== 'view-plan';

  return (
    <Overlay onClick={onClose}>
      <Sheet onClick={(e) => e.stopPropagation()}>
        <Handle />
        {/* <SheetTitle>{mode === 'view-plan' ? '일일 계획' : '미션 추가'}</SheetTitle> */}
        <Typography variant="body2Regular" color="default" style={{ marginBottom: '5px' }}>
          {mode === 'view-plan' ? '일일 계획' : '미션 추가'}
        </Typography>
        <Input
          placeholder="자기소개서 나의 강점 3가지 정리해보기"
          value={missionContent}
          onChange={(e) => onContentChange(e.target.value)}
          readOnly={isReadonly}
        />

        <ChipRow>
          {MISSION_TAGS.map(({ key, label, icon }) => {
            const isSelected = selectedCategory === key;
            return (
              <Chip
                key={key}
                onClick={() => !isReadonly && onCategoryChange(key)}
                data-selected={isSelected}
                style={{
                  cursor: isReadonly ? 'default' : 'pointer',
                  opacity: isReadonly && !isSelected ? 0.5 : 1,
                }}
              >
                <span aria-hidden>{icon}</span>
                <Typography as="span" variant="body1Regular" color="default">
                  {label}
                </Typography>
              </Chip>
            );
          })}
        </ChipRow>

        {showConfirmButton && <Primary onClick={onConfirm}>일일 계획에 추가</Primary>}

        {showDeleteButton && <Danger onClick={onDelete}>삭제하기</Danger>}
      </Sheet>
    </Overlay>
  );
};

export default MissionSheet;
