import "./Goal.css";
import GoalData from "./GoalData";

const Goal = () => {
  return (
    <div className="goal">
      <div className="goal_title">
        <h2>GOAL</h2>
        <div className="goal_list">
          <GoalData
            title="React 정복하기"
            content={
              <ul>
                <li>강의 다시 듣기</li>
                <li>강의 다시 듣기</li>
                <li>강의 다시 듣기</li>
              </ul>
            }
          />
          <GoalData
            title="Node.js 정복하기"
            content={
              <ul>
                <li>강의 다시 듣기</li>
                <li>강의 다시 듣기</li>
                <li>강의 다시 듣기</li>
              </ul>
            }
          />
          <GoalData
            title="docker 정복하기"
            content={
              <ul>
                <li>강의 다시 듣기</li>
                <li>강의 다시 듣기</li>
                <li>강의 다시 듣기</li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Goal;
