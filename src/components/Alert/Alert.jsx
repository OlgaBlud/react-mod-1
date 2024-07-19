import clsx from "clsx";
import "./Alert.css";
// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };
// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };
// export const Alert = ({ children, variant }) => {
//   return (
//     // <>
//     //   <p style={alertStyles}>Please update your email!</p>
//     //   <p style={alertStyles}>There was an error during transaction!</p>
//     //   <p style={alertStyles}>Payment received, thank you for your purchase!</p>
//     // </>
//     <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
//       {children}
//     </p>
//   );
// };

// ____________________________________Ванільний CSS
// export const Alert = ({ children, variant, outlined, elevated }) => {
//   //   return <p className="alert">{children}</p>;
//   const classNames = ["alert", variant];
//   if (outlined) {
//     classNames.push("is-outlined");
//   }

//   if (elevated) {
//     classNames.push("is-elevated");
//   }
//   return <p className={classNames.join(" ")}>{children}</p>;
// };
// ____________________________________Бібліотека clsx

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    // <p
    //   className={clsx(
    //     "alert",
    //     variant,
    //     outlined && "is-outlined",
    //     elevated && "is-elevated"
    //   )}
    // >
    //   {children}
    // </p>
    //   Можна комбінувати варіативну та об'єктну форму функції clsx
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
};

// _________________________________CSS-модулі

// import clsx from "clsx";
// import css from "./Alert.module.css";

// export const Alert = ({ variant, children }) => {
//   return <p className={clsx(css.alert, css[variant])}>{children}</p>;
// };
