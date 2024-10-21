import "./Goal.css";
import GoalData from "./GoalData";

const Goal = () => {
  return (
    <div className="goal" id="goal">
      <div className="goal_title">
        <h2>GOAL</h2>
        <div className="goal_list">
          <GoalData title="React 복습하기" content="강의 다시 듣기" />
          <GoalData title="Node.js 복습하기" content="자료 찾아보기" />
          <GoalData title="AWS 학습하기" content="강의 자료 찾아보기" />
        </div>
      </div>
    </div>
  );
};

export default Goal;
