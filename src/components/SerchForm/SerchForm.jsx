export const SearchForm = ({ onSetSearch }) => {
  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    onSetSearch(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
};
