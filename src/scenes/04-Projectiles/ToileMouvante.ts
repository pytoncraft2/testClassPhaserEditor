
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import BaseEntites from "../03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default interface ToileMouvante {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToileMouvante extends Phaser.GameObjects.Ellipse {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.scaleX = 0.7636895105143653;
		this.scaleY = 0.7636895105143653;
		this.alpha = 0.5;
		scene.physics.add.existing(this, false);
		this.body.bounce.x = 1;
		this.body.enable = false;
		this.body.collideWorldBounds = true;
		this.body.setCircle(64);
		this.isFilled = true;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public aUneRef: boolean = false;
	public refEntite!: BaseEntites;
	public ejectable: boolean = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
