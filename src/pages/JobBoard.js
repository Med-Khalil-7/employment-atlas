import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import Title from "../components/Title";
import SearchFilter from "../components/SearchFilter";
import Subscribe from "../components/Subscribe";
import Links from "../components/Links";
import Footer from "../components/Footer";
import Table from "../components/Table";
import NavBar from "../components/NavBar";

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const thedata = [
    {
      index: 1,
      company: { name: "Automattic", href: "https://fossfox.com/automattic" },
      founded: "2005",
      building: {
        name: "WordPress.com",
        href: "https://wordpress.com/fr/?ref=fossfox",
      },
      stack: [
        { name: "Docker", href: "https://fossfox.com/docker" },
        { name: "K8s", href: "https://fossfox.com/kubernetes" },
        { name: "PHP", href: "https://fossfox.com/php" },
        { name: "+8 more", href: "https://fossfox.com/automattic" },
      ],
      oss: true,
      activity:
        "0 3 4 2 9 2 13 2 17 3 22 3 26 7 30 4 35 3 39 4 43 7 48 3 52 3 57 3 61 5 65 13 70 9 74 3 78 4 83 3 87 5 91 2 96 5 100 0",
      offices: [
        {
          name: "Sydney",
          href: "https://fossfox.com/jobs-in-sydney-australia",
        },
        { name: "+1 more", href: "https://fossfox.com/h2oai" },
      ],
      hiring: {
        name: "Sr SysAdmin",
        href: "https://fossfox.com/senior-system-administrator-at-automattic",
      },
      compensation: "$130k-160k/yr USD",
      type: { name: "Devops", href: "https://fossfox.com/devops-jobs" },
      employment: {
        name: "Full-time",
        href: "https://fossfox.com/full-time-jobs",
      },
      applyLink: { text: "apply", href: "https://fossfox.com/~5jwg" },
    },
  ];

  const [data, setData] = useState(thedata);

  return (
    <>
      <NavBar />
      <div className="pd-top-60">
        <div className="app-left" />
        <div className="app-main">
          <div className="app-page-contents">
            <Title />
            {/* Pass searchQuery and setSearchQuery to SearchFilter component */}
            <SearchFilter
              data={thedata}
              setData={setData}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            {/* Pass searchQuery to Table component */}
            <Table data={data} searchQuery={searchQuery} />
          </div>
          <div className="app-footer">
            <Subscribe />
            <div className="app-footer-test">
              <div className="app-footer-links">
                <Links />
              </div>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
