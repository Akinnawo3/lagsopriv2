const StatusFilterComponent = ({ options, callback }) => {
  return (
    <select
      id="filter-dropdown"
      name="fiter-dropdown"
      onChange={callback}
      className="p-1 px-4"
    >
      {options.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );
};
export default StatusFilterComponent;
