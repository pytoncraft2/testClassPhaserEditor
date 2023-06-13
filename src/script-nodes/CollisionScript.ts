
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Niveau1 from "~/scenes/02-Niveaux/Niveau1/Niveau1";
/* END-USER-IMPORTS */

export default class CollisionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public collisionCallback!: Phaser.GameObjects.GameObject;
	public processCallback!: Phaser.GameObjects.GameObject;
	public contexte!: Phaser.GameObjects.GameObject;
	public chevauchementSeulement: boolean = false;
	public Objet1!: Phaser.Types.Physics.Arcade.ArcadeColliderType;
	public Objet2!: Phaser.Types.Physics.Arcade.ArcadeColliderType;

	/* START-USER-CODE */

	// Write your code here.
	execute(args?: any): void {
		if (this.Objet1) {
			this.scene.physics.add.collider(this.Objet1, this.Objet2);
		}
	}

	get scene(): Niveau1 {
        return super.scene as Niveau1;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
