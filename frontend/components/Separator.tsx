export default function Separator({
  fill = false,
  fillColor = "text-racing-green-900",
  className = "",
}: {
  fill?: boolean;
  fillColor?: string;
  className?: string;
}) {
  return (
    <svg
      className={`overflow-hidden ${className}`}
      preserveAspectRatio="none"
      viewBox="0 0 1412 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20.5333V18.6667C0 18.6667 343.661 0 706 0C1068.34 0 1412 18.6667 1412 18.6667V20.5333C1410.65 20.4631 1409.3 20.3919 1407.95 20.3211C1405.35 20.1845 1401.48 19.984 1396.43 19.7289C1386.33 19.2186 1371.49 18.4895 1352.56 17.6147C1314.68 15.8649 1260.41 13.5319 1194.81 11.1988C1063.62 6.53262 887.14 1.86667 706 1.86667C524.86 1.86667 348.384 6.53262 217.189 11.1988C151.593 13.5319 97.3191 15.8649 59.4449 17.6147C40.5078 18.4895 25.6709 19.2186 15.5687 19.7289C10.5176 19.984 6.6502 20.1845 4.04587 20.3211C2.69724 20.3919 1.34865 20.4631 0 20.5333Z"
        fill="currentColor"
        className={fillColor}
      />
      {fill ? (
        <>
          <path
            d="M706 0C343.661 0 0 18.6667 0 18.6667V28H1412V18.6667C1412 18.6667 1068.34 0 706 0Z"
            fill="currentColor"
            className={fillColor}
          />
          <path
            d="M756 0C368 0 0 20 0 20V0H756H1512V20C1512 20 1144 0 756 0Z"
            fill="none"
            className={fillColor}
          />
        </>
      ) : null}
    </svg>
  );
}
