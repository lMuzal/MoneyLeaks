import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker() {
  const [dateFormat, setDateFormat] = useState("dd-MM-yyyy");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleFormatChange = (e) => {
    setDateFormat(e.target.value);
  };

  return (
    <div>
      <label htmlFor="dateFormatSelect">Select date format:</label>
      <select
        id="dateFormatSelect"
        value={dateFormat}
        onChange={handleFormatChange}
      >
        <option value="dd-MM-yyyy">DD-MM-YYYY</option>
        <option value="MM-dd-yyyy">MM-DD-YYYY</option>
        <option value="yyyy-MM-dd">YYYY-MM-DD</option>
      </select>

      <br />

      <label htmlFor="myDateInput">Select a date:</label>
      <DatePicker
        id="myDateInput"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat={dateFormat}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  );
}
