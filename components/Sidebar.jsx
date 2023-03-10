import { React, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import DefaultImage from "../public/images/default.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/init";
import { signOut } from "firebase/auth";
import Card from "../components/Card";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import CardLoader from "../components/CardLoader";

const Sidebar = () => {
	const [search, setSearch] = useState("");
	const [user, loading] = useAuthState(auth);
	console.log(user);

	const logout = async () => {
		await signOut(auth);
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
	};

	const usersRef = collection(db, "users");
	const [userSnapShot, loading2] = useCollection(usersRef);
	console.log(userSnapShot?.docs[0]?.data);

	return (
		<div className="w-[450px] h-screen p-5 bg-[#272727]">
			<div className="flex items-center w-full space-x-4">
				<div>
					<button className="text-2xl group">
						<FiMenu />
						<div className="w-[300px] rounded-b-xl rounded-tr-xl absolute bg-[#4f4f4f92] flex flex-col justify-center items-center p-5 top-16 left-12 backdrop-blur-sm -z-[1] opacity-0 group-focus:z-[1] group-focus:opacity-100">
							<div className="w-[100px] h-[100px] overflow-hidden border rounded-full">
								<Image
									src={user?.photoURL}
									alt="profile image"
									width={100}
									height={100}
									priority={true}
									quality={100}
								/>
							</div>
							<div className="w-full">
								<h1 className="text-xl my-2">{user?.displayName}</h1>
								<div
									className="text-xl bg-[#fff] w-full text-black py-1 rounded-md hover:bg-[#92929275] transition-colors hover:text-white cursor-pointer"
									onClick={logout}
								>
									Logout!
								</div>
							</div>
						</div>
					</button>
				</div>
				<div className="relative w-full flex items-center">
					<div className="text-xl absolute left-3">
						<AiOutlineSearch />
					</div>
					<input
						type="text"
						className="border bg-transparent w-full px-10 py-2 rounded-full border-[#494949] outline-none focus:border-[#cd71ff]"
						placeholder="Search"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						value={search}
					/>
					{search.length > 0 && (
						<button
							className="absolute right-4 text-2xl"
							onClick={() => {
								setSearch("");
							}}
						>
							<IoMdClose />
						</button>
					)}
				</div>
			</div>
			<div
				className={
					search.length > 0
						? "w-full h-screen overflow-y-auto mt-5 transition-all"
						: "w-full h-0 overflow-y-auto mt-5 transition-all"
				}
			>
				{!loading2 ? (
					userSnapShot?.docs?.map((item) => {
						if (
							item.data().name.toLowerCase().includes(search.toLowerCase()) &&
							item.data().name !== user?.displayName
						) {
							return (
								<Card
									key={item.id}
									name={item.data().name}
									imageURL={item.data().imageURL}
								/>
							);
						}
					})
				) : (
					<div>
						<CardLoader />
						<CardLoader />
						<CardLoader />
					</div>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
