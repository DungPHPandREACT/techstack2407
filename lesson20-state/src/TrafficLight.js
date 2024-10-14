import React, { useState } from 'react';

const TrafficLight = () => {
	// 1 => red
	// 2 => yellow
	// 3 => green
	const [indexColor, setIndexColor] = useState(1);
	const nextColor = () => {
		let index = indexColor;
		index = index + 1;
		if (index > 3) {
			index = 1;
		}
		setIndexColor(index);
	};

	return (
		<div
			className='traffic-light'
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<button
				style={{ padding: '16px 36px', marginBottom: '12px' }}
				onClick={nextColor}
			>
				Next
			</button>
			<div style={{ display: 'flex' }}>
				<div
					style={{
						width: '75px',
						height: '75px',
						borderRadius: '50%',
						border: '1px solid black',
						margin: '0px 10px',
						background: indexColor === 1 ? 'red' : 'transparent',
					}}
				></div>
				<div
					style={{
						width: '75px',
						height: '75px',
						borderRadius: '50%',
						border: '1px solid black',
						margin: '0px 10px',
						background: indexColor === 2 ? 'yellow' : 'transparent',
					}}
				></div>
				<div
					style={{
						width: '75px',
						height: '75px',
						borderRadius: '50%',
						border: '1px solid black',
						margin: '0px 10px',
						background: indexColor === 3 ? 'green' : 'transparent',
					}}
				></div>
			</div>
		</div>
	);
};

export default TrafficLight;
