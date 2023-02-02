import NodeGraph from "components/Charts/NodeGraph";
import React from "react";
import { Node, Edge } from "@/types/Graph";

type Props = {};

const Report = (props: Props) => {
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

    return (
        <div className="flex flex-col">
            <div className="h-64 w-full">
                <NodeGraph nodes={nodes} edges={edges} />
            </div>
        </div>
    );
};

export default Report;
