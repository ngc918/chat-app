import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import Loading from "../components/Loading";
import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/init";

function MyApp({ Component, pageProps }) {
	const [user, loading] = useAuthState(auth);
	if (!user) return <Login />;
	if (true) return <Loading />;

	return (
		<div className="flex">
			<Sidebar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
