import Photo from '../photo/photo.component';
import NotFound from '../not-found/not-found.component';
import classes from './photo-list.module.scss';

const PhotoList = ({ photos, userSearch }) => {
	const photosList = photos.map((photo) => (
		<Photo
			url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
			alt={photo.title}
			key={photo.id}
		/>
	));

	let content = <NotFound userSearch={userSearch} />;
	if (photos && photos.length > 0) {
		content = (
			<div>
				<h2>Results</h2>
				<ul>{photosList}</ul>
			</div>
		);
	}

	return <div className={classes.photoList}>{content}</div>;
};

export default PhotoList;
