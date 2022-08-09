import { useEffect, useState } from "react";

import { Button, Container, Heading, Loader, Text } from "components/ui";

import { useFetching } from "hooks";

import { UsersService } from "services";

import { sortByField } from "utils/helpers";
import { Users } from "./components/users/users";

import "./get.scss";

export const Get = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(null);
  const limit = 6;

  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    const response = await UsersService.getUsers(page, limit);
    setUsers((prevState) =>
      [...prevState, ...response.data.users].sort(
        sortByField("registration_timestamp")
      )
    );
    setPage((prevPageNumber) => prevPageNumber + 1);
    setHasMore(response.data.links.next_url);
  });

  const loadMoreItems = () => {
    fetchUsers();
  };

  //on initial mount
  useEffect(() => {
    loadMoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="get" id="users">
      <Container>
        <Heading align="center">Working with GET request</Heading>
        {usersError && (
          <Text className="get__error" align="center">
            {usersError}
          </Text>
        )}
        <Users users={users} />
        {!isUsersLoading && hasMore && (
          <Button onClick={loadMoreItems}>Show more</Button>
        )}
        {isUsersLoading && <Loader />}
      </Container>
    </section>
  );
};
