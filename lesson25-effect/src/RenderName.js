import { memo } from 'react';

const RenderName = ({ name }) => {
	console.log('RenderName được render...');

	return <h1>Tên của bạn là: {name}</h1>;
};

export default memo(RenderName);
