import { adminFetch } from "@/lib/fetch";
import { buildListSearchParams2 } from "@/lib/list";

import type { UpdateUserRequest } from "@bindings/UpdateUserRequest";
import type { CreateUserRequest } from "@bindings/CreateUserRequest";
import type { ListUsersResponse } from "@bindings/ListUsersResponse";
import type { DeleteUserRequest } from "@bindings/DeleteUserRequest";

export async function createUser(request: CreateUserRequest) {
  await adminFetch("/user", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export async function deleteUser(request: DeleteUserRequest): Promise<void> {
  await adminFetch("/user", {
    method: "DELETE",
    body: JSON.stringify(request),
  });
}

export async function updateUser(request: UpdateUserRequest) {
  await adminFetch("/user", {
    method: "PATCH",
    body: JSON.stringify(request),
  });
}

export async function fetchUsers(
  filter: string | undefined,
  pageSize: number,
  cursor: string | null,
): Promise<ListUsersResponse> {
  const params = buildListSearchParams2({
    filter,
    pageSize,
    cursor,
  });

  const response = await adminFetch(`/user?${params}`);
  return await response.json();
}
