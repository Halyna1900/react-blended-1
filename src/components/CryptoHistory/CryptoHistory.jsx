import { format } from 'date-fns';
import style from './CryptoHistory.module.css';
const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr className={style.tr}>
            <td className={style.td}>{item.id}</td>
            <td className={style.td}>{item.price}</td>
            <td className={style.td}>{item.amout}</td>
            <td className={style.td}>{format(item.date, 'Pp')}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default CryptoHistory;
