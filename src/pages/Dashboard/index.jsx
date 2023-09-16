import Sidebar from '../../components/Sidebar';
import style from './style.module.css';

const Dashboard = () => {
  return (
    <div>
      <div className={style.container}>
        <Sidebar />
        <div className={style.main}>
            <h1>Main</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
