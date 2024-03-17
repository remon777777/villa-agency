import './VideoSection.css';

const VideoSection = ({ img, title, desc, video, children}) => {
  return (
    <section className="main-section">
      <img
        src={img}
        className="house-image"
      />
      <section className="inner-section">
        <h2 className="tagline">{title}<br /></h2>
        <p className="title">{desc} </p>
        <img
          className="background-image"
          src={video}
        />

      </section>
      {children}
    </section>
  );
};

export default VideoSection;
