import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to close sidebar
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen">
      {/* Mobile sidebar overlay */}
      {showSidebar && (
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 lg:hidden ${
            sidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={handleSidebarClose}
        >
          <div
            className={`fixed left-0 top-0 h-full w-64 bg-base-200 border-r border-base-300 shadow-xl transform transition-transform duration-300 flex flex-col ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button at top right inside sidebar */}
            <button
              onClick={handleSidebarClose}
              aria-label="Close sidebar"
              className="self-end m-3 btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-base-content opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Sidebar content, visible on mobile, with close on navigation */}
            <Sidebar mobile={true} onNavigate={handleSidebarClose} />
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop sidebar */}
        {showSidebar && <Sidebar />}
        <div className="flex-1 flex flex-col">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
