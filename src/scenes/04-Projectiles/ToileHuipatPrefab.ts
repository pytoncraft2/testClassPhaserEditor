
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
		this.scaleX = 0.28618752828821;
		this.scaleY = 0.28618752828821;
		scene.physics.add.existing(this, false);
		this.body.bounce.x = 1;
		this.body.bounce.y = 0.4;
		this.body.collideWorldBounds = true;
		this.body.setSize(150, 150, false);

		/* START-USER-CTR-CODE */
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public refEntite!: BaseEntites;

	/* START-USER-CODE */
	private modeBouleActive: boolean = false
	private suivre: undefined | BaseEntites
	protected preUpdate(time: number, delta: number): void {
		if (this.modeBouleActive) {
			if (this.body.blocked.left) { this.body.setAngularVelocity(450) }
			else if (this.body.blocked.right) { this.body.setAngularVelocity(-450) }

			if (this.suivre) {
				this.suivre.setPosition(this.x, this.y)				
				this.suivre.angle = this.angle;
			}
		}
	}

	activePhysiqueBoule(entite: BaseEntites, flipX: boolean) {
		this.body.moves = true;
		this.body.enable = true;
		this.body.checkCollision.none = false;
		this.body.collideWorldBounds = true;
		this.body.bounce.x = 1;
		this.body.setVelocityX(flipX ? -700 : 700)
		this.body.setCircle(64);
		this.body.setAngularVelocity(450)
		this.modeBouleActive = true;
	}

	attrape(entite: BaseEntites) {
		entite.body.moves = true;
		entite.activeIA = false;
		entite.body.enable = false;
		this.suivre = entite;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
