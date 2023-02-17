import React from "react";

function useLocalStorage(itemName, initialValue) {
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);

  const [dataStatus, setDataStatus] = React.useState({
    loading: true,
    error: false,
  });

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          
        }
        setItem(parsedItem);
        // setLoading(false);
        setDataStatus({ ...dataStatus, loading: false });
      } catch (error) {
        setDataStatus({ ...dataStatus, error: true });
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);

      localStorage.setItem(itemName, stringifiedItem);

      setItem(newItem);
    } catch (error) {
      setDataStatus({ ...dataStatus, error: true });
    }
  };

  return { item, saveItem, dataStatus };
}


export {useLocalStorage};