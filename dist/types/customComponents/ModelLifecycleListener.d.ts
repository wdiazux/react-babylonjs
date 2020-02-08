import { Scene } from "@babylonjs/core";
import "@babylonjs/loaders";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { LoadedModel } from "../model";
/**
 * This listener has no underlying babylonjs type.  We are handling loading a 3D model with underlying mesh(es).
 */
export default class ModelLifecycleListener implements LifecycleListener<LoadedModel> {
    private props;
    private scene;
    constructor(scene: Scene, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<LoadedModel>): void;
    onUnmount(): void;
}
