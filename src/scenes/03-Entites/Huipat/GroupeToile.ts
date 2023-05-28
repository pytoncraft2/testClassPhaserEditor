
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
			removeCallback: function (this: GroupeToile, t: ToileHuipatPrefab | any) {
				if (this.getLength() == 0) {
					if (t.refEntite.active)
					{
						t.refEntite.body.moves = true;
					}
				}
				t.refEntite.poussable = false;
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
				this.animationDeblocage()
				this.tempsCumule = 1000;
			}
		}

	}

	animationDeblocage() {
		this.scene.tweens.add({
			targets: [this.getChildren()[this.getLength() - 1]],
			angle: -960,
			alpha: 0,
			ease: 'Linear',
			duration: 1000,
			onComplete: function (tw, targets) {
				targets[0].destroy()
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
