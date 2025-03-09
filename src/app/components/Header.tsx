import Scene from "@/three/scene";
import {is_scene_active} from "@/const/three_const";
import Button from "@/app/components/Button";

export default function Header() {
    // function Switch() {
    //     is_scene_active = !is_scene_active;
    // }

    return (
        <div className="absolute z-2">
            {is_scene_active && <Scene/>}
            {/*<Button onPress={() => {is_scene_active = !is_scene_active}>}/>*/}
        </div>
    );
}
