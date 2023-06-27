const Image = ({ src, alt, loading, key }) => {
  return <img src={src} alt={alt} loading={loading} key={key} />;
};

export default Image;
