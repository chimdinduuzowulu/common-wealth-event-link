import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Wootlab and Commonwealth event day
            </h2>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
              {/* <div className="border-t border-gray-200 pt-4 flex flex-row gap-6">
                <dd className="bg-[#00a1e2] rounded-lg h-6 w-6"></dd>
                <dt className="font-medium text-gray-900 hover:cursor-pointer">
                  <a href="../assets/pdf/OurJourneysofar.pdf" target="_blank">
                    {" "}
                    Program of event
                  </a>
                </dt>
              </div> */}

              <div className="border-t border-gray-200 pt-4 flex flex-row gap-6">
                <dd className="bg-[#00a1e2] rounded-lg h-6 w-6 "></dd>
                <dt className="font-medium text-gray-900 hover:cursor-pointer">
                  <a
                    href="https://drive.google.com/file/d/1n-uWTPgq1nPoePxp_CXkqoTqEqlp61D7/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Our journey so far
                  </a>
                </dt>
              </div>
              <div className="border-t border-gray-200 pt-4 flex flex-row gap-6">
                <dd className="bg-[#00a1e2] rounded-lg h-6 w-6"></dd>
                <dt className="font-medium text-gray-900 hover:cursor-pointer">
                  <a
                    href="https://drive.google.com/file/d/1EfG_1y7hNPROeEhNDbBCT7g_9vaNi7W9/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Wootlab foundation's impact
                  </a>
                </dt>
              </div>
              <div className="border-t border-gray-200 pt-4 flex flex-row gap-6">
                <dd className="bg-[#00a1e2] rounded-lg h-6 w-6"></dd>
                <dt className="font-medium text-gray-900 hover:cursor-pointer">
                  <a
                    href="https://drive.google.com/file/d/1H7gUl8lVv46hjbohMK1u-0WeDfM-kW9g/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    Documentary on Wootlab’s initiatives and success stories
                  </a>
                </dt>
              </div>
              <div className="border-t border-gray-200 pt-4 flex flex-row gap-6">
                <dd className="bg-[#00a1e2] rounded-lg h-6 w-6"></dd>
                <dt className="font-medium text-gray-900 hover:cursor-pointer">
                  <a href="https://wootlab.ng" target="_blank">
                    {" "}
                    Our website
                  </a>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
