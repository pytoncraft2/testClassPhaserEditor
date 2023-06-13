
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
import CollisionScript from "./CollisionScript";
/* START-USER-IMPORTS */
import Niveau1 from "~/scenes/02-Niveaux/Niveau1/Niveau1";
import BaseEntites from "~/scenes/03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default class OnSceneAwakeScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// collisionScript
		new CollisionScript(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public Objet2!: Phaser.Types.Physics.Arcade.ArcadeColliderType;
	public Objet1!: Phaser.Types.Physics.Arcade.ArcadeColliderType;

	/* START-USER-CODE */

	protected awake(): void {
		this.scene.entiteControllable = this.scene.groupe_allies.getByName('huipat') as BaseEntites;
		this.executeChildren([this.Objet1, this.Objet2])
	}

	get scene(): Niveau1 {
        return super.scene as Niveau1;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
