import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState("");

	useEffect(() => {
		fetch("http://13.232.253.155:3500/")
			.then((res) => res.json())
			.then((data) => setData(data.msg));
	}, []);

	return (
		<div>
			The data is: <b>{data}</b>
			<div>This is to check cd for ec2</div>
		</div>
	);
}

export default App;
