import { useEffect, useState } from "react";

import { decoratedFetchCatApi } from "/src/shared/api/catApi";

export const useFetch = (initialState) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await decoratedFetchCatApi();
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
