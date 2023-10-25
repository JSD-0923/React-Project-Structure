import { Link } from 'react-router-dom';
import './DemoCard.css';

export const DemoCard = ({topicName, topicId}) => {
    return (
        <Link className="demo-card" to={`/topic/${topicId}`}>
            <h1>{topicName}</h1>
        </Link>
    );
}