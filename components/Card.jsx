import Image from "next/image";
import React from "react";
import DefaultImage from "../public/images/default.png";

const Card = () => {
	return (
		<div className="w-full flex items-center py-3 px-5 border rounded-xl border-[#2b2b2b] space-x-6 cursor-pointer hover:bg-[#1d1d1d]">
			<div className="border rounded-full w-[60px] h-[60px] overflow-hidden">
				<Image
					src={DefaultImage}
					alt=""
					width={100}
					height={60}
					priority={true}
					quality={100}
				/>
			</div>
			<span>Nicolas Gonzalez</span>
		</div>
	);
};

export default Card;
