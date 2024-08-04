type Hour = {
  name: string;
  url: string;
  day: string;
  time: string;
  location: string;
  logo: string; // Add the logo property here
};

function getHourFromName(name: string): Hour | undefined {
  return HOURS.find((hour) => hour.name === name);
}

function getHourWithURL(url: string): Hour | undefined {
  return HOURS.find((hour) => hour.url === url);
}

function getHoursWithDay(day: string): Hour[] {
  return HOURS.filter((hour) => hour.day === day);
}

const HOURS: Hour[] = [
  {
    name: "Math - Allen",
    url: "https://acecoding.org/",
    day: "Monday",
    time: "3:00 PM",
    location: "Portable 1",
    logo: "/hours/ace_coding_logo.svg",
  },
  {
    name: "Amador UAVs",
    url: "https://amadoruavs.com/",
    day: "Tuesday",
    time: "12:45 PM",
    location: "G1",
    logo: "/hours/avuavs.svg",
  },
  {
    name: "Amador Valley Artificial Intelligence Hour",
    url: "https://amadorvalleyai.wixsite.com/avai",
    day: "Monday",
    time: "12:45 PM",
    location: "J6",
    logo: "/hours/ai.svg",
  },
  {
    name: "AV Botz",
    url: "https://www.avbotz.com/",
    day: "Wednesday",
    time: "2:00 PM",
    location: "G1",
    logo: "/hours/avbotz.svg",
  },
  {
    name: "AV CyberSecurity",
    url: "https://sites.google.com/view/amadorhourswalkthrough/av-cybersecurity",
    day: "Thursday",
    time: "3:30 PM",
    location: "H1",
    logo: "/hours/avcyber.svg",
  },
  {
    name: "AV Fencing Hour",
    url: "https://avfencing.weebly.com",
    day: "Friday",
    time: "3:30 PM",
    location: "H2",
    logo: "/hours/avfc-transparent.svg",
  },
  {
    name: "Histroy - Anderson",
    url: "https://sites.google.com/view/amadorhourswalkthrough/av-hosa",
    day: "Tuesday",
    time: "3:30 PM",
    location: "L3",
    logo: "/hours/HOSA.svg",
  },
  {
    name: "Math - Cheng",
    url: "https://avhsbiotechhour.wixsite.com/aspire",
    day: "Wednesday",
    time: "12:45 PM",
    location: "C2",
    logo: "/hours/biotech.svg",
  },
  {
    name: "Spanish - Eyewe",
    url: "https://sites.google.com/view/amadorhourswalkthrough/deca-business-academy",
    day: "Thursday",
    time: "3:30 PM",
    location: "L4",
    logo: "/hours/DECA-Logo.svg",
  },
  {
    name: "CTE/PLTW - Thai",
    url: "https://avhsgwc.weebly.com/",
    day: "Monday",
    time: "3:30 PM",
    location: "H3",
    logo: "/hours/Girls_Who_Code_Logo.svg",
  },
  {
    name: "English - Kramer",
    url: "https://sites.google.com/view/amadorhourswalkthrough/model-congress",
    day: "Tuesday",
    time: "3:00 PM",
    location: "D10",
    logo: "/hours/model.svg",
  },
  {
    name: "Math - Allen",
    url: "https://avscioly.weebly.com/",
    day: "Thursday",
    time: "3:30 PM",
    location: "B6",
    logo: "/hours/science_olympiad_inc_logo.svg",
  },
];

export default HOURS;
export { getHourFromName, getHoursWithDay, getHourWithURL };
export type { Hour };
