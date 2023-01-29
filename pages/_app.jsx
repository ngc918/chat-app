import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import Loading from "../components/Loading";
import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/init";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
	const [user, loading] = useAuthState(auth);

	useEffect(() => {
		window.addEventListener("beforeunload", function (e) {
			let confirmationMessage = ("Do you want to leave?"(
				e || window.event
			).returnValue = confirmationMessage);
			if (user) {
				setDoc(
					doc(db, "users", user?.uid),
					{
						name: user?.displayName,
						email: user?.email,
						imageURL: user?.photoURL,
						online: false,
					},
					{ merge: true }
				);
			}
		});
		if (user) {
			setDoc(
				doc(db, "users", user?.uid),
				{
					name: user?.displayName,
					email: user?.email,
					imageURL: user?.photoURL,
					online: true,
				},
				{ merge: true }
			);
		}
	});

	if (!user) return <Login />;
	if (loading) return <Loading />;

	return (
		<div className="flex">
			<Sidebar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
