"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CardSingle from "../../../../components/CardSingle";
import RelatedArticleCard from "components/RelatedArticleCard";

const Props = {};

const page = (props: any) => {
    // const router = useRouter();
    // const { articleId } = router.query;
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

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 w-full ">
                <CardSingle className="" article={currArticle} />
                {/* image block */}
                <div className="aspect-square w-auto md:w-full mx-4 md:mx-0">
                    <img
                        src={"https://dummyimage.com/1000x1000"}
                        alt="blog"
                        className="w-full h-full object-cover object-center dark:shadow-indigo-400 shadow-md rounded-md shadow-gray-500"
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
            <hr className="w-full border-t-[1px] border-gray-200 dark:border-black" />
            <div className=""></div>
        </>
    );
};

export default page;
