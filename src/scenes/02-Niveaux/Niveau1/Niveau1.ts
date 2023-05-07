
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import Huipat from "../../03-Entites/Huipat/Huipat";
import OnSceneAwakeScript from "../../../script-nodes/OnSceneAwakeScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends BaseNiveaux {

	constructor() {
		super("Niveau1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// groupe_allies
		const groupe_allies = this.add.container(0, 0);

		// huipat
		const huipat = new Huipat(this, 496, 285);
		huipat.name = "huipat";
		groupe_allies.add(huipat);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		this.groupe_allies = groupe_allies;

		this.events.emit("scene-awake");
	}

	public groupe_allies!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
