import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPost = () => {
	const params = useParams();

	console.log(params.id);

	return <h1>Chi tiết bài viết có id là: {params.id}</h1>;
};

export default DetailPost;
