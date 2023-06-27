import img1 from "../assets/barbers/img1.jpg";
import img2 from "../assets/barbers/img2.png";
import img3 from "../assets/barbers/img3.png";
import img4 from "../assets/barbers/img4.jpg";
import img5 from "../assets/barbers/img5.jpg";
import img6 from "../assets/barbers/img6.jpg";
import img7 from "../assets/barbers/img7.jpg";
import img8 from "../assets/barbers/img8.jpg";
import img9 from "../assets/barbers/img9.jpg";
import img10 from "../assets/barbers/img10.jpg";
import Image from "./Image";
import "./styles/barbers.css";

const Barbers = () => {
  const loading = "lazy";

  const barbersImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <>
      <div className="barbers__wrapper">
        <div className="barber">
          {barbersImages.map((src, index) => (
            <Image src={src} alt={index} loading={loading} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Barbers;
