
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface ChauveSouris {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ChauveSouris extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = -800;
		this.body.setSize(64, 64, false);

		// image
		const image = scene.add.sprite(0, 0, "chauve_souris", "chauve_souris.png");
		this.add(image);

		this.image = image;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.scene.time.addEvent({
			delay: 750,
			callback: () => {
				this.scene.physics.moveToObject(this, this.scene.entiteControllable, 200)
			},
			callbackScope: this,
			loop: true
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
