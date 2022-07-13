import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";
import "../css/date.css"

export default function RainbowDatepicker() {
    const [date, setDate] = useState(null);

    function onChange(date) {
        setDate(date);
    }

    return (
        <DatePicker
            id="datePicker-1"
            value={date}
            onChange={onChange}
            formatStyle="large"
        />
    );
}