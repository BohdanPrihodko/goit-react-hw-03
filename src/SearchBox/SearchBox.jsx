const SearchBox = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="search">Find contacts by name</label>
            <input id="search" type="text" value={value} onChange={onChange} />
        </div>
    );
};

export default SearchBox