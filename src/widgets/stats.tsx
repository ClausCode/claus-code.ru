"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    name: "Years of expirience",
    num: 7,
  },
  {
    name: "Projects completed",
    num: 4,
  },
  {
    name: "Technologies mastered",
    num: 5,
  },
  {
    name: "Code commits",
    num: 500,
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${item.name.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                    leading-snug text-white/80`}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
