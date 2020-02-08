import { LifecycleListener } from "../LifecycleListener";
import { CreatedInstance } from "../CreatedInstance";
import { Texture } from '@babylonjs/core';
export default class TexturesLifecycleListener implements LifecycleListener<Texture> {
    onParented(parent: CreatedInstance<any>): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<Texture>): void;
    onUnmount(): void;
}
