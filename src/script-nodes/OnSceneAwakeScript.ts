
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Niveau1 from "~/scenes/02-Niveaux/Niveau1/Niveau1";
import BaseEntites from "~/scenes/03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default class OnSceneAwakeScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	protected awake(): void {
		this.scene.entiteControllable = this.scene.groupe_allies.getByName('huipat') as BaseEntites;
	}

	get scene(): Niveau1 {
        return super.scene as Niveau1;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
