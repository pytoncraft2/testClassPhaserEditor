
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseEntites extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	actionToucheEspace() {
		console.log("touche espace")
	}
	actionToucheGauche() {
		console.log("touche gauche")
	}
	actionToucheDroite() { }
	actionToucheHaut() { }
	actionToucheBas() { }
	aucuneTouche() { }


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
