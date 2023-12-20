/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { useNavigate } from "react-router-dom";
import { Table } from "../components/Table";
import { UsersColumn } from "../utils/columns/columns";
import { Header } from "../components/Header";
import { Asidebar } from "../components/Sidebar";
import useUsers from "../hooks/useUsers";
import { Loading } from "../components/Loading";

export default function Users() {
  const navigate = useNavigate();
  const { isLoading, error, data }: any = useUsers();

  return (
    <>
      <Header />
      <Asidebar />
      <div className="mt-24 ml-72 mr-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-2xl">Users</h1>
          <button
            className="bg-secondary text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/create-users")}
          >
            Add Users
          </button>
        </div>

        {isLoading ? (
          <div className="h-20 w-full flex justify-start items-center">
            <Loading />
          </div>
        ) : (
          <>
            {error ? (
              <>
                <p>{error?.message || "Some thing went wrong"}</p>
              </>
            ) : (
              <Table column={UsersColumn} data={data?.List || []} />
            )}
          </>
        )}
      </div>
    </>
  );
}
