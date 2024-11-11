import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Students from './Students';
import StudentsQuery from './StudentsQuery';
import StudentDetails from './StudentDetails';

const App = () => {
	return (
		<div>
			<NavLink to='/student' style={{ margin: '12px' }}>
				Student truyền thống
			</NavLink>
			<NavLink to='/student-query' style={{ margin: '12px' }}>
				Student query
			</NavLink>
			<NavLink to='/student-query/1' style={{ margin: '12px' }}>
				Student chi tiết
			</NavLink>
			<Routes>
				<Route path='student' element={<Students />} />
				<Route path='student-query' element={<StudentsQuery />} />
				<Route path='student-query/:id' element={<StudentDetails />} />
			</Routes>
		</div>
	);
};

export default App;
