import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge, Background,

} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {useCallback, useState} from "react";
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
                <div className="w-auto bg-[#354153] h-auto flex justify-center cursor-pointer p-2" onClick={() => setVisible(true)}>
                    <h1>Click to show graph</h1>
                </div>
            :
                <div className="w-full h-full flex flex-row">
                    <div style={{
                        width: '96%',
                        height: '80vh',
                        transition: 'height 0.3s ease',
                        overflow: 'hidden',
                        border: '2px solid #354153',
                    }}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            fitView
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            // nodesDraggable={false}
                            // nodesConnectable={false}
                            // elementsSelectable={false}
                            // zoomOnScroll={false}
                            // panOnDrag={false}
                            // zoomOnPinch={false}
                            // panOnScroll={false}
                        >
                            <Background
                                gap={10}
                                color="#ccc"
                                variant={BackgroundVariant.Dots}
                            />
                        </ReactFlow>
                    </div>
                    <div className="w-[4%] bg-[#354153] h-auto flex justify-center items-center cursor-pointer" onClick={() => setVisible(false)}>
                        <h1 style={{ writingMode: 'vertical-rl' }}>Click here to hide graph. Use scroll on graph to see more details</h1>
                    </div>
                </div>
            }
        </>
    )
}

export default KnowledgeGraph
