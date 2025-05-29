//* importazione css
import '../styles/Alert.css';

const Alert = ({ text = "Si è verificato un errore", textColor = "#ffffff", bgColor = "#ff0000", children }) => {
  return (
    <div className="alert" style={{ backgroundColor: bgColor, color: textColor }}>
      {children ? children : <p>{text}</p>}
    </div>
  );
};

export default Alert;