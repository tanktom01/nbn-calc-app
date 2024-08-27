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
          iconName: "file",
          text: "Learning",
          href: "/learning",
          externalIconAriaLabel: " (opens in a new tab)",
        },
        {
          type: "button",
          iconName: "suggestions",
          text: "Other Tools",
          href: "/other-tools",
          externalIconAriaLabel: " (opens in a new tab)",
        },
        /*
        {
          type: "button",
          text: "Feedback",
          href: "/feedback",
          externalIconAriaLabel: " (opens in a new tab)",
        },
      */
      ]}
    />
  );
};

export default NavBar;
