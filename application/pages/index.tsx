import type { NextPage } from "next";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import WalletConnection from "@/components/demo/WalletConnection";
import UserAuthentication from "@/components/demo/UserAuthentication";
import DecentralizedStorage from "@/components/demo/DecentralizedStorage";
import ContractInteraction from "@/components/demo/ContractInteraction";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CtaButton from "../components/CtaButton";
import NFTGrid from "@/components/NFTGrid";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import AboutDataLynk from "@/components/AboutDataLynk";

const tabs = [
  { name: "Wallet Connection", component: <WalletConnection /> },
  { name: "Contract Interaction", component: <ContractInteraction /> },
  { name: "User Authentication", component: <UserAuthentication /> },
  { name: "Decentralized Storage", component: <DecentralizedStorage /> },
];

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

        <AboutDataLynk />

        <div className="flex justify-center items-center h-screen">
          <NFTGrid />
        </div>
      </main>
      <footer className={styles.footer}>
        <NewsletterSubscribe />
      </footer>
    </div>
  );
};

export default Home;
