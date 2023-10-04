import React, { useContext } from "react";
import Layout from "./Layout";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";




function MyProfile() {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <div className="mt-10 max-w-6xl mx-auto">
        <div className="flex">
          <div className="bg-gray-100 rounded-l p-4 shadow-md">
            <div className="mb-4 space-y-2">
              <div className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
                <Link>User Information</Link>
              </div>
              <div className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
                <Link to="/myrecipes" className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
                  My Recipes
                </Link>
              </div>
              <div className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
                <Link className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
                  Create Recipe
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-grow bg-white rounded-r p-4 ml-4  shadow-md">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Information</h2>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-700">
                  First Name: {user.first_name}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Last Name: {user.last_name}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Username: {user.username}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Change Password</h2>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  New Password:
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password:
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                />
              </div>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyProfile;
