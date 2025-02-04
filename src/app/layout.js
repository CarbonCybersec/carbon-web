import "./globals.css";

export const metadata = {
	title: "Carbon Security",
	description: "CarbonSec web application",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-black text-white min-h-screen">{children}</body>
		</html>
	);
}
