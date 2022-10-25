import styles from "./pagination.module.scss";

const Pagination = ({page, onPrevClick, onNextClick}) => {
  return (
    <div className={styles.pagination}>
      <ul>
        {page > 1 ?<li>
          <button onClick={onPrevClick}>Prev</button>
        </li> : ""}
        <li>
          <button onClick={onNextClick}>Next</button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
