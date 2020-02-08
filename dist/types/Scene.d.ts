/**
 * react-babylonjs
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import { WithBabylonJSContext } from './Engine';
import { Scene as BabylonJSScene, Engine as BabylonJSEngine, Nullable, AbstractMesh, PointerInfo, SceneOptions } from '@babylonjs/core';
import { FiberSceneProps } from './generatedProps';
export interface WithSceneContext {
    engine: Nullable<BabylonJSEngine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
    scene: Nullable<BabylonJSScene>;
    sceneReady: boolean;
}
export declare type SceneEventArgs = {
    scene: BabylonJSScene;
    canvas: HTMLCanvasElement;
};
export declare const SceneContext: React.Context<WithSceneContext>;
export declare const useBabylonScene: () => Nullable<BabylonJSScene>;
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function withScene<P extends {
    sceneContext: WithSceneContext;
}, R = Omit<P, 'sceneContext'>>(Component: React.ComponentClass<P> | React.FunctionComponent<P>): React.FunctionComponent<R>;
declare type SceneProps = {
    babylonJSContext: WithBabylonJSContext;
    onMeshPicked?: (mesh: AbstractMesh, scene: BabylonJSScene) => void;
    onScenePointerDown?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onScenePointerUp?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onScenePointerMove?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onSceneMount?: (sceneEventArgs: SceneEventArgs) => void;
    children: any;
    sceneOptions?: SceneOptions;
} & FiberSceneProps;
declare const _default: React.FunctionComponent<Pick<SceneProps, "metadata" | "clipPlane" | "children" | "onDispose" | "onDisposeObservable" | "fogEnabled" | "ambientColor" | "hoverCursor" | "autoClear" | "clearColor" | "onAfterRenderObservable" | "onBeforeRenderObservable" | "setRenderingAutoClearDepthStencil" | "setRenderingOrder" | "animationsEnabled" | "animationTimeScale" | "autoClearDepthAndStencil" | "blockfreeActiveMeshesAndRenderingGroups" | "blockMaterialDirtyMechanism" | "collisionsEnabled" | "constantlyUpdateMeshUnderPointer" | "defaultCursor" | "dispatchAllSubMeshesOfActiveMeshes" | "dumpNextRenderTargets" | "fogColor" | "fogDensity" | "fogEnd" | "fogMode" | "fogStart" | "forcePointsCloud" | "forceWireframe" | "gravity" | "lensFlaresEnabled" | "lightsEnabled" | "loadingPluginName" | "onActiveCameraChanged" | "onAfterActiveMeshesEvaluationObservable" | "onAfterAnimationsObservable" | "onAfterCameraRenderObservable" | "onAfterDrawPhaseObservable" | "onAfterParticlesRenderingObservable" | "onAfterRenderingGroupObservable" | "onAfterRenderTargetsRenderObservable" | "onAfterStepObservable" | "onBeforeActiveMeshesEvaluationObservable" | "onBeforeAnimationsObservable" | "onBeforeCameraRenderObservable" | "onBeforeDrawPhaseObservable" | "onBeforeParticlesRenderingObservable" | "onBeforeRenderingGroupObservable" | "onBeforeRenderTargetsRenderObservable" | "onBeforeStepObservable" | "onCameraRemovedObservable" | "onDataLoadedObservable" | "onGeometryRemovedObservable" | "onKeyboardObservable" | "onLightRemovedObservable" | "onMaterialRemovedObservable" | "onMeshImportedObservable" | "onMeshRemovedObservable" | "onNewCameraAddedObservable" | "onNewGeometryAddedObservable" | "onNewLightAddedObservable" | "onNewMaterialAddedObservable" | "onNewMeshAddedObservable" | "onNewSkeletonAddedObservable" | "onNewTextureAddedObservable" | "onNewTransformNodeAddedObservable" | "onPointerDown" | "onPointerMove" | "onPointerObservable" | "onPointerPick" | "onPointerUp" | "onPreKeyboardObservable" | "onPrePointerObservable" | "onReadyObservable" | "onSkeletonRemovedObservable" | "onTextureRemovedObservable" | "onTransformNodeRemovedObservable" | "particlesEnabled" | "pointerX" | "pointerY" | "postProcessesEnabled" | "preventDefaultOnPointerDown" | "preventDefaultOnPointerUp" | "probesEnabled" | "proceduralTexturesEnabled" | "renderTargetsEnabled" | "requireLightSorting" | "shadowsEnabled" | "skeletonsEnabled" | "spritesEnabled" | "texturesEnabled" | "useConstantAnimationDeltaTime" | "useDelayedTextureLoading" | "useRightHandedSystem" | "setActiveCameraByID" | "setActiveCameraByName" | "setPointerOverMesh" | "setStepId" | "setTransformMatrix" | "onMeshPicked" | "onScenePointerDown" | "onScenePointerUp" | "onScenePointerMove" | "onSceneMount" | "sceneOptions" | "actionManager" | "activeCamera" | "activeCameras" | "afterCameraRender" | "afterRender" | "animationPropertiesOverride" | "beforeCameraRender" | "beforeRender" | "cameraToUseForPointers" | "clipPlane2" | "clipPlane3" | "clipPlane4" | "customLODSelector" | "customRenderTargets" | "defaultMaterial" | "deleteCompoundImpostor" | "disableOfflineSupportExceptionRules" | "enablePhysics" | "environmentBRDFTexture" | "environmentTexture" | "geometriesByUniqueId" | "getActiveMeshCandidates" | "getActiveSubMeshCandidates" | "getCollidingSubMeshCandidates" | "getDeterministicFrameTime" | "getIntersectingSubMeshCandidates" | "importedMeshesFiles" | "offlineProvider" | "onAfterPhysicsObservable" | "onBeforePhysicsObservable" | "pointerDownPredicate" | "pointerMovePredicate" | "pointerUpPredicate" | "postProcesses" | "postProcessManager" | "reservedDataStore" | "createForParentMesh" | "childrenAsContent" | "connectControlNames" | "defaultKeyboard" | "linkToTransformNodeByName" | "shadowCasters" | "shadowCastersExcluding" | "attachToMeshesByName" | "onControlAdded" | "assignTo" | "enableInteractions">>;
export default _default;
