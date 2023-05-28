
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ToileHuipatPrefab from "~/scenes/04-Projectiles/ToileHuipatPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GroupeToile extends Phaser.Physics.Arcade.Group {

	constructor(scene: Phaser.Scene) {
		super(scene.physics.world, scene, {
			createCallback: function (this: GroupeToile) {
				this.tempsCumule = 1000;
			},
			removeCallback: function (this: GroupeToile, t: ToileHuipatPrefab | any) {
				if (this.getLength() == 0) {
					t.refEntite.body.moves = true;
				}
			}
		});
		/* START-USER-CTR-CODE */
		// Write your code here.
		scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public tempsAvantDestruction: number = 2000;

	/* START-USER-CODE */
	public tempsCumule: number = 0;

	// Write your code here.
	preUpdate(time: number, delta: number): void {			

		if (this.getLength() > 0) {
			this.tempsCumule -= delta;

			if (this.tempsCumule <= 0) {
				this.getChildren()[this.getLength() - 1].destroy()
				this.tempsCumule = 1000;
			}
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
