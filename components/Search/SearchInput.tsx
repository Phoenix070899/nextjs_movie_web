import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchDrawer } from "./SearchDrawer";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('')

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value !== '' ? setOpen(true) : setOpen(false)
    setInputValue(e.currentTarget.value)
  }
  console.log(inputValue)
  const onFocusChange = () => {
    inputValue !== '' && setOpen(true)
  }
  return (
    <div className={styles.search_container}>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search for movie title, name..."
        value={inputValue}
        onChange={onInputChange}
        onFocus={onFocusChange}
      />
      <button onClick={() => setOpen(true)} className={styles.search_button}>
        <BsSearch />
      </button>
      <SearchDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default SearchInput;
