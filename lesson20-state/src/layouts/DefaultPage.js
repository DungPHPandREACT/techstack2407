import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const DefaultPage = (props) => {
	return (
		<>
			<Navbar />
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default DefaultPage;
