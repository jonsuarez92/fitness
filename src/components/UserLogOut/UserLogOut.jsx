import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';




export default function UserLogOut({ user, setUser }) {
    const navigate = useNavigate();

    function handleLogOut() {
        logOut();
        setUser(null);
        navigate('/');
    }

    return (
        <div className={styles.UserLogOut}>
            <div>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}