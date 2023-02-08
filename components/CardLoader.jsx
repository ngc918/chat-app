import React from "react";
import Image from "next/image";

const CardLoader = () => {
	return (
		<div className="w-full py-3 px-5 border rounded-xl border-[#2b2b2b] hover:bg-[#1d1d1d] space-y-2">
			<div className="w-full h-[10px] bg-[#fff] animate-pulse"></div>
			<div className="w-[50%] h-[10px] bg-[#fff] animate-pulse"></div>
			<div className="w-[70%] h-[10px] bg-[#fff] animate-pulse"></div>
		</div>
	);
};

export default CardLoader;
