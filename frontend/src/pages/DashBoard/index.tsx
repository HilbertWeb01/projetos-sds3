import BarChart from "componets/BarChart";
import DataTable from "componets/DataTable";
import DonutChart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";

const DashBoard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondry">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondry">Todas Vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>

                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default DashBoard;