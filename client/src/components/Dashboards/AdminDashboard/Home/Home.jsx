import { ShortCard } from "./ShortCard";
import { List } from "./List";
import getTotalStudents from './getTotalStudents';
import getTotalComplaints from "./getTotalComplaints";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Home() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const storedHostel = JSON.parse(localStorage.getItem("hostel"));
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalComplaints, setTotalComplaints] = useState(0);
  const [hostels, setHostels] = useState([]);
  const [selectedHostel, setSelectedHostel] = useState(storedHostel || {});
  const [messReqs, setMessReqs] = useState([]);
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      title: "Varun [ Room: 368 ]",
      desc: "from 28-5-2023 to 29-5-2023",
    },
    {
      id: 1,
      title: "Kishan [ Room: 368 ]",
      desc: "from 28-5-2023 to 29-5-2023",
    },
  ]);

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/student/getallhostelnames");
        const data = await res.json();
        if (data.success) {
          setHostels(data.hostels);
        }
      } catch (error) {
        console.error("Error fetching hostels:", error);
      }
    };

    fetchHostels();
  }, []);

  const getRequests = async () => {
    const hostel = JSON.parse(localStorage.getItem("hostel"));
    console.log(hostel);
    const res = await fetch("http://localhost:3000/api/messoff/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hostel: hostel._id }),
    });
    const data = await res.json();
    if (data.success) {
      data.list.map((req) => {
        req.id = req._id;
        req.from = new Date(req.leaving_date).toDateString().slice(4, 10);
        req.to = new Date(req.return_date).toDateString().slice(4, 10);
        req._id = req.student._id;
        req.student.name = req.student.name;
        req.student.room_no = req.student.room_no;
        req.status = req.status;
        req.title = `${req.student.name} [ Room: ${req.student.room_no}]`,
          req.desc = `${req.from} to ${req.to}`
      });
      setMessReqs(data.list);
    }
  };

  useEffect(() => {
    console.log("Inside useEffect");
    getTotalStudents().then(total => {
      console.log("Total students:", total);
      setTotalStudents(total);
    }).catch(error => {
      console.error("Error fetching total students:", error);
    });

    console.log("Inside useEffect");
    getTotalComplaints().then(total => {
      console.log("Total Complaints:", total);
      setTotalComplaints(total);
    }).catch(error => {
      console.error("Error fetching total complaints:", error);
    });
  }, []);

  const handleHostelChange = (event) => {
    const selectedHostel = hostels.find(h => h._id === event.target.value);

    setSelectedHostel(selectedHostel);
    localStorage.setItem("hostel", JSON.stringify(selectedHostel));
    getRequests();
    window.location.reload();
  };

  const messIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
      />
    </svg>
  );

  const suggestionIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const data = [
    {
      name: "",
      DailyComplaints: 20,
    },
    {
      name: "",
      DailyComplaints: 40,
    },
    {
      name: "",
      DailyComplaints: 15,
    },
    {
      name: "",
      DailyComplaints: 90,
    },
    {
      name: "",
      DailyComplaints: 3,
    },
    {
      name: "",
      DailyComplaints: 50,
    },
    {
      name: "",
      DailyComplaints: 20,
    },
  ];

  const graph = (
    <ResponsiveContainer
      width="100%"
      height="85%"
      className={
        "bg-blue-950 px-7 py-5 rounded-xl shadow-xl w-full max-w-[350px] max-h-96"
      }
    >
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 50,
          bottom: 15,
          left: -25,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Legend verticalAlign="top" height={36} />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="DailyComplaints"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center max-h-screen overflow-x-hidden overflow-y-auto pt-[400px] sm:pt-96 md:pt-96 lg:pt-80 xl:pt-20" style={{ backgroundImage: 'url(https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/06/soft_blue_mosaic_pattern_background-e1655909204819.jpg?resize=1000%2C750&ssl=1)' }}>
      <h1 className="text-black font-bold text-5xl text-center">
        Welcome <span className="text-black">{admin.name || "admin"}!</span>
      </h1>
      <div className="text-black font-semibold flex items-center gap-20">

        <div className="flex items-center gap-3">

          <p>Choose Hostel: </p>
          <select
            value={selectedHostel._id || ""}
            onChange={handleHostelChange}
            className="bg-neutral-800 text-white px-2 py-1 rounded-md"
          >
            <option value="" disabled>Select hostel</option>
            {hostels.map(hostel => (
              <option key={hostel._id} value={hostel._id}>
                {hostel.name}
              </option>
            ))}
          </select>
        </div>
        <p>Current Selected: {selectedHostel.name}</p>
      </div>
      <h1 className="text-black text-xl font-bold">Manager, {selectedHostel.name || "hostel"}</h1>
      <div className="flex w-full gap-5 sm:px-20 pt-5 flex-wrap items-center justify-center">
        <ShortCard title="Total Students" number={totalStudents} />
        <ShortCard title="Total Complaints" number={totalComplaints} />
        <ShortCard title="Total Suggestions" number={70} />
      </div>
      <div className="w-full flex gap-5 sm:px-20 h-80 flex-wrap items-center justify-center">
        <List list={messReqs} title="mess" icon={messIcon} />
        {graph}
        <List list={suggestions} title="suggestions" icon={suggestionIcon} />
      </div>
    </div>
  );
}

export default Home;
