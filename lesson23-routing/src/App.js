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
import Parent from './components/pages/NestedRoute/Parent';
import Nested1 from './components/pages/NestedRoute/Nested1';
import Nested2 from './components/pages/NestedRoute/Nested2';
import DetailPost from './components/pages/DetailPost';

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
				<Route path='/post/:id' element={<DetailPost />} />
				<Route path='/parent' element={<Parent />}>
					{/* localhost:3000/parent/nested1 */}
					<Route path='nested1' element={<Nested1 />} />
					<Route path='nested2' element={<Nested2 />} />
				</Route>
				<Route path='/abc' element={<Parent />}>
					{/* localhost:3000/abc/xyz */}
					<Route path='xyz' element={<Nested1 />} />
				</Route>
				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
