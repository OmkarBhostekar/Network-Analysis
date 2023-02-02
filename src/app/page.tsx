"use client";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

// Images
import Image from "next/image";
import HeroImage from "../../public/landing/hero.png";
import Feature1 from "../../public/landing/feature-1.png";
import Feature2 from "../../public/landing/feature-2.png";
import Parrot from "../../public/parrot.png";
import Iffy from "../../public/iffy.png";
import Rt from "../../public/rt.png";
import Sputnik from "../../public/sputnik.png";
import Twitter from "../../public/twitter.png";

import { name, taglines, desc, features } from "config";

import Card from "../../components/CardSingle";

type Props = {};

const page = (props: Props) => {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "The 400 Blows",
            category: "Drama",
            description: "looremf lkajs klfja klfjd aksl fjjdsf ",
            img: "https://dummyimage.com/720x400",
        },
    ]);

    const fetchLatest = async () => {
        // fetch(`/api/articles/latest`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     data.length = 6;
        //     setArticles(data);
        //   });
    };

    useEffect(() => {
        fetchLatest();
    }, []);
    return (
        <div className="bg-white">
            {/* Start block */}
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                            {taglines[0]} <br />
                            {taglines[1]}
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            {" "}
                            <a href="/" className="hover:underline">
                                {name}
                            </a>{" "}
                            {desc}
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a
                                href="https://github.com/themesberg/landwind"
                                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                <svg
                                    className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>{" "}
                                View on GitHub
                            </a>
                            <a
                                href="https://www.figma.com/community/file/1125744163617429490"
                                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 300"
                                    width={1667}
                                    height={2500}
                                >
                                    <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                            __html: ".st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}",
                                        }}
                                    />
                                    <title>Figma.logo</title>
                                    <desc>Created using Figma</desc>
                                    <path
                                        id="path0_fill"
                                        className="st0"
                                        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                                    />
                                    <path
                                        id="path1_fill"
                                        className="st1"
                                        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                                    />
                                    <path
                                        id="path1_fill_1_"
                                        className="st2"
                                        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                                    />
                                    <path
                                        id="path2_fill"
                                        className="st3"
                                        d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
                                    />
                                    <path
                                        id="path3_fill"
                                        className="st4"
                                        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                                    />
                                </svg>{" "}
                                Get Figma file
                            </a>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src={HeroImage} alt="hero image" />
                    </div>
                </div>
            </section>
            {/* End block */}

            {/* Start block */}
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-5 dark:text-gray-400 text-center">
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <span>
                                <Image
                                    className="h-10 w-10 mx-2"
                                    src={Parrot}
                                    alt="parrotLogo"
                                />
                            </span>
                            <p className="text-3xl font-bold h-9 hover:text-gray-900 dark:hover:text-white">
                                Parrot
                            </p>
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <span>
                                <Image
                                    className="h-10 w-12 mx-2"
                                    src={Iffy}
                                    alt="IffyLogo"
                                />
                            </span>
                            <p className="text-3xl font-bold h-9 hover:text-gray-900 dark:hover:text-white">
                                Iffy News
                            </p>
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <span>
                                <Image
                                    className="h-10 w-12 mx-2"
                                    src={Rt}
                                    alt="RtLogo"
                                />
                            </span>
                            <p className="text-3xl font-bold h-9 hover:text-gray-900 dark:hover:text-white">
                                Russia Today
                            </p>
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <span>
                                <Image
                                    className="h-10 w-10 mx-2"
                                    src={Sputnik}
                                    alt="sputnikLogo"
                                />
                            </span>
                            <p className="text-3xl font-bold h-9 hover:text-gray-900 dark:hover:text-white">
                                Sputnik News
                            </p>
                        </a>

                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <span>
                                <Image
                                    className="h-10 w-10 mx-2"
                                    src={Twitter}
                                    alt="twitterLogo"
                                />
                            </span>
                            <p className="text-3xl font-bold h-9 hover:text-gray-900 dark:hover:text-white">
                                Twitter
                            </p>
                        </a>
                    </div>
                </div>
            </section>
            {/* End block */}

            <div className="pt-12 dark:bg-slate-800">
                <div className="text-center">
                    <p className="text-3xl font-bold tracking-wider dark:text-white">
                        Featured Articles
                    </p>
                </div>
                <div>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {articles.map((article, id) => {
                                    return <Card key={id} article={article} />;
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <hr className="w-full border-t border-[1px] border-gray-100 dark:border-black" />
            {/* Start block */}

            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    {/* Row */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Network Visualization
                            </h2>
                            <p className="mb-8 font-light lg:text-xl">
                                {features["Network Visualization"]}
                            </p>
                            {/* List */}
                            <ul
                                role="list"
                                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                            >
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Continuous integration and deployment
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Development workflow
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Knowledge management
                                    </span>
                                </li>
                            </ul>
                            <p className="mb-8 font-light lg:text-xl">
                                Deliver great service experiences fast - without
                                the complexity of traditional ITSM solutions.
                            </p>
                        </div>
                        <Image
                            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                            src={Feature1}
                            alt="dashboard feature image"
                        />
                    </div>
                    {/* Row */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <Image
                            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                            src={Feature2}
                            alt="feature image 2"
                        />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Historical Data Analysis
                            </h2>
                            <p className="mb-8 font-light lg:text-xl">
                                {features["Historical Data Analysis"]}
                            </p>
                            {/* List */}
                            <ul
                                role="list"
                                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                            >
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Dynamic reports and dashboards
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Templates for everyone
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Development workflow
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Limitless business automation
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Knowledge management
                                    </span>
                                </li>
                            </ul>
                            <p className="font-light lg:text-xl">
                                Deliver great service experiences fast - without
                                the complexity of traditional ITSM solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End block */}
            {/* Start block */}
            <section className="bg-white dark:bg-gray-900">
                <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
                            Trusted Worldwide
                        </p>
                        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                            Trusted by over 600 million users and 10,000 teams
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Our rigorous security and compliance standards are
                            at the heart of all we do. We work tirelessly to
                            protect you and your customers.
                        </p>
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                            <div>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                                >
                                    Explore Legality Guide
                                    <svg
                                        className="w-5 h-5 ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                                >
                                    Visit the Trust Center
                                    <svg
                                        className="w-5 h-5 ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        <div>
                            <svg
                                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">
                                99.99% uptime
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                For Landwind, with zero maintenance downtime
                            </p>
                        </div>
                        <div>
                            <svg
                                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">
                                600M+ Users
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Trusted by over 600 milion users around the
                                world
                            </p>
                        </div>
                        <div>
                            <svg
                                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">
                                100+ countries
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Have used Landwind to create functional websites
                            </p>
                        </div>
                        <div>
                            <svg
                                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <h3 className="mb-2 text-2xl font-bold dark:text-white">
                                5+ Million
                            </h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Transactions per day
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End block */}
            {/* Start block */}
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg
                            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"
                            />
                        </svg>
                        <blockquote>
                            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                                "Landwind is just awesome. It contains tons of
                                predesigned components and pages starting from
                                login screen to complex dashboard. Perfect
                                choice for your next SaaS application."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                alt="profile picture"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                    Micheal Gough
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                    CEO at Google
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            {/* End block */}
            {/* Start block */}
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Designed for business teams like yours
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Here at Landwind we focus on markets where
                            technology, innovation, and capital can unlock
                            long-term value and drive economic growth.
                        </p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* Pricing Card */}
                        <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                Starter
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Best option for personal use &amp; for your next
                                project.
                            </p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    $29
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                            {/* List */}
                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size:{" "}
                                        <span className="font-semibold">
                                            1 developer
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support:{" "}
                                        <span className="font-semibold">
                                            6 months
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates:{" "}
                                        <span className="font-semibold">
                                            6 months
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                            >
                                Get started
                            </a>
                        </div>
                        {/* Pricing Card */}
                        <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                Company
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Relevant for multiple users, extended &amp;
                                premium support.
                            </p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    $99
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                            {/* List */}
                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size:{" "}
                                        <span className="font-semibold">
                                            10 developers
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support:{" "}
                                        <span className="font-semibold">
                                            24 months
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates:{" "}
                                        <span className="font-semibold">
                                            24 months
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                            >
                                Get started
                            </a>
                        </div>
                        {/* Pricing Card */}
                        <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                                Enterprise
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Best for large scale uses and extended
                                redistribution rights.
                            </p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">
                                    $499
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                            {/* List */}
                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Team size:{" "}
                                        <span className="font-semibold">
                                            100+ developers
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Premium support:{" "}
                                        <span className="font-semibold">
                                            36 months
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Free updates:{" "}
                                        <span className="font-semibold">
                                            36 months
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* End block */}
            {/* Start block */}
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                        Frequently asked questions
                    </h2>
                    <div className="max-w-screen-md mx-auto">
                        <div
                            id="accordion-flush"
                            data-accordion="collapse"
                            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                            data-inactive-classes="text-gray-500 dark:text-gray-400"
                        >
                            <h3 id="accordion-flush-heading-1">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                    data-accordion-target="#accordion-flush-body-1"
                                    aria-expanded="true"
                                    aria-controls="accordion-flush-body-1"
                                >
                                    <span>
                                        Can I use Landwind in open-source
                                        projects?
                                    </span>
                                    <svg
                                        data-accordion-icon=""
                                        className="w-6 h-6 rotate-180 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </h3>
                            <div
                                id="accordion-flush-body-1"
                                className=""
                                aria-labelledby="accordion-flush-heading-1"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Landwind is an open-source library of
                                        interactive components built on top of
                                        Tailwind CSS including buttons,
                                        dropdowns, modals, navbars, and more.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out this guide to learn how to{" "}
                                        <a
                                            href="#"
                                            className="text-purple-600 dark:text-purple-500 hover:underline"
                                        >
                                            get started
                                        </a>{" "}
                                        and start developing websites even
                                        faster with components on top of
                                        Tailwind CSS.
                                    </p>
                                </div>
                            </div>
                            <h3 id="accordion-flush-heading-2">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                    data-accordion-target="#accordion-flush-body-2"
                                    aria-expanded="false"
                                    aria-controls="accordion-flush-body-2"
                                >
                                    <span>
                                        Is there a Figma file available?
                                    </span>
                                    <svg
                                        data-accordion-icon=""
                                        className="w-6 h-6 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </h3>
                            <div
                                id="accordion-flush-body-2"
                                className="hidden"
                                aria-labelledby="accordion-flush-heading-2"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Landwind is first conceptualized and
                                        designed using the Figma software so
                                        everything you see in the library has a
                                        design equivalent in our Figma file.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out the{" "}
                                        <a
                                            href="#"
                                            className="text-purple-600 dark:text-purple-500 hover:underline"
                                        >
                                            Figma design system
                                        </a>{" "}
                                        based on the utility classes from
                                        Tailwind CSS and components from
                                        Landwind.
                                    </p>
                                </div>
                            </div>
                            <h3 id="accordion-flush-heading-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                    data-accordion-target="#accordion-flush-body-3"
                                    aria-expanded="false"
                                    aria-controls="accordion-flush-body-3"
                                >
                                    <span>
                                        What are the differences between
                                        Landwind and Tailwind UI?
                                    </span>
                                    <svg
                                        data-accordion-icon=""
                                        className="w-6 h-6 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </h3>
                            <div
                                id="accordion-flush-body-3"
                                className="hidden"
                                aria-labelledby="accordion-flush-heading-3"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        The main difference is that the core
                                        components from Landwind are open source
                                        under the MIT license, whereas Tailwind
                                        UI is a paid product. Another difference
                                        is that Landwind relies on smaller and
                                        standalone components, whereas Tailwind
                                        UI offers sections of pages.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        However, we actually recommend using
                                        both Landwind, Landwind Pro, and even
                                        Tailwind UI as there is no technical
                                        reason stopping you from using the best
                                        of two worlds.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Learn more about these technologies:
                                    </p>
                                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-purple-600 dark:text-purple-500 hover:underline"
                                            >
                                                Landwind Pro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-purple-600 dark:text-purple-500 hover:underline"
                                            >
                                                Tailwind UI
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 id="accordion-flush-heading-4">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                    data-accordion-target="#accordion-flush-body-4"
                                    aria-expanded="false"
                                    aria-controls="accordion-flush-body-4"
                                >
                                    <span>What about browser support?</span>
                                    <svg
                                        data-accordion-icon=""
                                        className="w-6 h-6 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </h3>
                            <div
                                id="accordion-flush-body-4"
                                className="hidden"
                                aria-labelledby="accordion-flush-heading-4"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        The main difference is that the core
                                        components from Landwind are open source
                                        under the MIT license, whereas Tailwind
                                        UI is a paid product. Another difference
                                        is that Landwind relies on smaller and
                                        standalone components, whereas Tailwind
                                        UI offers sections of pages.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        However, we actually recommend using
                                        both Landwind, Landwind Pro, and even
                                        Tailwind UI as there is no technical
                                        reason stopping you from using the best
                                        of two worlds.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Learn more about these technologies:
                                    </p>
                                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-purple-600 dark:text-purple-500 hover:underline"
                                            >
                                                Landwind Pro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-purple-600 dark:text-purple-500 hover:underline"
                                            >
                                                Tailwind UI
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End block */}
            {/* Start block */}
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm mx-auto text-center">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Start your free trial today
                        </h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                            Try Landwind Platform for 30 days. No credit card
                            required.
                        </p>
                        <a
                            href="#"
                            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                        >
                            Free trial for 30 days
                        </a>
                    </div>
                </div>
            </section>
            {/* End block */}
        </div>
    );
};

export default page;
