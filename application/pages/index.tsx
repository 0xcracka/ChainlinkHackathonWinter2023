import type { NextPage } from "next";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CtaButton from "../components/CtaButton";
import NFTGrid from "@/components/NFTGrid";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import AboutDataLynk from "@/components/AboutDataLynk";
import Image from "next/image";
import Wave from "@/components/Wave";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DataLynk</title>
        <meta
          name="description"
          content="Connecting Data, Unlocking Potential"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center py-12 box-border">
        <section className="bg-hero-gradient text-white py-24 px-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-7xl font-bold mb-6">
              Revolutionizing Data Exchange
            </h1>
            <p className="text-xl mb-8">
              Facilitating Smarter Connections for a Data-Driven World,
              Empowering Innovations in the Digital Age
            </p>
            <div className="flex justify-center gap-4 mt-8">
              {/* Primary Button */}
              <button className="bg-blue-700 text-white font-bold text-lg px-6 py-3 rounded hover:bg-blue-800 transition-colors duration-300">
                Explore Marketplace
              </button>
              {/* Secondary Button */}
              <button className="bg-transparent text-blue-700 border border-blue-700 text-lg font-bold px-6 py-3 rounded hover:bg-blue-200 transition-colors duration-300">
                Tokenize Your Data
              </button>
            </div>
          </div>
        </section>
        {/* create a divider for the homepage using tailwind css and dots/geometric shapes */}
        <Wave />

        <AboutDataLynk />
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-5 ">
            Featured Datasets
          </h2>

          <div className="flex justify-center items-center ">
            <NFTGrid />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <NewsletterSubscribe />
      </footer>
    </div>
  );
};

export default Home;
