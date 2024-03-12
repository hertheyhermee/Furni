

const Button = ({ text, backgroundColor, color, border, className }) => {
  return (
    <button
      className={className}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        padding: "12px 30px",
        borderRadius: "30px",
        fontWeight: "700",
        textTransform: "capitalize",
        fontSize: "1rem",
        border: border,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
