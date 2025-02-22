import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import styles from './ForbesListItem.module.css';

const ForbesListItem = ({ name, capital, avatar, isIncrease }) => {
  return (
    <>
      <img className={styles.avatar} src={avatar} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <span className={styles.capital}>
        {capital} <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default ForbesListItem;
