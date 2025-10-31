import type { Plan } from '@/api/types';
import { AddPill, Card, CardBody, CardHeader, MissionItem, MissionList } from '../Missions.styles';
import { Typography } from '@/components/common/Typography';

type DailyPlanCardProps = {
  dailyPlans: Plan[];
  onClickAdd: () => void;
  onClickPlan: (plan: Plan) => void;
};

const DailyPlanCard = ({ dailyPlans, onClickAdd, onClickPlan }: DailyPlanCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Typography variant="label1Regular" color="default">
          일일 계획
        </Typography>
        <AddPill onClick={onClickAdd}>미션 추가</AddPill>
      </CardHeader>
      <CardBody>
        <MissionList>
          {dailyPlans.length === 0 ? (
            <Typography variant="label2Regular" color="gray500">
              아직 추가된 미션이 없습니다.
            </Typography>
          ) : (
            <ul>
              {dailyPlans.map((plan) => (
                <MissionItem key={plan.id} onClick={() => onClickPlan(plan)}>
                  {plan.content}
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
