import React, { useState, useEffect } from "react";
import { TimestampDate } from "timestamp-date";
import { getusers } from "../Services/GetUser.service";
import { User } from "../Model/user";
import { getTimeAgo } from "../Services/Utility";
import AdminHeader from "../component/AdminHeader";
const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [debouncedScroll, setDebouncedScroll] = useState<number | null>(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
    // Fetch data only once on initial render
    fetchUsers(1);
  }, []);

  const timestampDate = new TimestampDate();

  const fetchUsers = async (page: number) => {
    if (isFetching) return; // Prevent multiple calls while fetching
    setIsFetching(true);
    setIsLoading(true);

    try {
      getusers("", (result: User[]) => {
        const queryuser = timestampDate.parseTimestampToDate(result) as any;
        setUsers((prevUsers) => [...prevUsers, ...queryuser]);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >= document.body.offsetHeight - 50 &&
      hasMore &&
      !isFetching // Only fetch if not already fetching
    ) {
      if (debouncedScroll !== null) {
        clearTimeout(debouncedScroll);
      }

      const timeout = setTimeout(() => {
        fetchUsers(users.length / 10 + 1);
      }, 200); // Debounce scroll event
      setDebouncedScroll(timeout as any);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debouncedScroll !== null) {
        clearTimeout(debouncedScroll);
      }
    };
  }, [hasMore, isFetching, users.length, debouncedScroll]);

  return (
    <>
    <AdminHeader/>
      <div className="bg-[#232D3F] min-h-[100vh] pt-6">
        <div className="mb-5  gap-1 mx-4 item-center flex item-center justify-between">
    

          <div className="text-white flex gap-1 items-center text-[1rem]">
            Search
            <input
              type="text"
              id="email"
              onChange={(e) => setsearch(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="filter by : First Name, Last Name. Email Address"
            />
          </div>
        </div>
        <div className="container overflow-y-auto p-2" onScroll={handleScroll}>
          <table className="w-[100%] text-white ">
            <thead className="">
              <tr className="text-start text-[0.8rem] md:text-sm border border-[#43424285]">
                <th className="text-start text-[0.8rem] md:text-sm py-3 px-4">
                  S/N
                </th>
                <th className="text-start text-[0.8rem] md:text-sm">Joined</th>
                <th className="text-start text-[0.8rem] md:text-sm">Name</th>
                {/* Hide Email and Status columns on mobile screens */}
                <th className="text-start text-[0.8rem] md:text-sm hidden md:table-cell">
                  Email
                </th>
                <th className="text-start text-[0.8rem] md:text-sm hidden md:table-cell">
                  Permission
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={7} className="">
                    No users found.
                  </td>
                </tr>
              ) : (
                users
                  .filter((value) => {
                    if (
                      value.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return value;
                    } else if (
                      value.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return value;
                    } else if (
                      value.firstname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return value;
                    } else if (
                      value.lastname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((user, i) => (
                    <tr key={i + 1} className="border border-[#43424285]">
                      <td className="py-3 px-4 text-[0.8rem] md:text-sm">
                        {i + 1}
                      </td>
                      <td className="text-[0.8rem] md:text-sm">
                        {user.created ? getTimeAgo(user.created) : ""}
                      </td>
                      <td className="text-[0.8rem] md:text-sm">
                        {user.firstname} {user.lastname}
                      </td>
                      {/* Hide Email and Status columns on mobile screens */}
                      <td className="hidden md:table-cell text-[0.8rem] md:text-sm">
                        {user.email}
                      </td>
                      <td className="hidden md:table-cell text-[0.8rem] md:text-sm">
                        {user.permission}
                      </td>
                    </tr>
                  ))
              )}
              {isLoading && (
                <tr>
                  <td colSpan={7} className="text-center">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
