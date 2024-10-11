import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const DefaultLayout = (props) => {
	return (
		<>
			<Navigation />
			<Header />
			{/* Nội dung trang web */}
            {props.children}
			<Footer />
		</>
	);
};

export default DefaultLayout;
