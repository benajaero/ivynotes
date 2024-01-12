export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Editor",
      href: "/editor",
    },
	],
	rightNavLoggedOutItems: [
		{
			label: "Sign In",
			href: "/sign-in"
		}
	],
	rightNavLoggedInItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Account",
			href: "/account",
		},
		{
			label: "Log Out",
			href: "/logout"
		}

	],
	navMenuItems: [
		],
	links: {
		github: "https://github.com/benajaero/ivynotes",
		twitter: "",
		discord: "",
    sponsor: ""
	},
};
