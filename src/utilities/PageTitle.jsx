import { useEffect } from 'react';

const PageTitle = ({ title }) => {
	useEffect(() => {
		document.title = 'myTask - ' + title
	}, [])
	return null
};

export default PageTitle;
