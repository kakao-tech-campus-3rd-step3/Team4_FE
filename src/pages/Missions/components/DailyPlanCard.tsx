import type { Mission } from '@/api/types';
import { AddPill, Card, CardBody, CardHeader, MissionItem, MissionList } from '../Missions.styles';

type DailyPlanCardProps = {
  dailyMissions: Mission[];
  onClickAdd: (mission?: Mission) => void;
};

const DailyPlanCard = ({ dailyMissions, onClickAdd }: DailyPlanCardProps) => {
  return (
    <Card>
      <CardHeader>
        <span>일일 계획</span>
        <AddPill onClick={() => onClickAdd}>미션 추가</AddPill>
      </CardHeader>
      <CardBody>
        <MissionList>
          {dailyMissions.length === 0 ? (
            <div>아직 추가된 미션이 없습니다.</div>
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
