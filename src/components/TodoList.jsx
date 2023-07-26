import PropTypes from 'prop-types';
export const TodoListFn = ({ title, list }) => {
  return (
    <>
      <h1>TODO List</h1>
      <p>{title}</p>
      <ul>
        {list.map(el => (
          <li key={el.id}>
            <span>{el.name}</span>
            <span>{el.price}</span>
          </li>
        ))}
        <hr />
      </ul>
    </>
  );
};

TodoListFn.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
    })
  ),
};
