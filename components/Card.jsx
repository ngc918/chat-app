import Image from "next/image";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import DefaultImage from "../public/images/default.png";

const Card = ({ name, imageURL }) => {
	const addChat = async () => {
		const docRef = await addDoc(collection(db, "cities"), {
			name: "Tokyo",
			country: "Japan",
		});
	};
	return (
		<div className="w-full flex items-center py-3 px-5 border rounded-xl border-[#2b2b2b] space-x-6 cursor-pointer hover:bg-[#1d1d1d]">
			<div className="rounded-full w-[60px] h-[60px] overflow-hidden flex-auto marker:file:placeholder: z-[100px]">
				<Image
					src={imageURL}
					alt=""
					width={100}
					height={60}
					priority={true}
					quality={100}
				/>
			</div>
			<span>{name.Card}</span>
			<p>Hi</p>
		</div>
	);
};

export default Card;
