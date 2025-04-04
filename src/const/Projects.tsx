import {Project} from "@/types/Project";
import {EnumTech} from "@/const/EnumTech";

export const projects: Project[] = [
    {
        name: "praMory",
        date: "12/2025",
        description:
            <div className="leading-relaxed font-sans text-[1.1rem]">
                <p className="indent-8">
                    <b className="text-[#ffc200]">A mobile application</b> designed to enhance learning using the memory palace technique - one of the most
                    <b> powerful learning methods</b>. The app allows users to create a palace with multiple rooms, where they can add things
                    to aid memorization.
                </p>
                <br/>
                <ul className="list-disc pl-5 space-y-1">
                    <li><b className="text-[#ffc200]">Data Persistence & Storage:</b> Uses <i>Zustand</i> with <i>AsyncStorage</i> for persisting user data, ensuring seamless state rehydration</li>
                    <li><b className="text-[#ffc200]">File Management:</b> Supports exporting and importing entire memory palaces as ZIP files using <i>react-native-fs</i> and <i>react-native-zip-archive</i></li>
                    <li><b className="text-[#ffc200]">Media Integration:</b> Enables users to select images from the gallery and attach them to rooms with <i>react-native-document-picker</i></li>
                </ul>
            </div>,
        images: ["praMory1.png", "praMory2.png", "praMory3.png"],
        tech: [EnumTech.ReactNative, EnumTech.TypeScript, EnumTech.NodeJS, EnumTech.Zustand, EnumTech.JSON, EnumTech.Git, EnumTech.TailwindCSS]
    }
]

