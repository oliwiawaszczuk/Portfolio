import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Background
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {useCallback, useEffect, useState} from "react";
import {initialEdges, initialNodes} from "@/const/Nodes";
import {BackgroundVariant} from "@reactflow/background";


const KnowledgeGraph = () => {
    const [visible, setVisible] = useState(true)
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    )

    return (
        <>
            {!visible ?
                <div className="w-auto bg-gray-700 h-auto flex justify-center cursor-pointer p-2 border-gray-800 border-2" onClick={() => setVisible(true)}>
                    <h1>Click to show knowledge graph</h1>
                </div>
            :
                <div className="w-full h-full flex flex-row">
                    <div style={{
                        width: '96%',
                        height: '80vh',
                        transition: 'height 0.3s ease',
                        overflow: 'hidden',
                    }} className="border-gray-800 border-2">
                        <ReactFlow
                            className="relative z-10"
                            nodes={nodes}
                            edges={edges}
                            fitView
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                        >
                            <svg
                                width="100%"
                                height="100%"
                                className="absolute pointer-events-none select-none"
                                style={{ zIndex: 0 }}
                            >
                                <text
                                    x="50%"
                                    y="10%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="102"
                                    fill="rgba(0,0,0, 0.3)"
                                >
                                    MY KNOWLEDGE GRAPH
                                </text>
                            </svg>

                            <Background
                                gap={10}
                                color="#ccc"
                                variant={BackgroundVariant.Dots}
                            />
                        </ReactFlow>
                    </div>
                    <div className="w-[4%] bg-gray-700 h-auto flex justify-center items-center cursor-pointer border-gray-800 border-2" onClick={() => setVisible(false)}>
                        <h1 style={{ writingMode: 'vertical-rl' }}>Use scroll on graph to see more details. Click here to hide graph</h1>
                    </div>
                </div>
            }
        </>
    )
}

export default KnowledgeGraph
