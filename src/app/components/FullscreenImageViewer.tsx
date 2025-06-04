'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface FullscreenImageViewerProps {
    imageSrc: string | null;
    onClose: () => void;
}

const FullscreenImageViewer = ({ imageSrc, onClose }: FullscreenImageViewerProps) => {
    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
    const [imageSize, setImageSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    
    // Detect image orientation when image changes
    useEffect(() => {
        if (!imageSrc) return;
        
        const img = new Image();
        img.src = `./projects_image/${imageSrc}`;
        
        img.onload = () => {
            setImageSize({ width: img.width, height: img.height });
            
            if (img.height > img.width) {
                setOrientation('portrait');
            } else {
                setOrientation('landscape');
            }
        };
    }, [imageSrc]);
    
    // If no image is set, don't render anything
    if (!imageSrc) return null;
    
    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] bg-black flex items-center justify-center cursor-pointer"
                style={{ 
                    height: '100vh', 
                    width: '100vw',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                onClick={onClose}
            >
                {/* Help text */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full z-10 text-white/80 text-xs md:text-sm">
                    Click anywhere to close
                </div>
                
                <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="relative" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
                        <img 
                            src={`./projects_image/${imageSrc}`} 
                            className={orientation === 'portrait' 
                                ? "max-h-[90vh] w-auto object-contain" 
                                : "max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
                            }
                            alt="Fullscreen view"
                            draggable="false"
                        />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FullscreenImageViewer; 