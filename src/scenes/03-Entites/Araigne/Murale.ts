
// You can write more code here
const graviteVersLeHaut = -2500;
const graviteVersLeBas = 2500;
/* START OF COMPILED CODE */

import Araigne from "./Araigne";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Murale extends Araigne {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(490, 10, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		rectangle_1.scaleX = 0.3111116614199342;
		rectangle_1.scaleY = 0.3111116614199342;
		scene.physics.add.existing(rectangle_1, false);
		rectangle_1.body.moves = false;
		rectangle_1.body.pushable = false;
		rectangle_1.body.setSize(128, 128, false);
		rectangle_1.isFilled = true;
		this.add(rectangle_1);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.image.setTexture(this.imageTexture.key, this.imageTexture.frame)
		this.activeIA = true;
		this.actionToucheDroite()
		/* END-USER-CTR-CODE */
	}

	public imageTexture: {key:string,frame?:string|number} = {"key":"murale","frame":"araigne.png"};

	/* START-USER-CODE */
	override logiqueDescisionSautIA(): void {
		this.scene.time.addEvent({
			delay: 2000,                // ms
			callback: () => {
				if (Math.random() < 0.4 && !this.image.flipY) this.actionToucheEspace()
				else if (Math.random() > 0.5) this.actionToucheHaut()
				else this.actionToucheBas()
			},
			callbackScope: this,
			loop: true
		});
	}

	actionToucheHaut() {
		if (this.body.touching.down && !this.body.touching.up) {
			const alendroit = this.image.flipY === false;
			if (alendroit) this.saut(true, graviteVersLeHaut);
		}
		else if (!this.body.touching.down && this.body.touching.up) {
			const alenvers = this.image.flipY === true;
			if (alenvers) {
				this.saut(false, graviteVersLeBas, 'up')
				this.body.setVelocityY(-900);
			}
		}
	}

	actionToucheBas() {
		if (this.body.touching.down && !this.body.touching.up) {
			const alendroit = this.image.flipY === false;
			if (alendroit) {
				this.saut(true, graviteVersLeHaut, 'down')
				this.body.setVelocityY(600);
			}
		}
		else if (!this.body.touching.down && this.body.touching.up) {
			const alenvers = this.image.flipY === true;
			if (alenvers) this.saut(false, graviteVersLeBas);
		}
	}

	/**
	 * @description effectue un saut vers le haut ou vers le bas en changeant la gravité et optionnelement traverser la platforme
	 * @param this
	 * @param flipY
	 * @param gravityY
	 * @param checkCollision 
	 */
	saut(flipY: boolean, gravityY: number, checkCollision?: 'up' | 'down') {
		this.image.setFlipY(flipY);
		this.body.gravity.y = gravityY;
		if (checkCollision) {
			this.body.checkCollision[checkCollision] = false;
			this.scene.time.delayedCall(100, () => {
				this.body.checkCollision[checkCollision] = true;
			}, undefined, this);
		}
	}	
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
