
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface ToileHuipatPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToileHuipatPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// toile
		const toile = scene.add.container(0, 0);
		toile.name = "toile";
		this.add(toile);

		// toile_sprite
		const toile_sprite = scene.add.sprite(0, 0, "huipat", "toile.png");
		toile_sprite.name = "toile_sprite";
		toile_sprite.scaleX = 0.5511987696365707;
		toile_sprite.scaleY = 0.14119420138560307;
		toile.add(toile_sprite);

		this.toile_sprite = toile_sprite;
		this.toile = toile;

		/* START-USER-CTR-CODE */
		// Write your code here.
		//@ts-ignore
		//@ts-ignore
		// this.scene.groupe_allies.getByName('huipat').groupe_projectile_toiles.add(this, true);
		// this.scene.add.existing(this)
		//@ts-ignore
		// this.scene.groupe_allies.getByName('huipat').add(this, true);
		/* END-USER-CTR-CODE */
	}

	public toile_sprite: Phaser.GameObjects.Sprite;
	public toile: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
