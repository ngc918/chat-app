import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import DefaultImage from "../public/images/default.png";

const Sidebar = () => {
	return (
		<div className="w-[450px] h-screen p-5 bg-[#272727]">
			<div className="flex items-center w-full space-x-4">
				<div>
					<button className="text-2xl group">
						<FiMenu />
						<div className="w-[300px] rounded-b-xl rounded-tr-xl absolute bg-[#4f4f4f92] flex flex-col justify-center items-center p-5 top-16 left-12 backdrop-blur-sm -z-[1] opacity-0 group-focus:z-[1] group-focus:opacity-100">
							<div className="w-[100px] h-[100px] overflow-hidden border rounded-full">
								<Image
									src={DefaultImage}
									alt="profile image"
									width={80}
									height={80}
									priority={true}
									quality={100}
									className="border rounded-full"
								/>
							</div>
							<div className="w-full">
								<h1 className="text-xl my-2">Barry Allen</h1>
								<button className="text-xl bg-[#fff] w-full text-black py-1 rouned-md hover:bg-[#f00] transition-colors">
									Logout
								</button>
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
					/>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
