import { useSearchParams } from "react-router-dom";

function useSearchParam<T extends Record<string, string>>() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: keyof T): string | null => {
    return searchParams.get(key as string);
  };

  const setParam = (key: keyof T, value: string, replace = false): void => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev.toString());
        newParams.set(key as string, value);
        return newParams;
      },
      {
        replace,
      }
    );
  };

  return {
    getParam,
    setParam,
  };
}

export { useSearchParam };
