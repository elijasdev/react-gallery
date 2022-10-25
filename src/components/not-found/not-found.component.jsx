import classes from './not-found.module.scss';

const NotFound = ({userSearch}) => {
    return(
        <div className={classes.notFound}>
            <h3>No Results Found</h3>
            <p>Search for '{userSearch}' did not return any results. Try another search.</p>
        </div>
    );
}

export default NotFound;