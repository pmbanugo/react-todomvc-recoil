import React from "react";
import { useRecoilState } from "recoil";
import Link from "../components/Link";
import { visibilityFilter } from "../recoil/todos";

export default ({ filter, children }) => {
  const [visibility, setVisibilityFilter] = useRecoilState(visibilityFilter);
  const setFilter = () => setVisibilityFilter(filter);

  return (
    <Link
      active={filter === visibility}
      setFilter={setFilter}
      children={children}
    />
  );
};
