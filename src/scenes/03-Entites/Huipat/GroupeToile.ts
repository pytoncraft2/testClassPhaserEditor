
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ToileHuipatPrefab from "~/scenes/04-Projectiles/ToileHuipatPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GroupeToile extends Phaser.Physics.Arcade.Group {

constructor(scene: Phaser.Scene) {
	super(scene.physics.world, scene, {
		createCallback: function (this: GroupeToile, toile: ToileHuipatPrefab | any) {
			if (this.getLength() == toile.refEntite.maxBlocages) {
				this.tempsCumule = 3000;
				toile.refEntite.poussable = true;
			} else {
				this.tempsCumule = 1000;
			}

		},
		removeCallback: function (this: Phaser.Physics.Arcade.Group, t: ToileHuipatPrefab | any) {
			if (this.getLength() == 0) {
				if (t.refEntite.active) {
					t.refEntite.body.moves = true;
				}
			}
			t.refEntite.poussable = false;
		}
	});
		/* START-USER-CTR-CODE */
		// Write your code here.
		// scene.add.existing(this)
		this.maxSize = 5;
		// this.createCallback = function (toile: ToileHuipatPrefab | any) {
			
		// }
		// this.removeCallback = function (t: ToileHuipatPrefab | any) {
		// 	if (this.getLength() == 0) {
		// 		if (t.refEntite.active) {
		// 			t.refEntite.body.moves = true;
		// 		}
		// 	}
		// 	t.refEntite.poussable = false;
		// }
		/* END-USER-CTR-CODE */
	}

	public tempsAvantDestruction: number = 2000;

	/* START-USER-CODE */
	// Write your code here.
	public tempsCumule: number = 0;

	preUpdate(time: number, delta: number): void {			
		//@ts-ignore
		if (this.scene.finDePartie) {
			this.destroy(true)	
			return;
		}

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
