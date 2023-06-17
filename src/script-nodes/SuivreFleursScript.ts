
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Niveau4 from "~/scenes/02-Niveaux/Niveau4/Niveau4";
import Guepe from "~/scenes/03-Entites/Guepe/Guepe";
/* END-USER-IMPORTS */

export default class SuivreFleursScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public suivreUniquementEntitePrincipale: boolean = false;

	/* START-USER-CODE */
	protected awake(): void {
		if (this.suivreUniquementEntitePrincipale) {
			this.scene.time.delayedCall(300, () => {
				this.gameObject.listeCibles = [this.scene.entiteControllable];
			});
		} else {
			this.gameObject.listeCibles = [...this.scene.fleurs.list];
			this.gameObject.listeCibles.sort(() => 0.5 - Math.random())
		}
	}

	get scene(): Niveau4 {
        return super.scene as Niveau4;
	}

	override get gameObject() {

		return super.gameObject as Guepe;
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
