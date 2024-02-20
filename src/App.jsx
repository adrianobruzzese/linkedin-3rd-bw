import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/style.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/userProfile/ProfilePage";

function App() {
	return (
		<div className="bg-linkedin overflow-x-hidden">
			<BrowserRouter>
			
				<Container className="px-0">
					<Routes>
						<Route path={"/:me"} element={<ProfilePage />} />
					</Routes>

			
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;