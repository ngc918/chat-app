import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";

function MyApp({ Component, pageProps }) {
	const [user, loading] = useAuthState(auth);
	if (!user) return <Login />;
	return (
		<div className="flex">
			<Sidebar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
