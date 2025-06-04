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
import { motion } from "framer-motion";

const KnowledgeGraph = () => {
    const [visible, setVisible] = useState(false)
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    )

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-light text-white mb-2 tracking-tight">Knowledge<span className="font-semibold"> Graph</span></h2>
                    <div className="h-[2px] w-24 bg-[#ffc951] mb-6"></div>
                    <p className="text-[#a0a0a0] max-w-2xl">An interactive visualization of my technical skills and their relationships.</p>
                </motion.div>
            </div>

            {!visible ? (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div 
                        className="w-full bg-[#1e1e1e] hover:bg-[#252525] transition-all rounded-lg cursor-pointer p-4 border border-[#ffc951]/20 flex justify-center items-center"
                        onClick={() => setVisible(true)}
                    >
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffc951" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <polyline points="9 21 3 21 3 15"></polyline>
                                <line x1="21" y1="3" x2="14" y2="10"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                            </svg>
                            <span className="text-white">Show Knowledge Graph</span>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-2">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-[97%] w-full"
                            style={{
                                height: '70vh',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div className="w-full h-full rounded-lg overflow-hidden border-2 border-[#ffc951]/20 bg-[#0a0a0a] shadow-[0_0_15px_rgba(255,201,81,0.1)]">
                                <ReactFlow
                                    nodes={nodes}
                                    edges={edges}
                                    fitView
                                    onNodesChange={onNodesChange}
                                    onEdgesChange={onEdgesChange}
                                    onConnect={onConnect}
                                    className="relative"
                                    nodesDraggable={true}
                                    nodesFocusable={true}
                                    edgesFocusable={true}
                                >
                                    <Background
                                        gap={20}
                                        color="rgba(255, 201, 81, 0.15)"
                                        variant={BackgroundVariant.Dots}
                                        size={1.5}
                                    />
                                    
                                    <div className="absolute top-2 left-2 rounded bg-[#1a1a1a] backdrop-blur-sm p-3 z-10 text-sm text-[#ffc951] border border-[#ffc951]/20">
                                        Drag nodes to explore connections
                                    </div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                                        <p className="text-[rgba(255,201,81,0.05)] text-9xl font-bold tracking-wider">SKILLS</p>
                                    </div>
                                </ReactFlow>
                            </div>
                        </motion.div>
                        
                        <div 
                            className="lg:w-[3%] w-full bg-[#1e1e1e] rounded-lg flex lg:flex-col justify-center items-center cursor-pointer border border-[#ffc951]/20 hover:bg-[#252525] transition-all"
                            onClick={() => setVisible(false)}
                        >
                            <div className="p-4 lg:rotate-90 whitespace-nowrap flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffc951" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                                <span className="text-sm text-white">Hide Graph</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add style tag to customize React Flow node styles */}
            <style jsx global>{`
                .react-flow__node {
                    background: #1a1a1a;
                    color: white;
                    border: 1px solid rgba(255, 201, 81, 0.3);
                    border-radius: 6px;
                    padding: 8px 12px;
                    font-weight: 500;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }
                
                .react-flow__node:hover {
                    border-color: #ffc951;
                    box-shadow: 0 0 15px rgba(255, 201, 81, 0.4);
                }
                
                .react-flow__edge-path {
                    stroke: rgba(255, 201, 81, 0.6);
                    stroke-width: 2;
                }
                
                .react-flow__edge-text {
                    fill: #ffc951;
                }

                .react-flow__node-default.selectable:hover,
                .react-flow__node-default.selected {
                    box-shadow: 0 0 0 2px #ffc951;
                }
            `}</style>
        </motion.div>
    )
}

export default KnowledgeGraph
