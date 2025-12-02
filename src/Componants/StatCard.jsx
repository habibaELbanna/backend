import './StatCard.css';

const StatCard = (props) => {
    return ( 
        <>
            <div className="dashboard-stat-card">
                <div className="stat-card-content">
                    <div className="stat-card-header">
                        <h3 className="stat-card-title">{props.title}</h3>
                        <div className="stat-card-icon">
                            <img src={props.icon} alt={props.title} className="stat-icon" />
                        </div>
                    </div>
                    <div className="stat-card-body">
                        <p className="stat-card-value">{props.value}</p>
                        <p className="stat-card-change">{props.change}</p>
                    </div>
                </div>
            </div>
        </> 
    );
}
 
export default StatCard;