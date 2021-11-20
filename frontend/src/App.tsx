import DataTable from "componets/DataTable";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container"> 
        <h1 className="text-primary">DashBoard</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
