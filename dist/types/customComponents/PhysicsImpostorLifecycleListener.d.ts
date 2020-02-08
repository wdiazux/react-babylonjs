import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Nullable, Scene, PhysicsImpostor } from "@babylonjs/core";
/**
 * There is a lot going on in the PhysicsImpostor constructor, so we delay instantiation so that we have a target
 * 'object' before creation.
 */
export default class PhysicsImpostorLifecycleListener implements LifecycleListener<PhysicsImpostor> {
    private _parent;
    private props;
    private scene;
    constructor(scene: Nullable<Scene>, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<PhysicsImpostor>): void;
    onUnmount(): void;
}
