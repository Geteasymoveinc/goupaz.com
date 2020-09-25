import { v4 as uuidv4 } from "uuid"

export const data = {
  people: [
{
      id: uuidv4(),
      name: "Sako M",
      img: "https://avatars3.githubusercontent.com/u/43357548?v=4",
      links: {
        website: "https://goupaz.com",
        linkedin: "https://www.linkedin.com/in/sakom/",
        github: "https://github.com/sakomws",
      },
      jobTitle: "DevOps",
      location: {
        city: "Redwood",
        state: "California",
        country: "USA",
      },
    },
    {
      id: uuidv4(),
      name: "Emin ALiyev",
      img: "https://miro.medium.com/fit/c/128/128/1*t99ZVny9-TsgHLhSWXAvdQ.jpeg",
      links: {
        website: "https://medium.com/@eminfaliyev",
        linkedin: "https://www.linkedin.com/in/eminfaliyev/",
        github: "",
      },
      jobTitle: "Founder/ CEO",
      location: {
        city: "Chicago",
        state: "Illinois",
        country: "USA",
      },
    },
  ],
}
