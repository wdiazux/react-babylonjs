import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene, Camera, Nullable } from "@babylonjs/core";
export default class CameraLifecycleListener implements LifecycleListener<Camera> {
    private props;
    private canvas;
    private scene;
    constructor(scene: Nullable<Scene>, props: any, canvas: HTMLCanvasElement);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
    onUnmount(): void;
}
