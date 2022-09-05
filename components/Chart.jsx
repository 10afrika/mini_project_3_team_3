import React from "react";
import Image from "next/image";

import { useEffect } from "react";

function Chart({ weatherChart }) {
  useEffect(() => {
  }, [weatherChart])

  return (
    <section className="charter mt-1">
      <div className=" my-4  ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 id="chart" className="text-3xl text-center text-black">
            View Your City's Weekly Forecast Here
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Down below in the chart that comes up you can see weekly weather forecasts for your city!
          </p>
        </div>

        <div className="flex items-center py-4">
          {/* <!-- The left line --> */}
          <div className="flex-grow h-px bg-gray-400"></div>

          <div className=" flex justify-center gap-8 w-full max-w-full mx-auto  mt-6">
            {weatherChart && (
              <Image
                src={weatherChart}
                alt="Weather Chart Image"
                width={700}
                height={200}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chart;
