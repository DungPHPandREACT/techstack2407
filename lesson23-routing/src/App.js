import { Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Product from './components/pages/Product';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Post from './components/pages/Post';
import Navigation from './components/layouts/Navigation';
import './App.css';

const App = () => {
	return (
		<div>
			<Navigation />
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/product' element={<Product />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/post' element={<Post />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
