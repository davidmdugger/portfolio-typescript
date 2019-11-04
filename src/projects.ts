export interface Project {
  name: string;
  image: string;
  skills: Array<string>;
  desc: string;
  github: string;
}

export const projects: Array<Project> = [
  {
    name: "denver developer depot",
    image: "denver-developer-depot",
    skills: ["node", "express", "mongodb", "react"],
    desc:
      "This is a full stack web app with a backend REST API in node.js and Express, mongoDB as the database, and I use React and Redux on the fronted end. The web app has full user authentication, and I securely share JSON data with JSON Web Tokens and decode it on the frontend.",
    github: "https://github.com/davidmdugger/denver-developer-depot"
  },
  {
    name: "burger builder",
    image: "burger-builder",
    skills: ["javascript", "react", "css"],
    desc:
      "Using React, I built a burger app that allows you to build your own burger",
    github: "https://github.com/davidmdugger/build-a-burger"
  },
  {
    name: "crypto react",
    image: "crypto-react",
    skills: ["react", "javascript", "node", "css"],
    desc:
      "A project using React.js, Bootstrap for React, and JavaScript that I’ve written to help inform people about cryptocurrencies and why the underlying technology is so revolutionary.",
    github: "https://github.com/davidmdugger/crypto-app"
  },
  {
    name: "campground connect",
    image: "campground-connect",
    skills: ["node", "express", "mongodb", "javascript"],
    desc:
      "A full stack JavaScript web app that allows users to sign up, login, logout, create a campground and provide a name, price, and description. In addition, other users who are logged in can comment on the campground. It has full authorization: only users that created the campground can edit said campground.",
    github: "https://github.com/davidmdugger/CampgroundConnect"
  },
  {
    name: "node blog",
    image: "node-blog",
    skills: ["node", "javascript", "mongodb", "css"],
    desc:
      "This a blog written with a node.js, Express, and mongoDB backend. It was my first attempt at building a node.js project with a few routes. I am using mLab for hosting the DB on their AWS servers.",
    github: "https://github.com/davidmdugger/nodejs-simple-blog"
  },
  {
    name: "php restaurant",
    image: "php-restaurant",
    skills: ["php", "html", "css", "bootstrap"],
    desc:
      "This is a restuarant built using PHP as the scripting langauge. I wanted to better understand PHP, so I built this little home kitchen website one day. Trust me, I don't actually eat the items listed, I just had some fun with it. It has a menu and even calculates tips and recommends drinks with meals.",
    github: "https://github.com/davidmdugger/php-restaurant"
  },
  {
    name: "auburn state theater",
    image: "auburn",
    skills: ["php", "javascript", "html", "css"],
    desc:
      "This is a project I helped build when I interned at BCom solutions. I don't have the source code for this one, because it was a team effort during my internship",
    github: "https://auburnstatetheater.com/"
  }
];
