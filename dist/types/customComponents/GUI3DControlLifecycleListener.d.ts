import { Scene, Nullable } from "@babylonjs/core";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Control3D } from '@babylonjs/gui/3D/controls/control3D';
export default class GUI3DControlLifecycleListener implements LifecycleListener<Control3D> {
    private scene;
    constructor(scene: Nullable<Scene>);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<Control3D>): void;
    addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>): void;
    onUnmount(): void;
}
