import {Project} from "@/types/Project";
import {EnumTech} from "@/const/EnumTech";

export const projects: Project[] = [
    {
        name: "Wirtualna Księga gości",
        date: "06/2025 - now",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">Work in progress...</b>
                </div>
            </div>,
        images: [],
        tech: [EnumTech.React, EnumTech.TypeScript, EnumTech.NextJS, EnumTech.Python, EnumTech.Flask, EnumTech.PostgreSQL, EnumTech.Git, EnumTech.Nginx]
    },
    {
        name: "LYMAD website",
        date: "05/2025 - now",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">See full website: https://lymad.com A full-stack web application</b> built with a modern <b>React frontend</b> and a secure <b>Python backend</b>, featuring robust authentication mechanisms including persistent login sessions. Designed with both user experience and data protection in mind, the project serves as a foundational template for scalable web systems.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li>
                        <b className="text-[#ffc200]">Frontend (React):</b> Responsive and modular UI built with <i>React</i> and <i>Tailwind CSS</i>, offering dynamic user interaction and form validation
                    </li>
                    <li>
                        <b className="text-[#ffc200]">Secure Authentication:</b> Supports <i>login, registration,</i> and <i>auto-login</i> via <i>HTTP-only cookies</i> and <i>JWT</i>, protecting against common web vulnerabilities
                    </li>
                    <li>
                        <b className="text-[#ffc200]">Backend (Python):</b> API built with my API <i>(LRA project)</i>, handling authentication logic, session management, and secure password storage using <i>bcrypt hashing</i>
                    </li>
                    <li>
                        <b className="text-[#ffc200]">Development-Oriented:</b> Structured for easy expansion — includes basic user roles, scalable routing, and database-ready models using <i>SQLAlchemy</i>
                    </li>
                </ul>
            </div>,
        images: ["Lymad-website-4.png", "Lymad-website-5.png", "Lymad-website-6.png", "Lymad-website-1.png", "Lymad-website-2.png", "Lymad-website-3.png"],
        tech: [EnumTech.React, EnumTech.TailwindCSS, EnumTech.TypeScript, EnumTech.NextJS, EnumTech.Zustand, EnumTech.Python, EnumTech.Flask, EnumTech.PostgreSQL, EnumTech.Git, EnumTech.Nginx]
    },
    {
        name: "praAppDetector",
        date: "04/2025",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8"> <b className="text-[#ffc200]">A macOS background utility</b></div>
                <br/>
                <div>Work in progress...</div>
                {/*<ul className="list-disc pl-5 space-y-1">*/}
                {/*    <li><b className="text-[#ffc200]">Real-Time Monitoring:</b> Captures battery level and charging status <i>every minute</i> via <i>IOKit Power Sources API</i>, ensuring data accuracy</li>*/}
                {/*    <li><b className="text-[#ffc200]">Data Persistence:</b> Automatically stores logs in a <i>local SQLite database</i>, with advanced trend analysis powered by <i>Python data science tools</i> (Numpy/Matplotlib)</li>*/}
                {/*    <li><b className="text-[#ffc200]">Background Execution:</b> Runs as a <i>launchd service</i> (via <code>~/Library/LaunchAgents/</code> .plist), ensuring persistent monitoring with minimal system impact</li>*/}
                {/*</ul>*/}
            </div>,
        images: [],
        tech: [EnumTech.Swift, EnumTech.Git, EnumTech.MacOS] //, EnumTech.Python, EnumTech.SQLite, EnumTech.SQL,
    },
    {
        name: "praLog",
        date: "04/2025",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8"> <b className="text-[#ffc200]">A macOS background utility</b> that continuously tracks battery health and usage patterns, leveraging <b>IOKit's low-level APIs</b> to collect precise metrics. The app runs silently in the background, logging data to a database for long-term analysis and diagnostics. </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Real-Time Monitoring:</b> Captures battery level and charging status <i>every minute</i> via <i>IOKit Power Sources API</i>, ensuring data accuracy</li>
                    <li><b className="text-[#ffc200]">Data Persistence:</b> Automatically stores logs in a <i>local SQLite database</i>, with advanced trend analysis powered by <i>Python data science tools</i> (Numpy/Matplotlib)</li>
                    <li><b className="text-[#ffc200]">Background Execution:</b> Runs as a <i>launchd service</i> (via <code>~/Library/LaunchAgents/</code> .plist), ensuring persistent monitoring with minimal system impact</li>
                </ul>
            </div>,
        images: ["praLog1.png", "praLog2.png", "praLog3.png"],
        tech: [EnumTech.Swift, EnumTech.Python, EnumTech.SQLite, EnumTech.SQL, EnumTech.Git, EnumTech.MacOS]
    },
    {
        name: "LRA",
        date: "04/2025",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">LRA - Login REST API</b> provides essential backend services
                    for user management with JWT-based security. Built with <b>Flask and PostgreSQL</b>,
                    it offers frontend applications ready-to-use endpoints for seamless auth integration.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Core Features:</b> Registration, login, token refresh, and session validation</li>
                    <li><b className="text-[#ffc200]">Tech Stack:</b> Python (Flask), PostgreSQL, JWT tokens, Postman-tested</li>
                    <li><b className="text-[#ffc200]">Integration Ready:</b> Standardized responses for easy frontend implementation</li>
                    <li><b className="text-[#ffc200]">Security:</b> Password hashing by <i>bcrypt</i>, token revocation, and health monitoring</li>
                </ul>
            </div>,
        images: ["LRA1.png", "LRA2.png", "LRA6.png", "LRA4.png", "LRA3.png"],
        tech: [EnumTech.Python, EnumTech.Flask, EnumTech.PostgreSQL, EnumTech.Docker, EnumTech.Postman, EnumTech.SQL, EnumTech.Git]
    },
    {
        name: "praMory",
        date: "12/2025",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">A mobile application</b> designed to enhance learning using the memory palace technique - one of the most
                    <b> powerful learning methods</b>. The app allows users to create a palace with multiple rooms, where they can add things
                    to aid memorization.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Data Persistence & Storage:</b> Uses <i>Zustand</i> with <i>AsyncStorage</i> for persisting user data, ensuring seamless state rehydration</li>
                    <li><b className="text-[#ffc200]">File Management:</b> Supports exporting and importing entire memory palaces as ZIP files using <i>react-native-fs</i> and <i>react-native-zip-archive</i></li>
                    <li><b className="text-[#ffc200]">Media Integration:</b> Enables users to select images from the gallery and attach them to rooms with <i>react-native-document-picker</i></li>
                </ul>
            </div>,
        images: ["praMory1.png", "praMory2.png", "praMory3.png"],
        tech: [EnumTech.ReactNative, EnumTech.TypeScript, EnumTech.NodeJS, EnumTech.Zustand, EnumTech.JSON, EnumTech.Git, EnumTech.TailwindCSS, EnumTech.Android, EnumTech.NextJS]
    },
    {
        name: "OrderFlow",
        date: "11/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">Mobile Frontend Project</b> - A React Native application
                    built from Figma designs with pixel-perfect implementation. Focused on delivering
                    smooth UI interactions and seamless API integration.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">UI Precision:</b> Faithfully translated Figma designs to code using Material UI components</li>
                    <li><b className="text-[#ffc200]">State Management:</b> Implemented with Zustand for optimal performance</li>
                    <li><b className="text-[#ffc200]">Styling:</b> Tailwind CSS for maintainable, responsive styling</li>
                    <li><b className="text-[#ffc200]">Integration:</b> Connected to backend API with error handling</li>
                </ul>
            </div>,
        images: ["OrderFlow1.png", "OrderFlow3.png", "OrderFlow2.png", "OrderFlow4.png", "OrderFlow5.png"],
        tech: [EnumTech.ReactNative, EnumTech.TailwindCSS, EnumTech.Zustand, EnumTech.NextJS, EnumTech.Git, EnumTech.Android]
    },
    {
        name: "UnEngine Gener",
        date: "10/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">Unreal Engine Terrain Generator</b> - My first dive into game development in Unreal Engine,
                    creating a procedural cube-based terrain system. Learned core UE concepts while building this customizable landscape tool.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Core Functionality:</b> Generates grid-based terrain from width/size parameters using Blueprints</li>
                    <li><b className="text-[#ffc200]">Learning Focus:</b> Mastered actor spawning, material application, and basic editor scripting</li>
                </ul>
            </div>,
        images: ["GardenMother1.png", "GardenMother2.png"],
        tech: [EnumTech.UnrealEngine]
    },
    {
        name: "praFarm2M",
        date: "09/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">2D Farming Simulator</b> - A agricultural management game
                    featuring interactive farm plots with detailed growth systems. Developed to master Godot's
                    input handling and state management.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Interactive Fields:</b> Hover-to-inspect system showing planting status, hydration levels, and crop types</li>
                    <li><b className="text-[#ffc200]">Core Mechanics:</b> Field expansion, planting cycles, and watering requirements</li>
                    <li><b className="text-[#ffc200]">Visual Feedback:</b> Different soil states (dry/moist) and progressive crop growth stages</li>
                </ul>
            </div>,
        images: ["praFarm2M.png"],
        tech: [EnumTech.Godot]
    },
    {
        name: "praBlock",
        date: "08/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">Block Puzzle Classic</b> - A mobile tile-matching game
                    with addictive block-placement mechanics
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Core Gameplay:</b> Drag-and-drop block placement with line-clearing mechanics</li>
                    <li><b className="text-[#ffc200]">Data Persistence:</b> JSON-saved game state and local leaderboard</li>
                </ul>
            </div>,
        images: ["praBlock1.png", "praBlock2.png"],
        tech: [EnumTech.Godot, EnumTech.JSON]
    },
    {
        name: "MatchItems",
        date: "07/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">Match Items 2D</b> - An addictive item-combination game
                    where players experiment with recipes to discover new creations. Developed to explore Unity's
                    drag-and-drop systems and inventory management.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Core Mechanic:</b> Matching the same items</li>
                    <li><b className="text-[#ffc200]">Progress Tracking:</b> Quest objectives with reward system</li>
                    <li><b className="text-[#ffc200]">Tech Implementation:</b> Unity's UI system with scriptable objects for recipe data</li>
                </ul>
            </div>,
        images: ["MatchItems1.png", "MatchItems2.png"],
        tech: [EnumTech.Unity, EnumTech.CSharp]
    },
    {
        name: "PCG",
        date: "07/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">PCG Exploration Project</b> - My hands-on dive into procedural content generation,
                    experimenting with both game-ready implementations in Unity and algorithmic foundations in Python.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Unity Implementation:</b> Created runtime terrain/cave generators</li>
                    <li><b className="text-[#ffc200]">Python Prototyping:</b> Developed scripts to test PCG algorithms</li>
                    <li><b className="text-[#ffc200]">Visual Output:</b> Generated sample outputs showing before/after parameter adjustments</li>
                </ul>
            </div>,
        images: ["PCG1.png", "PCG2.png"],
        tech: [EnumTech.Unity, EnumTech.Python, EnumTech.CSharp, EnumTech.Git]
    },
    {
        name: "Mclone",
        date: "07/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">3D Voxel Terrain Generator</b> - A Unity project implementing Perlin noise
                    to create Minecraft-style destructible environments.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Noise Generation:</b> Customizable terrain creation via Unity Inspector (frequency, seed, and amplitude)</li>
                    <li><b className="text-[#ffc200]">Interactive Editing:</b> Place and remove blocks with hotbar inventory system</li>
                </ul>
            </div>,
        images: ["Mclone1.png", "Mclone2.png"],
        tech: [EnumTech.Unity, EnumTech.CSharp]
    },
    {
        name: "praChat",
        date: "06/2024",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">Real-Time Chat Application</b> - A responsive messaging platform
                    featuring instant communication through <i>Socket.IO</i> (real-time event-based library),
                    with secure user authentication and contact management.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Core Features:</b> Instant messaging, friend list management, and login system</li>
                    <li><b className="text-[#ffc200]">Tech Stack:</b> React frontend with Flask-SocketIO backend, PostgreSQL database</li>
                    <li><b className="text-[#ffc200]">Real-Time Engine:</b> Socket.IO for bidirectional client-server communication</li>
                    <li><b className="text-[#ffc200]">Data Security:</b> Encrypted credentials and chat history persistence</li>
                </ul>
            </div>,
        images: ["praChat1.png", "praChat2.png", "praChat3.png"],
        tech: [EnumTech.React, EnumTech.Python, EnumTech.Flask, EnumTech.PostgreSQL, EnumTech.SocketIO, EnumTech.RestAPI, EnumTech.NextJS, EnumTech.NodeJS, EnumTech.SQL, EnumTech.Git]
    },
    {
        name: "HexaRR",
        date: "12/2023",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <div className="indent-8">
                    <b className="text-[#ffc200]">Hex-Based map for player</b> - A 3D Unity environment featuring
                    hexagonal terrain with dynamic resource systems and growth mechanics, showcasing my 3D modeling
                    pipeline from Blender to Unity.
                </div>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">World Building:</b> Hexagonal grid system with destructible resources (trees/rocks) and plant growth cycles</li>
                    <li><b className="text-[#ffc200]">Player Interaction:</b>
                        <span className="flex flex-col ml-2">
                            <span>• Tree cutting and rock mining mechanics</span>
                            <span>• Collect water from wells using buckets</span>
                            <span>• Fruit harvesting from bushes</span>
                        </span>
                    </li>
                </ul>
            </div>,
        images: ["HexaRR1.png", "HexaRR2.png", "HexaRR3.png"],
        tech: [EnumTech.Unity, EnumTech.Blender, EnumTech.CSharp]
    }
]

