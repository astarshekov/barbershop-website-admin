import { useEffect } from "react";
import useFetchNew from "./services/useFetchNew";
import "./styles/barbers.css";

const Barbers = () => {
  const loading = "lazy";

  const barbersImages = [
    "https://barberkod.team/static/media/dpetrun.f32b7b65.jpg",
    "https://barberkod.team/static/media/barber1.c5beeac3.png",
    "https://barberkod.team/static/media/sasha.20681c5d.jpg",
    "https://barberkod.team/static/media/barber5.0d3ecef0.png",
    "https://barberkod.team/static/media/vladm.59a295cf.jpg",
    "https://barberkod.team/static/media/lyba3.e6baa07d.jpg",
    "https://barberkod.team/static/media/kianuz.3d402ca6.jpg",
    "https://barberkod.team/static/media/roman_s.2c6e8f84.jpg",
    "https://barberkod.team/static/media/anna.ad81d0ca.jpg",
    "https://barberkod.team/static/media/nat.36e620d1.jpg",
  ];

  const [{ response, error, isLoading }, doFetch] = useFetchNew("URL");

  useEffect(() => {
    doFetch({
      method: "GET",
    });
  }, [doFetch]);

  return (
    <>
      <div className="barbers__wrapper">
        <div className="barber">
          {barbersImages.map((src, index) => (
            <img src={src} alt={index} loading={loading} key={index} />
          ))}
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {response && <p>Login successful!</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Barbers;
