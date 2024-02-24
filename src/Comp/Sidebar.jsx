export const Menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "location",
            to: "/location",
          },
        ],
      },
    ],
  },
  {
    label: "settings",
    to: "/settings",
    children: [
      {
        label: "acount",
        to: "/acount",
      },
      {
        label: "security",
        to: "/security",
        children: [
          {
            label: "Login",
            to: "/login",
          },
          {
            label: "Register",
            to: "/register",
          },
        ],
      },
    ],
  },
];
