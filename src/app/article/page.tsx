"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../../components/Card";

const page = () => {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "The 400 Blows faklsjf",
            category: "Drama",
            description: "looremf lkajs klfja klfjd aksl fjjdsf ",
            img: "https://dummyimage.com/720x400",
        },
        {
            id: 2,
            title: "The 400 Blows",
            category: "Drama",
            description:
                "looremf lkajs  fjksdl jklda jklfja klfjd  kfl jalkdfja lkfjsaklf jlksdfjaksl fjjdsf ",
            img: "https://dummyimage.com/720x400",
        },
        {
            id: 3,
            title: "The 400 Blows",
            category: "Drama",
            description:
                "looremf lkajs kfdsljf lkklfja klfjd  kfl jalkdfja lkfjsaklf jlksdfjaksl fjjdsf ",
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
        <div className="pt-24 dark:bg-slate-800">
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
    );
};

export default page;
