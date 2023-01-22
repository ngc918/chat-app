import React from "react";
import Loader from "../public/gifs/Loading.gif";
import Image from "next/image";

const Loading = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen overflow-hidden bg-[#161621]">
			<Image src={Loader} alt="" />
		</div>
	);
};

export default Loading;
