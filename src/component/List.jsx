import { useEffect, useState, useRef } from "react";

const List = () => {
  const [list, setList] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef("");

  useEffect(() => {
    const fetchData = async () => {
      const listData = await fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((res) => res);
      setList(listData);
    };
    fetchData();
    return fetchData;
  }, []);

  const handleSubmit = async () => {
    await fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
      .then((response) => response.json())
      .then((data) => setList(data));
  };

  return (
    <div className="list-container">
      <input
        autoFocus
        type="text"
        placeholder="Search..."
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Search Items</button>
      <strong>Results Found: {list?.products.length}</strong>
      <ol>
        {list?.products.map((listItem) => {
          return <li className="list" key={listItem.id}>{listItem.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default List;
