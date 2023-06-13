
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CollisionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public Objet1!: Phaser.GameObjects.GameObject;
	public Objet2!: Phaser.GameObjects.GameObject;
	public collisionCallback!: Phaser.GameObjects.GameObject;
	public processCallback!: Phaser.GameObjects.GameObject;
	public contexte: Phaser.GameObjects.GameObject = this;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
