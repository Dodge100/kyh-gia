type School = {
  name: string;
  url: string;
  zip: string;
  city: string;
  state: string;
  country: string;
};

function getSchoolFromName(name: string): School | undefined {
  return SCHOOLS.find((school) => school.name === name);
}

function getSchoolWithUrl(url: string): School | undefined {
  return SCHOOLS.find((school) => school.url === `/schools/${url}`);
}

const SCHOOLS: School[] = [
  {
    name: "Amador Valley High School",
    url: "/schools/amador-valley-high-school",
    zip: "94566",
    city: "Pleasanton",
    state: "CA",
    country: "USA",
  },
  {
    name: "Foothill High School",
    url: "/schools/foothill-high-school",
    zip: "94588",
    city: "Pleasanton",
    state: "CA",
    country: "USA",
  },
  {
    name: "Granada High School",
    url: "/schools/granada-high-school",
    zip: "94550",
    city: "Livermore",
    state: "CA",
    country: "USA",
  },
  {
    name: "Dublin High School",
    url: "/schools/dublin-high-school",
    zip: "94568",
    city: "Dublin",
    state: "CA",
    country: "USA",
  },
  {
    name: "Emerald High School",
    url: "/schools/emerald-high-school",
    zip: "54013",
    city: "Dublin",
    state: "CA",
    country: "USA",
  },
  {
    name: "Dougherty Valley High School",
    url: "/schools/dougherty-valley-high-school",
    zip: "94506",
    city: "San Ramon",
    state: "CA",
    country: "USA",
  },
  {
    name: "California High School",
    url: "/schools/california-high-school",
    zip: "94588",
    city: "San Ramon",
    state: "CA",
    country: "USA",
  },
  {
    name: "Monte Vista High School",
    url: "/schools/monte-vista-high-school",
    zip: "94583",
    city: "Danville",
    state: "CA",
    country: "USA",
  },
  {
    name: "Castro Valley High School",
    url: "/schools/castro-valley-high-school",
    zip: "94546",
    city: "Castro Valley",
    state: "CA",
    country: "USA",
  },
  {
    name: "Arroyo High School",
    url: "/schools/arroyo-high-school",
    zip: "94580",
    city: "San Lorenzo",
    state: "CA",
    country: "USA",
  },
  {
    name: "San Lorenzo High School",
    url: "/schools/san-lorenzo-high-school",
    zip: "94580",
    city: "San Lorenzo",
    state: "CA",
    country: "USA",
  },
  {
    name: "Mission San Jose High School",
    url: "/schools/mission-san-jose-high-school",
    zip: "94539",
    city: "Fremont",
    state: "CA",
    country: "USA",
  },
  {
    name: "Washington High School",
    url: "/schools/washington-high-school",
    zip: "94536",
    city: "Fremont",
    state: "CA",
    country: "USA",
  },
  {
    name: "Irvington High School",
    url: "/schools/irvington-high-school",
    zip: "41800",
    city: "Fremont",
    state: "CA",
    country: "USA",
  },
];

export default SCHOOLS;
export { getSchoolFromName, getSchoolWithUrl };
export type { School };
