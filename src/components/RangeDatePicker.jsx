import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RangeDatePicker({ handleDateTime }) {
  const handleDateChange = (value) => {
    const currentDate = new Date();
    const formattedData = new Date(value.$d).toISOString().slice(0,19);
    handleDateTime(
      {
        dueDate: formattedData,
      },
      {
        startDate: currentDate,
        endDate: value.$d,
      }
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="landscape"
          className="rounded-xl w-2xl h-full"
          onAccept={(e) => handleDateChange(e)}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
