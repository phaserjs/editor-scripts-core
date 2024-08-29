import OnEventScript from "./OnEventScript";
import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class OnPointerDownScript extends OnEventScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.GameObjects.Layer | Phaser.Scene);
    awake(): void;
}
