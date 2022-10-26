import React from "react";
import Github from "../images/github.svg";
import Slack from "../images/slack.svg";

const Links = () => {
  const linkData = [
    {
      id: "btn__zuri",
      text: "Zuri",
      link: "https://training.zuri.team/",
    },
    {
      id: "books",
      text: "Coding & Design Books",
      link: "http://books.zuri.team",
    },
    {
      id: "book__python",
      text: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=<Muakone>",
    },
    {
      id: "pitch",
      text: "Background Check for Coders",
      link: "https://background.zuri.team",
    },
    {
      id: "book_design",
      text: "Design Books",
      link: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <div className="link_container">
      {linkData.map((data, index) => (
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          id={data.id}
          className="link_btn"
          key={index}
        >
          <div className="text_subtext">
            <h5>{data.text}</h5>
          </div>
        </a>
      ))}
      <div id="icons">
        <img src={Slack} alt="slack-icon" />
        <a href="https://github.com/muakone">
          <img src={Github} alt="github-icon" />
        </a>
      </div>
    </div>
  );
};

export default Links;
