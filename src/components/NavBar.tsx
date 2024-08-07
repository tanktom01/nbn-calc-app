import { TopNavigation } from "@cloudscape-design/components";
import logo from "../assets/vector-logo.png";

const NavBar = () => {
  return (
    <TopNavigation
      identity={{
        href: "/",
        title: "Usage Calculator",
        logo: {
          src: `${logo}`,
        },
      }}
      utilities={[
        {
          type: "button",
          text: "Learning",
          href: "/learning",
          externalIconAriaLabel: " (opens in a new tab)",
        },
        {
          type: "button",
          text: "Other Tools",
          href: "/other-tools",
          externalIconAriaLabel: " (opens in a new tab)",
        },
        {
          type: "button",
          text: "Feedback",
          href: "/feedback",
          externalIconAriaLabel: " (opens in a new tab)",
        },
      ]}
    />
  );
};

export default NavBar;
