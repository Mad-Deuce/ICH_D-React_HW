import { useEffect, useState } from "react";

import { fetchCatApi } from "/src/shared/api/catApi";

export const useFetch = (initialState) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await fetchCatApi();
      setLoading(false);
      if (data) return setState(data);
      setError(error);
    };
    fetchData();
  }, [update]);

  return {
    state,
    setState,
    loading,
    setLoading,
    error,
    setError,
    setUpdate,
  };
};
