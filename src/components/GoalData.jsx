import "./GoalData.css"

const GoalData=({title, content})=>{
    return <div className="goalData">
        <h4>{title}</h4>     
        <div className="goalData_content">{content}</div>
    </div>
}

export default GoalData;