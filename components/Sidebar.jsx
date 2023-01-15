import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = () => {
	return (
		<div className="w-[450px] h-screen p-5 bg-[#272727]">
			<div className="flex items-center w-full space-x-4">
				<div>
					<button className="text-2xl">
						<FiMenu />
						<span>Menu</span>
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
