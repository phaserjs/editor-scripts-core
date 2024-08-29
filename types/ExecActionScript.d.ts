import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class ExecActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.GameObjects.Layer | Phaser.Scene);
    targetAction: ScriptNode;
    execute(...args: any[]): void;
}
