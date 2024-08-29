import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class ConsoleLogActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.GameObjects.Layer | Phaser.Scene);
    message: string;
    execute(...args: any[]): void;
}
