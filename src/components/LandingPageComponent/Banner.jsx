import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/property");
  };
  return (
    <section className="banner">
      <Container>
        <h1>Mau Cari Kos?</h1>
        <p>Dapatkan infonya dan langsung sewa di Mamikos.</p>
        <div className="get-started" onClick={handleSearchClick}>
          Cari Sekarang!
        </div>
      </Container>
    </section>
  );
};
export default Banner;
