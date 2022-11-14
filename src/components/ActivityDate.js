import './ActivityDate.css';

const ActivityDate = (props) => {

const month = props.date.toLocaleString('en-US', {month: 'long'});
const year = props.date.toLocaleString('en-US', {year: 'numeric'});
const day = props.date.toLocaleString('en-US', {day: 'numeric'});

    return (
    <div className='activity-date'>
        <div className='activity-date__month'>{month}</div>
        <div className='activity-date__year'>{year}</div>
        <div className='activity-date__day'>{day}</div>
    </div>
    );
}



export default ActivityDate;