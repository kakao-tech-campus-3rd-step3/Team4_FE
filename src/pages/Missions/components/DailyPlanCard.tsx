import type { Mission } from '@/api/types';
import { AddPill, Card, CardBody, CardHeader, MissionItem, MissionList } from '../Missions.styles';
import { Typography } from '@/components/common/Typography';

type DailyPlanCardProps = {
  dailyMissions: Mission[];
  onClickAdd: (mission?: Mission) => void;
};

const DailyPlanCard = ({ dailyMissions, onClickAdd }: DailyPlanCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Typography variant="label1Regular" color="default">
          일일 계획
        </Typography>
        <AddPill onClick={() => onClickAdd()}>미션 추가</AddPill>
      </CardHeader>
      <CardBody>
        <MissionList>
          {dailyMissions.length === 0 ? (
            <Typography variant="label2Regular" color="gray500">
              아직 추가된 미션이 없습니다.
            </Typography>
          ) : (
            <ul>
              {dailyMissions.map((m) => (
                <MissionItem key={m.id} onClick={() => onClickAdd(m)}>
                  {m.content}
                </MissionItem>
              ))}
            </ul>
          )}
        </MissionList>
      </CardBody>
    </Card>
  );
};

export default DailyPlanCard;
