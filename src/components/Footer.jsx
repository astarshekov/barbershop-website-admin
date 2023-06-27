import InstagramIcon from "./InstagramIcon";
import "./styles/footer.css";

const Footer = () => {
  const instagramAccountUrl = "https://www.instagram.com/barbershop.vibe/";
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div>Vibe &#169; {date}</div>
      <InstagramIcon accountUrl={instagramAccountUrl} />
    </footer>
  );
};

export default Footer;
