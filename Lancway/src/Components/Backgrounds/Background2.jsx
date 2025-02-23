import './Background2.css';

const Background2 = () => {
  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
};

export default Background2;
