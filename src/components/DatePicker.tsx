import { useState } from "react";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { getTomorrowDate } from "../utils";

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(),
    getTomorrowDate(new Date()),
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
