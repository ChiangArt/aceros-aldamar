interface LogoProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
  offsetY?: number;
}

export default function Logo({
  size,
  width,
  height,
  color = "#f97316",
  className,
  offsetY = 0,
}: LogoProps) {
  const w = width || size || 200;
  const h = height || size || 200;

  return (
    <svg
      viewBox="200 100 220 140"
      className={`${color.startsWith("text-") ? color : ""} ${className || ""}`}
      style={{
        color: !color.startsWith("text-") ? color : undefined,
        width: w,
        height: h,
        transform: `translateY(${offsetY}%)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,327.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M2781 2683 c-20 -39 -493 -1194 -490 -1197 2 -2 100 45 218 103 l215
106 103 270 c57 149 117 309 134 358 32 87 42 102 52 70 3 -10 25 -70 50 -133
24 -63 63 -164 87 -225 23 -60 43 -111 44 -113 2 -2 276 126 284 133 1 1 -57
147 -130 324 l-132 321 -213 0 c-192 0 -213 -2 -222 -17z"
        />
        <path
          d="M3280 1876 c-118 -57 -305 -146 -415 -198 -110 -53 -272 -131 -360
-173 -283 -136 -244 -125 -426 -125 l-160 0 3 -102 3 -103 280 -2 c154 -1 290
1 301 3 16 3 29 23 53 87 17 46 37 91 44 100 6 9 143 79 302 155 160 77 362
174 449 216 l159 76 283 0 284 0 0 85 0 85 -292 0 -293 -1 -215 -103z"
        />
        <path
          d="M3418 1678 c-60 -28 -108 -56 -108 -63 0 -10 105 -287 150 -395 l19
-45 181 0 c130 -1 180 2 178 11 -2 6 -52 131 -113 277 l-110 267 -45 -1 c-33
0 -75 -14 -152 -51z"
        />
      </g>
    </svg>
  );
}
