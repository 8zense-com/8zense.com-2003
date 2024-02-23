"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm font-medium">
          8zense.com
        </span>
        <h3 className="uppercase font-extrabold text-4xl md:text-6xl text-zenseGreen ">
        desing interieur
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          8zenSe.com steht für individuelles, extravagantes und exklusivesDesijg aus dem Marterial Beton in unzähligen Variationen.
        </p>
        <button className="bg-zenseSignal text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/assets/images/Chairred.svg",
  },
 
  {
    id: 1,
    src: "/assets/images/LogoEZ30.png",
  },
  {
    id: 2,
    src: "/assets/images/grafik6.png",
  },
  {
    id: 3,
    src: "/assets/images/Rastergrafikobg.png",
  },
  {
    id: 4,
    src: "/assets/images/room.webp",
  },
   
  {
    id: 5,
    src: "/assets/images/kiesbunt.png",
  },
 
  {
    id: 6,
    src: "/assets/images/kiesbunt.png",
  },
  {
    id: 7,
    src: "/assets/images/hotel.png",
  },

  {
    id: 8,
    src: "/assets/images/8zenseVer.png",
  },
  {
    id: 9,
    src: "/assets/images/hotel.png",
  },
  {
    id: 10,
    src: "/assets/images/sketchobg.png",
  },
  {
    id: 11,
    src: "/assets/images/sketchobg.png",
  },
  {
    id: 12,
    src: "/assets/images/sieboardobg.png",
  },
  {
    id: 13,
    src: "/assets/images/Hotel-SaoPaulo.png",
  },
  {
    id: 14,
    src: "/assets/images/grafik6.png",
  },
  {
    id: 15,
    src: "/assets/images/Rastergrafikobg.png",
  },
  {
    id: 16,
    src: "/assets/images/room.webp",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
          





