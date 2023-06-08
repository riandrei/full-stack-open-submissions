const SearchForm = ({ searchEntry, setSearchEntry }) => {
  const handleSearchChange = (e) => {
    const newValue = e.target.value;

    setSearchEntry(newValue);
  };

  return (
    <div>
      filter shown with <input onChange={handleSearchChange} value={searchEntry} />
    </div>
  );
};
export default SearchForm;
