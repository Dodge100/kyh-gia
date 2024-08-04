type Club = {
  name: string;
  url: string;
  day: string;
  time: string;
  location: string;
  logo: string; // Add the logo property here
};

function getClubFromName(name: string): Club | undefined {
  return CLUBS.find((club) => club.name === name);
}

function getClubWithURL(url: string): Club | undefined {
  return CLUBS.find((club) => club.url === url);
}

function getClubsWithDay(day: string): Club[] {
  return CLUBS.filter((club) => club.day === day);
}

const CLUBS: Club[] = [
  {
    name: "ACE Coding",
    url: "https://acecoding.org/",
    day: "Friday",
    time: "3:30 PM",
    location: "Portable 1",
    logo: "/clubs/ace_coding_logo.svg",
  },
  {
    name: "Amador UAVs",
    url: "https://amadoruavs.com/",
    day: "Tuesday",
    time: "12:45 PM",
    location: "G1",
    logo: "/clubs/avuavs.svg",
  },
  {
    name: "Amador Valley Artificial Intelligence Club",
    url: "https://amadorvalleyai.wixsite.com/avai",
    day: "Monday",
    time: "12:45 PM",
    location: "J6",
    logo: "/clubs/ai.svg",
  },
  {
    name: "AV Botz",
    url: "https://www.avbotz.com/",
    day: "Sunday",
    time: "2:00 PM",
    location: "G1",
    logo: "/clubs/avbotz.svg",
  },
  {
    name: "AV CyberSecurity",
    url: "https://sites.google.com/view/amadorclubswalkthrough/av-cybersecurity",
    day: "Wednesday",
    time: "3:30 PM",
    location: "H1",
    logo: "/clubs/avcyber.svg",
  },
  {
    name: "AV Fencing Club",
    url: "https://avfencing.weebly.com",
    day: "Thursday",
    time: "3:30 PM",
    location: "H2",
    logo: "/clubs/avfc-transparent.svg",
  },
  {
    name: "AV HOSA Club",
    url: "https://sites.google.com/view/amadorclubswalkthrough/av-hosa",
    day: "Thursday",
    time: "3:30 PM",
    location: "L3",
    logo: "/clubs/HOSA.svg",
  },
  {
    name: "BioTechnology Club",
    url: "https://avhsbiotechclub.wixsite.com/aspire",
    day: "Wednesday",
    time: "12:45 PM",
    location: "C2",
    logo: "/clubs/biotech.svg",
  },
  {
    name: "DECA",
    url: "https://sites.google.com/view/amadorclubswalkthrough/deca-business-academy",
    day: "Friday",
    time: "3:30 PM",
    location: "L4",
    logo: "/clubs/DECA-Logo.svg",
  },
  {
    name: "Girls Who Code",
    url: "https://avhsgwc.weebly.com/",
    day: "Monday",
    time: "3:30 PM",
    location: "H3",
    logo: "/clubs/Girls_Who_Code_Logo.svg",
  },
  {
    name: "Model Congress",
    url: "https://sites.google.com/view/amadorclubswalkthrough/model-congress",
    day: "Tuesday",
    time: "3:00 PM",
    location: "D10",
    logo: "/clubs/model.svg",
  },
  {
    name: "Science Olympiad Club",
    url: "https://avscioly.weebly.com/",
    day: "Monday",
    time: "3:30 PM",
    location: "B6",
    logo: "/clubs/science_olympiad_inc_logo.svg",
  },
];

export default CLUBS;
export { getClubFromName, getClubsWithDay, getClubWithURL };
export type { Club };
