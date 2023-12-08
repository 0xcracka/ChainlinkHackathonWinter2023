import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faDatabase, faBrain } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AboutDataLynk = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Empowering AI with Blockchain-Verified Data
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Leveraging Chainlink Oracles */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faLink} size="1x" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Chainlink Oracle Integration
            </h3>
            <p>
              Utilizing Chainlink's decentralized oracles, DataLynk ensures
              real-time data accuracy and tamper-proof security, enhancing trust
              in data sources.
            </p>
          </div>

          {/* Blockchain for Data Verification */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faDatabase} size="1x" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Blockchain-Verified Data
            </h3>
            <p>
              Our platform leverages blockchain technology to verify and secure
              datasets, offering an immutable and transparent history for each
              data set.
            </p>
          </div>

          {/* AI Model Training */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faBrain} size="1x" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Permissions for AI Training
            </h3>
            <p>
              DataLynk provides diverse, high-quality data sets, ideal for
              training robust AI models, driving innovation across various
              industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDataLynk;
