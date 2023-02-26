import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Data } from "./components/jsonServer/Data";
import { ContextProvider } from "./context/Context";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="">

			<Header />
			<ContextProvider>
			<Main />
			</ContextProvider>
			<Footer />
			<Data />
		</div>
	);
}

export default App;
