import React from "react";
import Image from "next/image";
import GoogleLogo from "../public/images/google-logo.png";
import Logo from "../public/images/logo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/init";
const Login = () => {
	const login = async () => {
		await signInWithPopup(auth, provider);
	};
	return (
		<div className="w-full h-screen overflow-hidden bg-[#252525] flex justify-center items-center flex-col">
			<div className="flex items-center space-x-4">
				<Image
					src={Logo}
					width={100}
					height={100}
					priority={true}
					quality={100}
					alt=""
				/>
				<h1 className="text-5xl font-bold">Telegram Web</h1>
			</div>
			<div>
				<button
					className="flex items-center text-3xl bg-white text-black px-5 py-2 rounded-full hover:bg-[#e2e2e2] transition-colors font-semibold space-x-3"
					onClick={login}
				>
					<Image
						src={GoogleLogo}
						alt=""
						width={40}
						height={40}
						priority={true}
						quality={100}
					/>
					<span>Login with Google</span>
				</button>
			</div>
		</div>
	);
};

export default Login;
