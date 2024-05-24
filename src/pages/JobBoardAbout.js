import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Subscribe from "../components/Subscribe";
import Links from "../components/Links";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faWikipediaW,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faLink,
  faIdCard,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

const jobBoardData = {
  automattic: {
    name: "Automattic",
    links: [
      { href: "/job-board", icon: faArrowLeft, text: "home" },
      { href: "https://automattic.com", icon: faLink, text: "automattic.com" },
      { href: "https://github.com/automattic", icon: faGithub, text: "github" },
      {
        href: "https://twitter.com/automattic",
        icon: faTwitter,
        text: "twitter",
      },
    ],
    tooltip: { icon: faIdCard, text: "1.5k+ people" },
    description: [
      "Automattic is building publishing tools ",
      {
        type: "link",
        url: "https://wordpress.com/",
        text: "WordPress.com",
        icon: faExternalLink,
      },
      ",",
      {
        type: "link",
        url: "https://tumblr.com/",
        text: "Tumblr",
        icon: faExternalLink,
      },
      "and ",
      {
        type: "link",
        url: "https://pocketcasts.com/",
        text: "Pocket Casts",
        icon: faExternalLink,
      },
      ". Hiring for 1 ",
      { type: "link", url: "/job-board/devops-jobs", text: "devops" },
      "engineering position remotely.",
    ],
  },
  docker: {
    name: "Docker Jobs",
    links: [
      {
        href: "/job-board",
        icon: faArrowLeft,
        text: "home",
      },
      {
        href: "https://www.docker.com/",
        icon: faLink,
        text: "docker.com",
      },
      {
        href: "https://twitter.com/Docker",
        icon: faTwitter,
        text: "twitter",
      },
      {
        href: "https://github.com/docker",
        icon: faGithub,
        text: "github",
      },
      {
        href: "https://en.wikipedia.org/wiki/Docker_(software)",
        icon: faWikipediaW,
        text: "wikipedia",
      },
    ],
    description: [
      "Use Docker to work on ",
      {
        type: "link",
        url: "https://oneuptime.com",
        text: "OneUptime",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://carto.com/",
        text: "Carto",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://genieframework.com/",
        text: "Genie",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://ploomber.io/",
        text: "Ploomber",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://github.com/instill-ai/vdp",
        text: "VDP",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://wordpress.com/",
        text: "WordPress.com",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://tumblr.com/",
        text: "Tumblr",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://pocketcasts.com/",
        text: "Pocket Casts",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://www.nebuly.com/",
        text: "Nebuly",
        icon: faExternalLink,
      },
      " and ",
      {
        type: "link",
        url: "https://www.lightdash.com/",
        text: "Lightdash",
        icon: faExternalLink,
      },
      ". 15+ remote and in-office ",
      {
        type: "link",
        url: "/job-board/leadership-jobs",
        text: "leadership",
      },
      ", ",
      {
        type: "link",
        url: "/job-board/backend-jobs",
        text: "backend",
      },
      ", ",
      {
        type: "link",
        url: "/job-board/devops-jobs",
        text: "devops",
      },
      ", ",
      {
        type: "link",
        url: "/job-board/full-stack-jobs",
        text: "full-stack",
      },
      " and ",
      {
        type: "link",
        url: "/job-board/blockchain-jobs",
        text: "blockchain",
      },
      " jobs are currently available in ",
      {
        type: "location",
        text: "New York City",
        url: "/job-board/jobs-in-new-york-city",
      },
      ", ",
      {
        type: "location",
        text: "Montréal",
        url: "/job-board/jobs-in-montreal-canada",
      },
      ", ",
      {
        type: "location",
        text: "Mexico City",
        url: "/job-board/jobs-in-mexico-city-mexico",
      },
      ", ",
      {
        type: "location",
        text: "San Francisco",
        url: "/job-board/jobs-in-san-francisco-california",
      },
      ", ",
      {
        type: "location",
        text: "London",
        url: "/job-board/jobs-in-london-united-kingdom",
      },
      ", ",
      {
        type: "location",
        text: "Madrid",
        url: "/job-board/jobs-in-madrid-spain",
      },
      ", ",
      {
        type: "location",
        text: "Barcelona",
        url: "/job-board/jobs-in-barcelona-spain",
      },
      ", ",
      {
        type: "location",
        text: "Sevilla",
        url: "/job-board/jobs-in-sevilla-spain",
      },
      ", ",
      {
        type: "location",
        text: "Tel Aviv",
        url: "/job-board/jobs-in-tel-aviv-israel",
      },
      " and ",
      {
        type: "location",
        text: "Singapore",
        url: "/job-board/jobs-in-singapore",
      },
      ".",
      "<p>Docker is a platform for building, shipping, and running applications in containers. A container is a lightweight, standalone, and executable package of software that includes everything needed to run an application, such as code, libraries, system tools, and runtime. Docker provides a standardized way to package and distribute applications and makes it easy to deploy them across different environments, such as development, testing, and production, without worrying about differences in operating systems, hardware, or software dependencies.</p>",
    ],
  },
  kubernetes: {
    name: "Kubernetes Jobs",
    links: [
      {
        href: "/job-board",
        icon: faArrowLeft,
        text: "home",
      },
      {
        href: "https://kubernetes.io/",
        icon: faLink,
        text: "web.archive.org",
      },
      {
        href: "https://twitter.com/kubernetesio",
        icon: faTwitter,
        text: "twitter",
      },
      {
        href: "https://github.com/kubernetes/kubernetes",
        icon: faGithub,
        text: "github",
      },
      {
        href: "https://en.wikipedia.org/wiki/Kubernetes",
        icon: faWikipediaW,
        text: "wikipedia",
      },
    ],
    description: [
      "Use Kubernetes to work on ",
      {
        type: "link",
        url: "https://oneuptime.com",
        text: "OneUptime",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://clickhouse.com/",
        text: "Clickhouse",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://genieframework.com/",
        text: "Genie",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://www.crossplane.io/",
        text: "Crossplane",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://github.com/instill-ai/vdp",
        text: "VDP",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://wordpress.com/",
        text: "WordPress.com",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://tumblr.com/",
        text: "Tumblr",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://pocketcasts.com/",
        text: "Pocket Casts",
        icon: faExternalLink,
      },
      ", ",
      {
        type: "link",
        url: "https://www.nebuly.com/",
        text: "Nebuly",
        icon: faExternalLink,
      },
      " and ",
      {
        type: "link",
        url: "https://foxglove.dev/data-platform",
        text: "Foxglove Data Platform",
        icon: faExternalLink,
      },
      ". 15+ remote and in-office ",
      {
        type: "link",
        url: "/job-board/leadership-jobs",
        text: "leadership",
      },
      ", ",
      {
        type: "link",
        url: "/job-board/devops-jobs",
        text: "devops",
      },
      ", ",
      {
        type: "link",
        url: "/job-board/full-stack-jobs",
        text: "full-stack",
      },
      ", ",
      {
        type: "link",
        url: "/job-board/backend-jobs",
        text: "backend",
      },
      " and ",
      {
        type: "link",
        url: "/job-board/blockchain-jobs",
        text: "blockchain",
      },
      " jobs are currently available in ",
      {
        type: "location",
        text: "New York City",
        url: "/job-board/jobs-in-new-york-city",
      },
      ", ",
      {
        type: "location",
        text: "Mexico City",
        url: "/job-board/jobs-in-mexico-city-mexico",
      },
      ", ",
      {
        type: "location",
        text: "Austin",
        url: "/job-board/jobs-in-austin-texas",
      },
      ", ",
      {
        type: "location",
        text: "San Francisco",
        url: "/job-board/jobs-in-san-francisco-california",
      },
      ", ",
      {
        type: "location",
        text: "Seattle",
        url: "/job-board/jobs-in-seattle-washington",
      },
      ", ",
      {
        type: "location",
        text: "Palo Alto",
        url: "/job-board/jobs-in-palo-alto-california",
      },
      ", ",
      {
        type: "location",
        text: "London",
        url: "/job-board/jobs-in-london-united-kingdom",
      },
      ", ",
      {
        type: "location",
        text: "Barcelona",
        url: "/job-board/jobs-in-barcelona-spain",
      },
      " and ",
      {
        type: "location",
        text: "Amsterdam",
        url: "/job-board/jobs-in-amsterdam-netherlands",
      },
      ".",
      "<p>Kubernetes is a popular open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It was developed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF). Kubernetes allows users to deploy and manage containerized applications across a cluster of machines, handling tasks such as container scheduling, scaling, networking, and storage orchestration.</p>",
    ],
  },
  php: {
    name: "PHP Jobs",
    links: [
      {
        href: "/job-board",
        text: "home",
        icon: faArrowLeft,
      },
      {
        href: "https://www.php.net/",
        text: "php.net",
        icon: faLink,
      },
      {
        href: "https://twitter.com/official_php",
        text: "twitter",
        icon: faTwitter,
      },
      {
        href: "https://github.com/php/php-src",
        text: "github",
        icon: faGithub,
      },
      {
        href: "https://en.wikipedia.org/wiki/PHP",
        text: "wikipedia",
        icon: faWikipediaW,
      },
    ],
    description: [
      "Use PHP to work on ",
      {
        type: "link",
        text: "WordPress.com",
        url: "https://wordpress.com/",
        icon: faExternalLink,
      },
      ",",
      {
        type: "link",
        text: "Tumblr",
        url: "https://tumblr.com/",
        icon: faExternalLink,
      },
      ",",
      {
        type: "link",
        text: "Pocket Casts",
        url: "https://pocketcasts.com/",
        icon: faExternalLink,
      },
      "and ",
      {
        type: "link",
        text: "Matomo",
        url: "https://matomo.org/",
        icon: faExternalLink,
      },
      ". 2 remote and in-office ",
      {
        type: "location",
        text: "devops",
        url: "/job-board/devops-jobs",
      },
      {
        type: "location",
        text: "full-stack",
        url: "/job-boardfull-stack-jobs",
      },
      "jobs are currently available in ",
      {
        type: "location",
        text: "Wellington",
        url: "/job-board/jobs-in-wellington-new-zealand",
      },
      "<p>PHP is a server-side scripting language that is used to create dynamic web pages and web applications. It was created in 1994 by Rasmus Lerdorf and has since become one of the most popular programming languages for web development. It is often used in conjunction with HTML, CSS, and JavaScript to create dynamic web pages and web applications.</p>",
    ],
  },
};

