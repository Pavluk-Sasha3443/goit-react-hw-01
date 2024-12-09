import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.border}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.border} key={id}>
            <td className={css.line}>{type}</td>
            <td className={css.line}>{amount}</td>
            <td className={css.line}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
