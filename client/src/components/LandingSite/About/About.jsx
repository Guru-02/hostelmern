import { TeamCard } from "./TeamMember";
function About() {

  const varun = {
    name: "Varun",
    designation: "Front-end Engineer",
    image:
      "https://media.licdn.com/dms/image/D5603AQFNvrUIrQCWJA/profile-displayphoto-shrink_800_800/0/1687961471636?e=1721260800&v=beta&t=EjfGPc-z2wKOmStM_GxHUxx_oH8pOflH51EoHtsuQ-4",
    profileLink:  "https://www.linkedin.com/in/varun-pandhari-236b33244/?originalSubdomain=in",
  };
  const guru = {
    name: "Guruprasad",
    designation: "Backend-end Engineer",
    image:
      "https://media.licdn.com/dms/image/D5616AQGl_GSVewUHPQ/profile-displaybackgroundimage-shrink_350_1400/0/1688132562738?e=1721260800&v=beta&t=WL6H3EOMbFOXAoExqDHfz59dUkmOC2ZZDhKJKpERA7I",
    profileLink: "https://www.linkedin.com/in/guruprasad-ghaligi-1b0639232/?originalSubdomain=in",
  };
  const yemmi = {
    name: "Roshan",
    designation: "Front End Developer",
    image:
      "https://instagram.fblr4-2.fna.fbcdn.net/v/t51.2885-19/332190609_466640742255043_4615399076184429299_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fblr4-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=i0s3QfV551kQ7kNvgFu6wOO&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYDpBb7RmRgJw__wvb0_3Ir-Gk_KeUILYJxzxHznk3r0Ag&oe=6655742D&_nc_sid=8b3546",
    profileLink:"https://www.linkedin.com/in/roshan-a-yemmi-40064326a/"
  };
  const akshya = {
    name: "Akshathraj",
    designation: "Front End Developer",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    profileLink:"https://www.linkedin.com/in/akshathraj/"
  };
  const sahana = {
    name: "Sahana ",
    designation: "Database",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
    profileLink: "https://www.linkedin.com/in/sahana-aidnal-042138292/"
  };

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={varun} />
        <TeamCard member={guru} />
        <TeamCard member={yemmi} />
        <TeamCard member={sahana} />
        <TeamCard member={akshya} />
      </div>
    </>
  );
}
export { About };
