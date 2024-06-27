import { Link, Navigate } from "react-router-dom";


const Button = ({ text, backgroundColor, color, border, className, to }) => {

  return (
    <Link
      to={to}
      className={className}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        padding: "15px 30px",
        borderRadius: "30px",
        fontWeight: "700",
        textTransform: "capitalize",
        textDecoration: "none",
        margin: "50px 0 !important",
        fontSize: "1rem",
        border: border,
      }}
    >
      {text}
    </Link>
  );
};

export default Button;
