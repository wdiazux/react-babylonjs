import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Mesh } from '@babylonjs/core/Meshes';
export default class MeshLifecycleListener implements LifecycleListener<Mesh> {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<Mesh>): void;
    onUnmount(): void;
}
