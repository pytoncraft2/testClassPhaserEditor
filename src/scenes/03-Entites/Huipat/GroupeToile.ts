
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GroupeToile extends Phaser.Physics.Arcade.Group {

	constructor(scene: Phaser.Scene) {
		super(scene.physics.world, scene);
		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public tempsAvantDestruction: number = 2000;

	/* START-USER-CODE */

	// Write your code here.
	preUpdate(time: number, delta: number): void {
		    //  super.preUpdate(time, delta);
		console.log("GOGOGO", this.getLength());
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
