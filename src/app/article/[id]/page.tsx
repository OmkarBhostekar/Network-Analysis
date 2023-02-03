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
import { Graph } from "@/types/Nodes";
import names from "../../../utils/names_mapping.json";

const Props = {};

const page = ({ params }: any) => {
  const articleId = params["id"];
  console.log(articleId);

  // let currArticle = allArticleFromDb.find((a) => a.id === `${articleId}`);

  const [article, setArticle] = useState<Article | null>(null);
  const [imgBlob, setImgBlob] = useState<string>("");
  const [graph, setGraph] = useState<Graph>();
  const [nodes, setNodes] = useState<Node[]>([{ id: 0, label: "Loading" }]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  const source = 90;
  const language = 60;

  const [tweetData, setTweetData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Tweet Analysis",
        data: [120, 190, 300, 500, 200, 300, 100],
        backgroundColor: ["rgb(129, 236, 236, 0.2)", "rgb(162, 155, 254, 0.2)"],
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
        backgroundColor: ["rgb(129, 236, 236, 0.2)", "rgb(162, 155, 254, 0.2)"],
        borderColor: ["#00cec9", "#6c5ce7"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (!graph) return;
    let _nodes = [];
    for (let node of graph.nodes) {
      // @ts-ignore
      _nodes.push({ id: node, label: names[node] ?? "Unknown" });
    }
    console.log(_nodes);
    setNodes(_nodes);
    let _edges = [];
    for (let edge of graph.edges) {
      _edges.push({ from: edge[0], to: edge[1] });
    }
    setEdges(_edges);
    console.log(edges, nodes);
  }, [graph]);

  useEffect(() => {
    fetchArticle();
    fetchRecc();
    fetchGraph();
  }, []);

  const fetchGraph = async () => {
    fetch(`/api/ml/graph?uuid=${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGraph(data);
      });
  };

  const fetchRecc = async () => {
    fetch(`/api/article/rec?id=${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedArticles(data.slice(0, 3));
      });
  };

  // useEffect(() => {
  //   if (!article) return;
  //   fetchImageBlob();
  // }, [article]);

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
        const buffer = Buffer.from(data.wc.data);

        const base64String = buffer.toString("base64");
        setImgBlob("data:image/png;base64, " + base64String);
        console.log(base64String);

        console.log(data);
      });
  };

  return (
    <>
      <div className="my-card mx-4 px-3 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32">
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
                  return <RelatedArticleCard key={id} article={article} />;
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
              In order to help users determine the credibility of an article,
              our website provides information about the source of the article
              and assigns a rating for the potential presence of misinformation.
              This allows users to make informed decisions about the content
              they read and the sources they trust.
            </p>
            <div className="flex flex-row items-center">
              <div className="rounded-full tex-2xl font-bold bg-indigo-600 w-12 h-12 text-white dark:text-gray-200 flex items-center justify-center">
                <p>{source}</p>
              </div>
              <p className="text-2xl dark:text-gray-200 mx-2 font-bold">
                {"/"}
              </p>
              <p className="text-2xl dark:text-gray-200 font-bold">100</p>
            </div>
          </div>
        </div>

        <div className="h-100 shadow-sm dark:shadow-blue-800 shadow-gray-500 rounded-md">
          <div className="flex flex-col justify-center items-center m-4">
            <p className="text-2xl font-bold tracking-wide dark:text-white my-4">
              Language
            </p>
            <p className="text-xl font-semibold tracking-wide text-gray-500 dark:text-gray-300 my-4 text-center">
              Our website uses a language score to assess the potential presence
              of propaganda in an article. This score takes into consideration
              not only the language used in the article itself but also in
              related articles, evaluating for the use of faulty logic and
              emotionally charged language. This helps users identify
              potentially biased or misleading content.
            </p>
            <div className="flex flex-row items-center">
              <div className="rounded-full text-2xl font-bold bg-indigo-600 w-12 h-12 text-white dark:text-gray-200 flex items-center justify-center">
                <p>{language}</p>
              </div>
              <p className="text-2xl dark:text-gray-200 mx-2 font-bold">
                {"/"}
              </p>
              <p className="text-2xl dark:text-gray-200 font-bold">100</p>
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
