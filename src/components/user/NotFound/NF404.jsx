import { Link } from "react-router-dom";

const NF404 = () => {
	return (
		<div className="relative w-full h-screen transition-all duration-300 group pointer-events-none hover:bg-black">
			<img
				className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vh]"
				src="/404(1).webp"
				alt="Error 404 Not Found"
			/>
			<Link className="rounded-lg btn absolute top-[10%] left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl font-bold text-black bg-white text-center transition-all duration-300  border-4 border-black w-3/4 pointer-events-auto" to={"/"}> Return to The Home Page </Link>
		</div>
	);
};

export default NF404;
