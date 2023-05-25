import { useStateContext } from "../../context/contextProvider";

function ItemsList() {
  const {state} = useStateContext();

  const { rows, loading, error } = state.items;

  return (
    <div>
      {rows.map(row => (
        <div key={row.uuid}>{row.label} {row.price}</div>
      ))}
    </div>
  )
}

export default ItemsList;
