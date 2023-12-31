import Footer from "../ui/dashboard/footer/footer";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="menu flex-1 p-5 min-h-screen bg-white shadow-xl">
        <Sidebar />
      </div>
      <div className="content p-5" style={{ flex: 4 }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
