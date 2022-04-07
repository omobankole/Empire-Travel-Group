import Header from "../../components/UI/Header/header";
import Footer from "../../components/UI/Footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
