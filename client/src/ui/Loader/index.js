import s from "./styles.module.scss";

const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className={s.loader_wrapper}>
        <div className={s.loader} />
      </div>
    );
  } else {
    return children;
  }
};

export default Loader;
