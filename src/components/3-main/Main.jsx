import "./main.css";
import { useState, useEffect } from "react";

// Correctly defined Button component with destructured props
const Button = ({ state, value, onClick }) => {
  return (
    <button className={state === value ? "active" : null} onClick={onClick}>
      {value}
    </button>
  );
};

const LeftSection = ({ categories, state, setState }) => {
  const handleClick = (value) => {
    setState(value);
  };

  const buttons = categories.map((value, index) => {
    return (
      <Button
        key={index}
        value={value}
        state={state}
        onClick={() => handleClick(value)}
      />
    );
  });

  return <section className="left-section flex">{buttons}</section>;
};

const RightSection = ({ projects, state }) => {
  const articles = projects.map((elem, i) => {
    let ok = state === "All projects" || state === elem.category;
    return (
      <article key={i} className={ok? "card show" : "hide"}>
        <img width={266} src={"./public/" + elem.img + ".jpg"} alt="" />
        <div style={{ width: "266px" }} className="box">
          <h3 className="title">{elem.title}</h3>
          <p className="sub-title">{elem.description}</p>
          <div className="flex icons">
            <div style={{ gap: "11px" }} className="flex">
              <div className="icon-link"></div>
              <div className="icon-github"></div>
            </div>
            <a className="link flex" href="#">
              more
              <span
                style={{ alignSelf: "end" }}
                className="icon-arrow-right"
              ></span>
            </a>
          </div>
        </div>
      </article>
    );
  });

  return <section className="right-section flex">{articles}</section>;
};

const Main = () => {
  const categories = [
    "All projects",
    "HTML & CSS",
    "JavaScript",
    "React & MUI",
    "Node & Express",
  ];

  const projects = [
    {
      title: "React",
      category: "HTML & CSS",
      img: "1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea suscipit delectus veritatis aliquam? Nesciunt ipsum quo rem, molestiae ut maiores porro, asperiores molestias perferendis illum doloribus obcaecati quisquam error.",
    },
    {
      title: "React",
      category: "HTML & CSS",
      img: "2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea suscipit delectus veritatis aliquam? Nesciunt ipsum quo rem, molestiae ut maiores porro, asperiores molestias perferendis illum doloribus obcaecati quisquam error.",
    },
    {
      title: "React",
      category: "HTML & CSS",
      img: "3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea suscipit delectus veritatis aliquam? Nesciunt ipsum quo rem, molestiae ut maiores porro, asperiores molestias perferendis illum doloribus obcaecati quisquam error.",
    },
    {
      title: "React",
      category: "JavaScript",
      img: "4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea suscipit delectus veritatis aliquam? Nesciunt ipsum quo rem, molestiae ut maiores porro, asperiores molestias perferendis illum doloribus obcaecati quisquam error.",
    },
    {
      title: "React",
      category: "HTML & CSS",
      img: "5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea suscipit delectus veritatis aliquam? Nesciunt ipsum quo rem, molestiae ut maiores porro, asperiores molestias perferendis illum doloribus obcaecati quisquam error.",
    },
  ];

  const [state, setState] = useState("All projects");

  return (
    <main className="flex">
      <LeftSection categories={categories} state={state} setState={setState} />
      <RightSection projects={projects} state={state} />
    </main>
  );
};

export default Main;
