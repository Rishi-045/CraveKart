import "./Shimmer.css"

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img shimmer"></div>
            <div className="shimmer-title shimmer"></div>
            <div className="shimmer-subtitle shimmer"></div>
            <div className="shimmer-location shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
