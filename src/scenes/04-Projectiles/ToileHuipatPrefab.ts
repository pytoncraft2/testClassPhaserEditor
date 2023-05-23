
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import BaseEntites from "../03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default interface ToileHuipatPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToileHuipatPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "huipat", frame ?? "toile.png");

		this.name = "toile";
		this.scaleX = 0.5511987696365707;
		this.scaleY = 0.14119420138560307;
		scene.physics.add.existing(this, false);
		this.body.gravity.y = 400;
		this.body.bounce.x = 1;
		this.body.bounce.y = 0.7;
		this.body.angularVelocity = 220;
		this.body.collideWorldBounds = true;
		this.body.pushable = false;
		this.body.setCircle(64);

		/* START-USER-CTR-CODE */
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public refEntiteImmobilise!: BaseEntites;
	public tempsCumule: number = 0;
	public tempsCumuleImmobilisation: number = 1000;

	/* START-USER-CODE */

	protected preUpdate(time: number, delta: number): void {
		this.tempsCumule += delta;

		// if (this.refImmobilise) {
			if (this.tempsCumule >= 320) {
				if (!this.refEntiteImmobilise) {
					console.log("DESTRUCTION");
					this.destroy()
				}
				this.tempsCumule = 0;

			// 	this.refImmobilise.blocages = 0;
			// 	this.refImmobilise.body.moves = true;
			// 	this.destroy()
			// 	return;
			}

			// if (this.refImmobilise.body.moves) {
			// 	this.refImmobilise.body.moves = false;				
			// 	this.body.allowGravity = false;
			// 	this.body.moves = false;
			// 	this.body.enable = false;
			// 	this.x = this.refImmobilise.x;
			// 	this.y = this.refImmobilise.y;
			// 	console.log("STOP MOUVEMENT");
			// } else if (!this.refImmobilise.body.moves) {
			// 	this.tempsCumuleImmobilisation += delta;

			// 	if (this.tempsCumuleImmobilisation >= 1000) {
			// 		// this.scale -= 0.05;
			// 		this.tempsCumuleImmobilisation = 0;
			// 	}
			// }

		// }
		// console.log(time);

	}

	augmenteDureeImmobilisation() {
		this.scale += 0.1;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
