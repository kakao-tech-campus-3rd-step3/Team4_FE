import { Card, CardBody, CardHeader } from '../Missions.styles';

const DailyPlanCard = () => {
  return (
    <Card>
      <CardHeader>
        <span>일일 계획</span>
        <span>8월 9일</span>
      </CardHeader>
      <CardBody>{/* 일정/메모 입력 영역 */}</CardBody>
    </Card>
  );
};

export default DailyPlanCard;
