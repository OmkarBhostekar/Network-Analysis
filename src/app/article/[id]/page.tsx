"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CardSingle from "../../../../components/CardSingle";
import RelatedArticleCard from "components/RelatedArticleCard";
import BarChart from "components/Charts/BarChart";
import NodeGraph from "components/Charts/NodeGraph";
import { Node, Edge } from "@/types/Graph";
import { Article } from "@/types/Article";
import { log } from "console";
import { arrayBuffer } from "node:stream/consumers";
import PieChart from "components/Charts/PieChart";

const Props = {};

const page = ({ params }: any) => {
    const articleId = params["id"];
    console.log(articleId);

    // let currArticle = allArticleFromDb.find((a) => a.id === `${articleId}`);

    const [article, setArticle] = useState<Article | null>(null);
    const [imgBlob, setImgBlob] = useState<string>("");

    const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

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

    // from ml
    const propagandas: any[] = [];

    const propaganda = {
        red_herring:
            "Introducing irrelevant material to the issue being discussed, so that everyone's attention is diverted away from the points made.",
        straw_man:
            "When an opponent's proposition is substituted with a similar one which is then refuted in place of the original proposition.",
        whataboutism:
            "A technique that attempts to discredit an opponent's position by charging them with hypocrisy without directly disproving their argument.",
        casual_oversimplification:
            "Assuming a single cause or reason when there are actually multiple causes for an issue.It includes transferring blame to one person or group of people without investigating the complexities of the issue",
        appeal_to_authority:
            "Stating that a claim is true simply because a valid authority or expert on the issue said it was true, without any other supporting evidence offered. We consider the special case in which the reference is not an authority or an expert in this technique, altough it is referred to as Testimonial in literature.",
        "black-and-white_fallacy":
            "Presenting two alternative options as the only possibilities, when in fact more possibilities exist. As an the extreme case, tell the audience exactly what actions to take, eliminating any other possible choices (Dictatorship).",
        name_calling:
            "Labeling the object of the propaganda campaign as either something the target audience fears, hates, finds undesirable or loves, praises.",
        labeling:
            "Labeling the object of the propaganda campaign as either something the target audience fears, hates, finds undesirable or loves, praises.",
        loaded_language:
            "Using specific words and phrases with strong emotional implications (either positive or negative) to influence an audience.",
        exaggeration:
            "Either representing something in an excessive manner: making things larger, better, worse (e.g., 'the best of the best', 'quality guaranteed') or making something seem less important or smaller than it really is (e.g., saying that an insult was just a joke).",
        minimisation:
            "Either representing something in an excessive manner: making things larger, better, worse (e.g., 'the best of the best', 'quality guaranteed') or making something seem less important or smaller than it really is (e.g., saying that an insult was just a joke).",
        "flag-waving":
            "Playing on strong national feeling (or to any group; e.g., race, gender, political preference) to justify or promote an action or idea",
        doubt: "Questioning the credibility of someone or something.",
        appeal_to_fear:
            "Seeking to build support for an idea by instilling anxiety and/or panic in the population towards an alternativesome cases the support is built based on preconceived judgements.",
        prejudice:
            "Seeking to build support for an idea by instilling anxiety and/or panic in the population towards an alternativesome cases the support is built based on preconceived judgements.",
        slogans:
            "A brief and striking phrase that may include labeling and stereotyping. Slogans tend to act as emotional appeals.",
        "thought-terminating_cliches":
            "Words or phrases that discourage critical thought and meaningful discussion about a given topic. They are typically short, generic sentences that offer seemingly simple answers to complex questions or that distract attention away from other lines of thought.",
        bandwagon:
            "Attempting to persuade the target audience to join in and take the course of action because 'everyone else is taking the same action'.",
        reductio_ad_hitlerum:
            "Persuading an audience to disapprove an action or idea by suggesting that the idea is popular with groups hated in contempt by the target audience. It can refer to any person or concept with a negative connotation.",
        repetition:
            "Repeating the same message over and over again so that the audience will eventually accept it.",
    };

    useEffect(() => {
        fetchArticle();
        fetchRecc();
    }, []);

    const fetchRecc = () => {
        fetch(`/api/article/recommend/${articleId}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedArticles(data);
            });
    };

    useEffect(() => {
        if (!article) return;
        fetchImageBlob();
    }, [article]);

    const fetchImageBlob = () => {
        // data:image/png;base64,
        fetch(`/api/article/wordcloud`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: article!.content.slice(0, 100) }),
        }).then((data) => {
            console.log(data);
            setImgBlob("data:image/png;base64, " + data);
        });
    };

    const fetchArticle = () => {
        fetch(`/api/article/${articleId}`)
            .then((res) => res.json())
            .then((data) => {
                setArticle(data);
                console.log(data);
            });
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 w-full ">
                {article && <CardSingle article={article} />}

                {/* image block */}
                <div className=" aspect-video w-auto md:w-full mx-8 md:mx-0">
                    {imgBlob.length > 0 && (
                        <img
                            src={imgBlob}
                            alt="blog"
                            className="w-full h-full object-cover object-center dark:shadow-blue-800 shadow-sm rounded-md shadow-gray-500"
                        />
                    )}
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
                <div className="shadow-sm dark:text-white dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <BarChart chartData={tweetData} />
                </div>
                <div className="shadow-sm dark:text-white dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <BarChart chartData={userData} />
                </div>
            </div>

            <div className="m-8">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            {propagandas.map((propa: any, id: any) => {
                                return (
                                    <div
                                        key={id}
                                        className="py-8 flex flex-wrap md:flex-nowrap"
                                    >
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">
                                                {propa}
                                            </span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                                {propaganda[propa]}
                                            </h2>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 m-8 gap-4">
                <div className="shadow-sm dark:text-white dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <PieChart chartData={tweetData} />
                </div>
                <div className="shadow-sm dark:text-white dark:shadow-blue-800 shadow-gray-500 rounded-md">
                    <PieChart chartData={userData} />
                </div>
            </div>
        </>
    );
};

export default page;
