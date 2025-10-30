import type { Mission } from '@/api/types';
import { Typography } from '@/components/common/Typography';
import {
  Chip,
  ChipRow,
  Danger,
  Handle,
  Input,
  Overlay,
  Primary,
  Sheet,
  SheetTitle,
} from '../Missions.styles';
import { MISSION_TAGS } from '../constants/icon';

type MissionSheetProps = {
  isOpen: boolean;
  missionContent: string;
  selectedCategory: Mission['category'] | null;
  selectedMissionId: number | null;
  onClose: () => void;
  onContentChange: (value: string) => void;
  onCategoryChange: (category: Mission['category']) => void;
  onAdd: () => void;
  onDelete: () => void;
};

const MissionSheet = ({
  isOpen,
  missionContent,
  selectedCategory,
  selectedMissionId,
  onClose,
  onContentChange,
  onCategoryChange,
  onAdd,
  onDelete,
}: MissionSheetProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Sheet onClick={(e) => e.stopPropagation()}>
        <Handle />
        <SheetTitle>미션 추가</SheetTitle>

        <Input
          placeholder="자기소개서 나의 강점 3가지 정리해보기"
          value={missionContent}
          onChange={(e) => onContentChange(e.target.value)}
        />

        <ChipRow>
          {MISSION_TAGS.map(({ key, label, icon }) => (
            <Chip
              key={key}
              onClick={() => onCategoryChange(key)}
              data-selected={selectedCategory === key}
            >
              <span aria-hidden>{icon}</span>
              <Typography as="span" variant="body1Regular" color="default">
                {label}
              </Typography>
            </Chip>
          ))}
        </ChipRow>

        <Primary onClick={onAdd}>일일 계획에 추가</Primary>

        {selectedMissionId && <Danger onClick={onDelete}>삭제하기</Danger>}
      </Sheet>
    </Overlay>
  );
};

export default MissionSheet;

