import Navbar from "./Navbar";

export default function Header() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const dayOfMonth = today.getDate();
  const month = monthsOfYear[today.getMonth()];
  const year = today.getFullYear();

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

  return (
    <div className="container p-5 mx-auto">
      <Navbar />
      <div id="hero" className="mt-6">
        <h1 className="text-2xl font-medium">
          Welcome, <br />
          Drian Pratama!
        </h1>
        <p className="text-paragraph text-sm mt-4">{formattedDate}</p>
      </div>
    </div>
  );
}
