const useCheckStorage = (key) => {
  const storage = localStorage.getItem(key);
  if (!storage) {
    console.log("empty");
  }
};

const useSetStorage = (key, value) => {
  localStorage("key", JSON.stringify(value));
};
