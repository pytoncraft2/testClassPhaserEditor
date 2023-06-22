
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

		// detection_grand_saut
		const detection_grand_saut = scene.add.rectangle(544, 10, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		detection_grand_saut.scaleX = 0.3111116614199342;
		detection_grand_saut.scaleY = 0.3111116614199342;
		detection_grand_saut.visible = false;
		scene.physics.add.existing(detection_grand_saut, false);
		detection_grand_saut.body.moves = false;
		detection_grand_saut.body.pushable = false;
		detection_grand_saut.body.setSize(128, 128, false);
		detection_grand_saut.isFilled = true;
		this.add(detection_grand_saut);

		// colision_detecteur_grand_saut
		const colision_detecteur_grand_saut = scene.physics.add.overlap(detection_grand_saut, [], this.attaqueEntiteSautAccessible as any, undefined, this);

		this.detection_grand_saut = detection_grand_saut;
		this.colision_detecteur_grand_saut = colision_detecteur_grand_saut;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.image.setTexture(this.imageTexture.key, this.imageTexture.frame)
		this.activeIA(true)
		this.actionToucheDroite()
		/* END-USER-CTR-CODE */
	}

	public detection_grand_saut: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public colision_detecteur_grand_saut: Phaser.Physics.Arcade.Collider;
	public imageTexture: {key:string,frame?:string|number} = {"key":"murale","frame":"araigne.png"};
	public attaqueSautAccessible: boolean = false;

	/* START-USER-CODE */
	public logiqueDescisionActionsIA = this.scene.time.addEvent({
		delay: 2000,
		callback: function (this: Murale) {
			if (!this.attaqueSautAccessible) {
				if (Math.random() < 0.6) {
					this.actionToucheHaut()
				} else if (Math.random() < 0.3) {
					this.actionToucheBas()
				}
			}
		},
		callbackScope: this,
		loop: true,
		paused: true
	});

	awake(): void {
		super.awake()
		this.colision_detecteur_grand_saut.object2 = this.scene.groupe_allies.list;
	}

	actionToucheHaut() {
		if (this.body?.touching.down && !this.body.touching.up) {
			const alendroit = this.image.flipY === false;
			if (alendroit) this.saut(true, graviteVersLeHaut);
		}
		else if (!this.body?.touching.down && this.body?.touching.up) {
			const alenvers = this.image.flipY === true;
			if (alenvers) {
				this.saut(false, graviteVersLeBas, 'up')
				this.body.setVelocityY(-900);
			}
		}
	}

	actionToucheBas() {
		if (this.body?.touching.down && !this.body.touching.up) {
			const alendroit = this.image.flipY === false;
			if (alendroit) {
				this.saut(true, graviteVersLeHaut, 'down')
				this.body.setVelocityY(600);
			}
		}
		else if (!this.body?.touching.down && this.body?.touching.up) {
			const alenvers = this.image.flipY === true;
			if (alenvers) this.saut(false, graviteVersLeBas);
		}
	}

	actionToucheDroite(): void {
		super.actionToucheDroite()
		if (this.detection_grand_saut.x != Math.abs(this.detection_grand_saut.x))
			this.detection_grand_saut.x = Math.abs(this.detection_grand_saut.x);
	}

	actionToucheGauche(): void {
		super.actionToucheGauche()
		if (this.detection_grand_saut.x != -Math.abs(this.detection_grand_saut.x))
			this.detection_grand_saut.x = -Math.abs(this.detection_grand_saut.x);
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

	attaqueEntiteSautAccessible() {
		this.attaqueSautAccessible = true;
	}

	deplacementIA(): void {
		super.deplacementIA()

		if (this.attaqueSautAccessible) {
			this.actionToucheEspace()
		}
		this.attaqueSautAccessible = false;

	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
