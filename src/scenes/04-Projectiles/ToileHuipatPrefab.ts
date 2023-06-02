
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
		this.body.bounce.y = 1;
		this.body.collideWorldBounds = true;
		this.body.setSize(150, 150, false);

		/* START-USER-CTR-CODE */
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public refEntite!: BaseEntites;
	public nombrePercutement: number = 0;
	public maxNombrePercutement: number = 5;
	public modeBouleActive: boolean = false;
	public entiteSuivie!: undefined | BaseEntites;
	public aToucheQqch: boolean = false;

	/* START-USER-CODE */
	protected preUpdate(time: number, delta: number): void {
		if (this.modeBouleActive) {
			this.scene.physics.world.wrap(this, 400);
			if (this.body.blocked.left) {
				this.body.setAngularVelocity(450)
				this.nombrePercutement += 1;
			}
			else if (this.body.blocked.right) {
				this.body.setAngularVelocity(-450)
				this.nombrePercutement += 1;
			}

			if (this.entiteSuivie) {
				this.entiteSuivie.setPosition(this.x, this.y)
				this.entiteSuivie.angle = this.angle;
			}

			if (this.nombrePercutement === this.maxNombrePercutement) {
				this.entiteSuivie?.detruire()
				this.entiteSuivie?.setAngle(0)
				this.destroy(true)
				// this.modeBouleActive = false;
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
		this.entiteSuivie = entite;
		entite.body.moves = true;
		entite.activeIA(false);
		entite.body.enable = false;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
