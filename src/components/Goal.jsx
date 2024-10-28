import "./Goal.css";
import GoalData from "./GoalData";

const Goal = () => {
  return (
    <div className="goal" id="goal">
      <div className="goal_title">
        <h2>WORK</h2>
        <div className="goal_list">
          <GoalData
            title="SAI"
            content="데이터 분석 및 시각화"
          />
          <GoalData title="SKKUDING" content="infra 담당" />
          <GoalData title="TAVE" content="Frontend 담당" />
        </div>
      </div>
    </div>
  );
};

export default Goal;
