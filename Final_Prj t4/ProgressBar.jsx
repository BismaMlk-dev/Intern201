// src/components/lms/ProgressBar.jsx
import './ProgressBar.css';  // ← CSS IMPORT

const ProgressBar = ({ value, max = 100, label, color = "blue" }) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses = {
    blue: "pb-fill-blue",
    green: "pb-fill-green",
    yellow: "pb-fill-yellow",
    red: "pb-fill-red"
  };

  return (
    <div className="pb-wrapper">
      {label && (
        <div className="pb-header">
          <span className="pb-label">{label}</span>
          <span className="pb-value">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="pb-track">
        <div
          className={`pb-fill ${colorClasses[color] || colorClasses.blue}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;