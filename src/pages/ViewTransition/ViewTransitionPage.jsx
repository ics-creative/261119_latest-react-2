import { startTransition, useState, ViewTransition } from "react";
import { ToggleGroup } from "../../components/ToggleGroup.jsx";
import { users } from "./users.js";

const UserList = ({ sortedUsers }) => (
  <section>
    <ul className="vt-user-list">
      {sortedUsers.map((user) => (
        <ViewTransition key={user.id}>
          <li>
            <div className="vt-user-list__card">
              <img
                alt=""
                className="vt-user-list__image"
                height="40"
                src={user.image}
                width="40"
              />
              <span className="vt-user-list__copy">
                <strong>{user.name}</strong>
                <small>{user.role}</small>
                <small>{user.branch}</small>
              </span>
            </div>
          </li>
        </ViewTransition>
      ))}
    </ul>
  </section>
);

/**
 * ViewTransitionページ
 */
export const ViewTransitionPage = () => {
  const [sortKey, setSortKey] = useState("name");
  const sortedUsers = [...users].sort((a, b) =>
    a[sortKey].localeCompare(b[sortKey], "en"),
  );

  const changeSort = (nextSortKey) => {
    startTransition(() => setSortKey(nextSortKey));
  };

  return (
    <div className="view-transition">
      <ToggleGroup
        label="sort"
        options={[
          { label: "Name", value: "name" },
          { label: "Branch", value: "branch" },
        ]}
        value={sortKey}
        onChange={changeSort}
      />
      <UserList sortedUsers={sortedUsers} />
    </div>
  );
};
