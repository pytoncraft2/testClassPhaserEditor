
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Guepe {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Guepe extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.maxVelocity.x = 600;
		this.body.maxVelocity.y = 600;
		this.body.drag.x = 1300;
		this.body.drag.y = 900;
		this.body.collideWorldBounds = true;
		this.body.checkCollision.none = true;
		this.body.setOffset(-43.92362082307655, -35.58626687054812);
		this.body.setSize(87.8472416461531, 71.17253374109625, false);

		// image
		const image = scene.add.sprite(0, 0, "guepe", "guepe.png");
		image.scaleX = 0.4067001928062643;
		image.scaleY = 0.4067001928062643;
		this.add(image);

		this.image = image;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.activeIA(true)
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;
	public indexCibleCourante: number = 0;
	public lignes: Phaser.GameObjects.Graphics = this.scene.add.graphics();
	public listeCibles!: any;
	public estActiveIA: boolean = true;

	/* START-USER-CODE */
	public modeEnerve: boolean = false;
	public logiqueDescisionActionsIA = this.scene.time.addEvent({
		delay: 770,
		callback: () => {
			if (this.modeEnerve == false) {
				// this.image.setTintFill(0xfc0000, 0xfc0000, 0xfc0000, 0xfc0000)
				this.modeEnerve = true;
			} else {
				// this.image.clearTint()
				this.modeEnerve = false;
			}
			console.log("FINALE: ", this.modeEnerve);
			
		},
		callbackScope: this,
		loop: true,
		paused: true
	});

	awake(): void {
		super.awake()
		this.listeCibles = [...this.scene.fleurs.list];
		this.listeCibles.sort(() => 0.5 - Math.random())
	}

	actionToucheDroite(): void {
		this.image.setFlipX(false)
		this.body.setAccelerationX(1900);
	}

	actionToucheGauche(): void {
		this.image.setFlipX(true)
		this.body.setAccelerationX(-1900);
	}

	actionToucheHaut(): void {
		this.body.setAccelerationY(-1900);
	}

	actionToucheBas(): void {
		this.body.setAccelerationY(1900);
	}

	actionToucheEspace(): void {
		this.indexCibleCourante++;
		let index = this.indexCibleCourante % this.listeCibles.length;
		this.indexCibleCourante = index;
		this.scene.physics.moveToObject(this, this.listeCibles[this.indexCibleCourante], 500);
	}

	aucuneTouche(): void {
        this.body.setAcceleration(0, 0);
	}

	preUpdate(time: any, delta: any): void {
		this.scene.physics.world.wrap(this, 400);
		if (this.estActiveIA) this.deplacementIA()
	}

	deplacementIA() {
		if (this.listeCibles?.length > 0) {
			// console.log(this.modeEnerve);
			

			if (this.listeCibles[this.indexCibleCourante]) {

				const distance = Phaser.Math.Distance.BetweenPoints({ x: this.x, y: this.y }, { x: this.listeCibles[this.indexCibleCourante].x, y: this.listeCibles[this.indexCibleCourante].y });
				this.body.velocity.x > 0 ? this.image.setFlipX(false) : this.image.setFlipX(true)

				if (this.body.speed > 0) {
					// Set a maximum velocity
					this.scene.physics.moveToObject(this, this.listeCibles[this.indexCibleCourante], this.modeEnerve ? 600 : 200);
					// Scale down based on distance, starting from 20px away
					this.body.velocity.scale(
						Phaser.Math.SmoothStep(distance, -17, 55)
					);

					if (distance < 8) {
						// Close enough
						this.body.reset(this.listeCibles[this.indexCibleCourante].x, this.listeCibles[this.indexCibleCourante].y);
						this.actionToucheEspace()
						console.log("ASSER PROCHE");

						this.body.debugBodyColor = 0xff0000;
					}
					else {
						this.body.debugBodyColor = 0xffff00;
					}
				}
			}
		}
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
