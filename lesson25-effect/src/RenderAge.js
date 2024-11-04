import { memo } from 'react';

const RenderAge = ({ age }) => {
	console.log('RenderAge được render...');

	return <h1>Tuổi của bạn là: {age}</h1>;
};

export default memo(RenderAge);
