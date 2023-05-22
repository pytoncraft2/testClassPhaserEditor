
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
		this.body.pushable = false;
		this.body.setSize(150, 150, false);

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	public refImmobilise!: BaseEntites;
	public tempsCumule: number = 0;

	/* START-USER-CODE */

	protected preUpdate(time: number, delta: number): void {
		this.tempsCumule += delta;

		// if (this.tempsCumule >= 3000) {
		// 	console.log("GOOOO");
		// 	this.tempsCumule = 0;
		// }
		if (this.refImmobilise) {
			if (this.tempsCumule >= 2000) {
				this.refImmobilise.body.moves = true;
				this.destroy()
				return;
			}

			if (this.refImmobilise.body.moves) {
				this.refImmobilise.body.moves = false;				
				this.body.allowGravity = false;
				this.body.moves = false;
				this.x = this.refImmobilise.x;
				this.y = this.refImmobilise.y;
				console.log("ONCE");
			}
		}
		// console.log(time);

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
