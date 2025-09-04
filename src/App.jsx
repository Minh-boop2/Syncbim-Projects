import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ErrorPage from "./pages/ErrorPage";
import AppPage from "./pages/AppPage";
import PicturePage from "./pages/PicturePage";
import BackToTop from "./utils/BackToTop";
import ScrollToAnchor from "./utils/ScrollToAnchor";
import Datapage from "./pages/Datapage";
import TechBackground from "./components/common/TechBackground";
import Test from "./pages/test";
// import useTheme from "./utils/useTheme";
// import { useState } from "react";

const App = () => {
	// const [colorTheme, setColorTheme] = useTheme();
	// const [darkSide, setDarkSide] = useState(
	// 	colorTheme === "light" ? true : false
	// );

	return (
		<>
			<BackToTop />
			<ScrollToAnchor />
			<div className="relative overflow-hidden">
				<TechBackground />
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/mobile" element={<AppPage />} />
					<Route path="/pictures" element={<PicturePage />} />
					<Route path="/ourteam" element={<TeamPage />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/data" element={<Datapage />} />
					<Route path="/s" element={<Test />} />
				</Routes>
				<Footer />
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
