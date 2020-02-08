import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene } from "@babylonjs/core";
import { GUI3DManager } from '@babylonjs/gui/3D/gui3DManager';
export default class GUI3DManagerLifecycleListener implements LifecycleListener<GUI3DManager> {
    private scene;
    constructor(scene: Scene);
    onParented(parent: CreatedInstance<any>): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance?: CreatedInstance<GUI3DManager>): void;
    /**
     * We may have BoundComponents inbetween gui3d controls.
     */
    addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>): void;
    onUnmount(): void;
}
