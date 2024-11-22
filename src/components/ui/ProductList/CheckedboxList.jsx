function CheckedboxList({ checkedItems, handleCheckboxChange, items }) {
  return (
    <div className="space-y-2 px-4">
      {items.map((item) => (
        <label key={item.id} className="flex items-center gap-2.5">
          <input
            type="checkbox"
            checked={checkedItems[item.id] || false}
            onChange={() => handleCheckboxChange(item.id)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span
            className={
              checkedItems[item.id] ? "text-blue-600" : "text-gray-700"
            }
          >
            {item.label}
          </span>
        </label>
      ))}
    </div>
  );
}

export default CheckedboxList;
