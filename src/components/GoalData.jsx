import "./GoalData.css"

const GoalData=({title, content})=>{
    return <div className="goalData">
        <h4>{title}</h4>
        
        <p>{content}</p>
    </div>
}

export default GoalData;