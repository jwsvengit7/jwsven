"use client"
import { useEffect, useState } from "react";
import { Box, generateBoxes } from "../utils/utils";

export default function AnimatedBackground() {
  const colors: string[] = ["#003366", "#ccc", "yellow", "orange", "#ddd","#222", "lightblue", "goldenrod", "orange", "#ccc","#003366", "#ccc", "yellow", "orange", "#ddd","#222", "lightblue","#003366", "#ccc", "yellow", "orange", "#ddd","#222", "lightblue", "goldenrod", "orange", "#ccc","#003366", "#ccc", "yellow", "orange", "#ddd","#222", "lightblue", "goldenrod", "orange", "#ccc","#003366", "#ccc", "yellow", "orange", "#ddd","#222", "lightblue", "goldenrod", "orange", "#ccc", "goldenrod", "orange", "#ccc","#003366", "#ccc", "yellow", "orange", "#ddd","#222", "lightblue", "goldenrod", "orange", "#ccc"];
  const [boxes, setBoxes] = useState<Box[]>([]);

  useEffect(() => {
    generateBoxes(setBoxes,colors);
  }, []);

  return (
    <div>
      {boxes.map((box, index) => (
        <div
          key={index}
          className="tiny-box"
          style={{
            backgroundColor: box.color,
            top: `${box.y}px`,
            left: `${box.x}px`,
            animationDelay: `${box.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        .tiny-box {
          position: fixed;
          width:3px;
          height: 3px;
          border-radius: 50%;
          animation: move 3s ease-in-out infinite;
        }

        @keyframes move {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}
