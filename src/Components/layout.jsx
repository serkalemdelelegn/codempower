import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">My Website</h1>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/about" className="mx-2">About</Link>
        </div>
      </nav> */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>
      {/* <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 My Website
      </footer> */}
    </div>
  );
}
