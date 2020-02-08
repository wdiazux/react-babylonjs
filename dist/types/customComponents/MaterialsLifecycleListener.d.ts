import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene } from "@babylonjs/core";
import { Material } from '@babylonjs/core/Materials';
export default class MaterialsLifecycleListener implements LifecycleListener<Material> {
    onCreated(instance: CreatedInstance<Material>, scene: Scene): void;
    onParented(parent: CreatedInstance<any>): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance?: CreatedInstance<Material>): void;
    onUnmount(): void;
}
