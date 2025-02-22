import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
const icon = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];
const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul className={style.list}>
        {stats.map((stats, index) => (
          <li className={style.item} key={stats.id}>
            <StatisticsItem
              title={stats.item}
              total={stats.total}
              icon={icon[index]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Statistics;
