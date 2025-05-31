import { useEffect, useState } from "react";

export const useFetch = (initialState, request) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await request();
      setLoading(false);
      if (data) return setState(data);
      setError(error);
    };
    fetchData();
  }, [update, request]);

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
