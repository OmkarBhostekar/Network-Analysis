"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CardSingle from "../../../../components/CardSingle";
import RelatedArticleCard from "components/RelatedArticleCard";
import BarChart from "components/Charts/BarChart";
import NodeGraph from "components/Charts/NodeGraph";

const Props = {};

const page = (props: any) => {
    // const router = useRouter();
    // const { id } = router.query;

    // let currArticle = allArticleFromDb.find((a) => a.id === `${articleId}`);

    // static article
    const currArticle = {
        id: 1,
        title: "How to use Next.js with TypeScript",
        description: "Next.js is a React framework for production",
        category: "React",
        img: "https://dummyimage.com/720x400",
    };

    const [relatedArticles, setRelatedArticles] = useState([
        {
            id: 1,
            title: "How to use Next.js with TypeScript",
            description:
                "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
            category: "React",
            img: "https://dummyimage.com/720x400",
        },
        {
            id: 2,
            title: "How to use Next.js with TypeScript",
            description:
                "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
            category: "React",
            img: "https://dummyimage.com/720x400",
        },
    ]);

    const nodes: Node[] = [
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" },
        { id: 4, label: "Node 4" },
        { id: 5, label: "Node 5" },
    ];
    const edges: Edge[] = [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
    ];

    const source = 90;
    const language = 60;

    const [tweetData, setTweetData] = useState({
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Tweet Analysis",
                data: [120, 190, 300, 500, 200, 300, 100],
                backgroundColor: [
                    "rgb(129, 236, 236, 0.2)",
                    "rgb(162, 155, 254, 0.2)",
                ],
                borderColor: ["#00cec9", "#6c5ce7"],
                borderWidth: 1,
            },
        ],
    });
    const [userData, setUserData] = useState({
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "User Analysis",
                data: [120, 190, 300, 500, 200, 300, 100],
                backgroundColor: [
                    "rgb(129, 236, 236, 0.2)",
                    "rgb(162, 155, 254, 0.2)",
                ],
                borderColor: ["#00cec9", "#6c5ce7"],
                borderWidth: 1,
            },
        ],
    });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 w-full ">
                <CardSingle article={currArticle} />
                {/* image block */}
                <div className="aspect-square w-auto md:w-full mx-8 md:mx-0">
                    <img
                        src={`data:image/png;base64, ` + currArticle.img}
                        alt="blog"
                        className="w-full h-full object-cover object-center dark:shadow-blue-800 shadow-sm rounded-md shadow-gray-500"
                    />
                </div>

                {/* related articles */}
                <div>
                    <div className="text-center mt-12 md:mt-0">
                        <p className="text-2xl font-bold tracking-wide dark:text-white">
                            Related Articles
                        </p>
                    </div>
                    <section className="text-gray-600 dark:text-gray-200 body-font overflow-hidden w-auto">
                        <div className="container px-5 py-12 mx-auto">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                                {relatedArticles.map((article, id) => {
                                    return (
                                        <RelatedArticleCard
                                            key={id}
                                            article={article}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <hr className="w-full border-t-2 border-gray-200 dark:border-black" />
            <div className="text-center m-4">
                <p className="text-xl font-bold tracking-wide dark:text-white my-4">
                    Network Visualization of Co-ordinated Behaviour
                </p>
                <div className="flex flex-col justify-center items-center">
                    <div className="h-80 w-full md:w-11/12 shadow-sm shadow-gray-600 dark:shadow-blue-800 dark:bg-slate-600 rounded-lg">
                        <NodeGraph nodes={nodes} edges={edges} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mx-8 gap-4">
                <div className="h-100 shadow-sm dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <div className="flex flex-col justify-center items-center m-4">
                        <p className="text-2xl font-bold tracking-wide dark:text-white my-4">
                            Source
                        </p>
                        <p className="text-xl font-semibold tracking-wide text-gray-500 dark:text-gray-300 my-4 text-center">
                            In order to help users determine the credibility of
                            an article, our website provides information about
                            the source of the article and assigns a rating for
                            the potential presence of misinformation. This
                            allows users to make informed decisions about the
                            content they read and the sources they trust.
                        </p>
                        <div className="flex flex-row items-center">
                            <div className="rounded-full tex-2xl font-bold bg-indigo-600 w-12 h-12 text-white dark:text-gray-200 flex items-center justify-center">
                                <p>{source}</p>
                            </div>
                            <p className="text-2xl dark:text-gray-200 mx-2 font-bold">
                                {"/"}
                            </p>
                            <p className="text-2xl dark:text-gray-200 font-bold">
                                100
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-100 shadow-sm dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <div className="flex flex-col justify-center items-center m-4">
                        <p className="text-2xl font-bold tracking-wide dark:text-white my-4">
                            Language
                        </p>
                        <p className="text-xl font-semibold tracking-wide text-gray-500 dark:text-gray-300 my-4 text-center">
                            Our website uses a language score to assess the
                            potential presence of propaganda in an article. This
                            score takes into consideration not only the language
                            used in the article itself but also in related
                            articles, evaluating for the use of faulty logic and
                            emotionally charged language. This helps users
                            identify potentially biased or misleading content.
                        </p>
                        <div className="flex flex-row items-center">
                            <div className="rounded-full text-2xl font-bold bg-indigo-600 w-12 h-12 text-white dark:text-gray-200 flex items-center justify-center">
                                <p>{language}</p>
                            </div>
                            <p className="text-2xl dark:text-gray-200 mx-2 font-bold">
                                {"/"}
                            </p>
                            <p className="text-2xl dark:text-gray-200 font-bold">
                                100
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 m-8 gap-4">
                <div className="shadow-sm dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <BarChart chartData={tweetData} />
                </div>
                <div className="shadow-sm dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <BarChart chartData={userData} />
                </div>
            </div>
        </>
    );
};

export default page;
