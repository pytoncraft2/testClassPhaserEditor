
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bouton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bouton", frame ?? "btn-left");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.setInteractive();
		this.on('pointerdown', function (this: any) {
			this.scene[this.direction + 'Appuie'] = true;
		}, this);

		if (this.direction === "gauche" || "droite" || "haut" || "bas" || "espace") {
			this.on('pointerup', function (this: any) {
				this.scene[this.direction + 'Appuie'] = false;
			}, this);
		}
		/* END-USER-CTR-CODE */
	}

	public direction: "droite"|"gauche"|"haut"|"bas"|"espace" = "gauche";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
