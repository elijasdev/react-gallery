import Footer from '../footer/footer.component';
import SearchForm from '../search-form/search-form.component';
import Header from '../header/header.component';
import classes from './basic-layout.module.scss';

const BasicLayout = ({ mainContent, onSearchSubmit }) => {
	return (
		<div className={classes.basicLayout}>
			<Header />
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<main>{mainContent}</main>
			<Footer />
		</div>
	);
};

export default BasicLayout;
