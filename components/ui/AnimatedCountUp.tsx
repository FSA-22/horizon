"use client";

import CountUp from "react-countup";

const AnimatedCountUp = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp duration={2.5} end={amount} decimal="," prefix="₦" />
    </div>
  );
};

export default AnimatedCountUp;
