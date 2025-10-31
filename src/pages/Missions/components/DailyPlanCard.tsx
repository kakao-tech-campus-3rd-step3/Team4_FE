import type { Plan } from '@/api/types';
import {
  AddPill,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxWrapper,
  IconButton,
  MissionActions,
  MissionContent,
  MissionItem,
  MissionList,
} from '../Missions.styles';
import { Typography } from '@/components/common/Typography';

type DailyPlanCardProps = {
  dailyPlans: Plan[];
  onClickAdd: () => void;
  onClickPlan: (plan: Plan) => void;
  onTogglePlan: (id: number, isDone: boolean) => void;
};

const DailyPlanCard = ({
  dailyPlans,
  onClickAdd,
  onClickPlan,
  onTogglePlan,
}: DailyPlanCardProps) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, plan: Plan) => {
    e.stopPropagation();
    onTogglePlan(plan.id, !plan.done);
  };

  const handleMissionClick = (e: React.MouseEvent, plan: Plan) => {
    e.stopPropagation();
    onClickPlan(plan);
  };

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
              {dailyPlans.map((plan) => {
                return (
                  <MissionItem key={plan.id}>
                    <CheckboxWrapper data-done={plan.done}>
                      <Checkbox
                        type="checkbox"
                        checked={plan.done}
                        onChange={(e) => handleCheckboxChange(e, plan)}
                      />
                      <MissionContent data-done={plan.done}>{plan.content}</MissionContent>
                    </CheckboxWrapper>
                    <MissionActions>
                      <IconButton onClick={(e) => handleMissionClick(e, plan)}>⋯</IconButton>
                    </MissionActions>
                  </MissionItem>
                );
              })}
            </ul>
          )}
        </MissionList>
      </CardBody>
    </Card>
  );
};

export default DailyPlanCard;