const JobBoardAbout = () => {
  const [name, setName] = useState(null);
  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    if (parts.length > 1) {
      setName(parts[parts.length - 1]);
    }
  }, []);
  return (
    <>
      <NavBar />
      <div className="pd-top-60">
        <div className="app-left" />
        <div className="app-main">
          <div className="app-page-contents">
            {name !== null && name in jobBoardData &&   (
              <section className="title-container">
                <header>
                  <div className="title-content">
                    <h1 className="app-md">{jobBoardData[name].name}</h1>
                    <ul>
                      {jobBoardData[name].links.map((link, index) => (
                        <li key={index}>
                          <a className="app-link" href={link.href}>
                            <FontAwesomeIcon
                              icon={link.icon}
                              aria-hidden="true"
                              style={{ marginRight: "4px" }}
                            />
                            <span>{link.text}</span>
                          </a>
                        </li>
                      ))}
                      {jobBoardData[name].tooltip && (
                        <li>
                          <span className="app-tooltip app-tooltip--direction-1">
                            <span className="app-tooltip__contents">
                              <FontAwesomeIcon
                                icon={jobBoardData[name].tooltip.icon}
                                aria-hidden="true"
                                style={{ marginRight: "4px" }}
                              />
                              <span>{jobBoardData[name].tooltip.text}</span>
                            </span>
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="app-right" />
                </header>
                <div className="title-content">
                  <p>
                    {jobBoardData[name].description.map((item, index) => {
                      if (typeof item === "string") {
                        if (item.startsWith("<p>") && item.endsWith("</p>")) {
                          return (
                            <p>
                              <br />
                              <p
                                key={index}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </p>
                          );
                        }
                        return item;
                      }
                      return (
                        <a
                          key={index}
                          className="app-link app-link--external"
                          href={item.url}
                        >
                          {item.text}
                          {item.icon && (
                            <FontAwesomeIcon
                              icon={item.icon}
                              className="fa-icon"
                              aria-hidden="true"
                              style={{ marginLeft: "4px" }}
                            />
                          )}
                        </a>
                      );
                    })}
                  </p>
                </div>
              </section>
            )}
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
};

export default JobBoardAbout;
