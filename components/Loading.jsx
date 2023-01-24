import React from "react";
import Loader from "../public/gifs/Loading.gif";
import Image from "next/image";

const Loading = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen overflow-hidden bg-[#161621]">
			<Image
				src={Loader}
				alt=""
				width={200}
				height={200}
				className="w-full"
				priority={true}
				quality={100}
			/>
		</div>
	);
};

export default Loading;
