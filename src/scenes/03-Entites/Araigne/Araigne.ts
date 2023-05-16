// You can write more code here
const bonusVitesseAraigne = 200;
const graviteVersLeHaut = -2500;
const graviteVersLeBas = 2500;

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Araigne {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Araigne extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 142, y ?? 72);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 1200;
		this.body.collideWorldBounds = true;
		this.body.setOffset(-114, -39.5);
		this.body.setSize(228, 79, false);

		// image
		const image = scene.add.sprite(0, 0, "araigne", "araigne.png");
		image.name = "image";
		this.add(image);

		// detecteur_bas
		const detecteur_bas = scene.add.rectangle(128, 52, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		detecteur_bas.scaleX = 0.19751986297412794;
		detecteur_bas.scaleY = 0.1622402073862163;
		scene.physics.add.existing(detecteur_bas, false);
		detecteur_bas.body.moves = false;
		detecteur_bas.body.setSize(128, 128, false);
		detecteur_bas.isFilled = true;
		this.add(detecteur_bas);

		// detecteur_haut
		const detecteur_haut = scene.add.rectangle(55, -194, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		detecteur_haut.scaleX = 0.19751986297412794;
		detecteur_haut.scaleY = 0.1622402073862163;
		detecteur_haut.alpha = 0.5;
		scene.physics.add.existing(detecteur_haut, false);
		detecteur_haut.body.moves = false;
		detecteur_haut.body.allowGravity = false;
		detecteur_haut.body.allowDrag = false;
		detecteur_haut.body.allowRotation = false;
		detecteur_haut.body.pushable = false;
		detecteur_haut.body.setSize(128, 128, false);
		detecteur_haut.isFilled = true;
		this.add(detecteur_haut);

		// colision_detecteur_haut
		const colision_detecteur_haut = scene.physics.add.overlap(detecteur_haut, [], this.platformeEnHautAccessible as any, undefined, this);

		// colision_detecteur_bas
		const colision_detecteur_bas = scene.physics.add.overlap(detecteur_bas, [], this.entiteEstSurUnePlatforme as any, undefined, this);

		this.image = image;
		this.detecteur_bas = detecteur_bas;
		this.detecteur_haut = detecteur_haut;
		this.colision_detecteur_haut = colision_detecteur_haut;
		this.colision_detecteur_bas = colision_detecteur_bas;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;
	public detecteur_bas: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public detecteur_haut: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public colision_detecteur_haut: Phaser.Physics.Arcade.Collider;
	public colision_detecteur_bas: Phaser.Physics.Arcade.Collider;
	public estSurUnePlatforme: boolean = false;
	public platformeEnHaut: boolean = false;
	public peutChangerDePlatforme: boolean = false;
	public sautEnHautActivable: boolean = false;
	public velociteXPause: boolean = false;
	public velociteX: number = 100;

	/* START-USER-CODE */
	awake(): void {
		this.colision_detecteur_haut.object2 = this.scene.platformes.list;
		this.colision_detecteur_bas.object2 = this.scene.platformes.list;

		this.scene.time.addEvent({
			delay: this.nombreEntierAuHasard(700, 800),                // ms
			callback: () => {
				this.peutChangerDePlatforme = !this.peutChangerDePlatforme;
				if (Math.random() < 0.5) {
					this.sautEnHautActivable = false;
					this.detecteur_haut.setPosition(this.detecteur_haut.x, 270);
				} else {
					this.sautEnHautActivable = true;
					this.detecteur_haut.setPosition(this.detecteur_haut.x, -132);
				}
			},
			callbackScope: this,
			loop: true
		});
	}

	// Write your code here.
	actionToucheEspace(): void {
		this.body.setVelocityY(-80)
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

	actionToucheDroite(this: any, input?: any) {
		this.body.setVelocityX(this.velociteX + bonusVitesseAraigne)

		this.FlipX(false)
		this.deplaceDetecteurs('Right')
	}

	actionToucheGauche(this: any, input?: any) {
		this.body.setVelocityX(-(this.velociteX + bonusVitesseAraigne))

		this.FlipX(true)
		this.deplaceDetecteurs('Left')
	}

	FlipX(ouiNon: boolean) {
		this.image.setFlipX(ouiNon);
	}

	deplaceDetecteurs(emplacement: 'Left' | 'Right')
	{
		this.detecteur_bas.setPosition(this.image[`get${emplacement}Center`]().x, this.detecteur_bas.y)
		this.detecteur_haut.setX(this.image[`get${emplacement}Center`]().x);
	}

	entiteEstSurUnePlatforme(_recRemplie: any, _platforme: any) {
		this.estSurUnePlatforme = true;
	}
	platformeEnHautAccessible() {
		this.platformeEnHaut = true;
	}

	nombreEntierAuHasard(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	preUpdate(...args: any[]): void {

		this.scene.physics.world.wrap(this, 400);
		// const { left, right } = this.body.blocked;

		// if (left && !this.velociteXPause) this.actionToucheGauche()
		// else if (right && !this.velociteXPause) this.actionToucheDroite()


		if (!this.estSurUnePlatforme && this.body.touching.down && !this.platformeEnHaut || this.body.blocked.left || this.body.blocked.right) {
			if (!this.image.flipX) {
				// if (!this.velociteXPause) {
					this.actionToucheGauche()
				// }
			} else if (this.image.flipX) {
				// if (!this.velociteXPause) {
					this.actionToucheDroite()
				// }
			}
		}

		if (this.estSurUnePlatforme && this.body.touching.down && this.peutChangerDePlatforme) {
			if (this.platformeEnHaut && this.sautEnHautActivable) {
				// this.actionToucheHaut()
				this.body.checkCollision.none = true;
				// this.velociteXPause = true;
				this.scene.time.delayedCall(600, () => {
					this.body.checkCollision.none = false
					// this.velociteXPause = false;
					this.image.flipX ?  this.actionToucheGauche() : this.actionToucheDroite()
				})

				this.body.setVelocity(0, -1000)

			} else if (this.platformeEnHaut && !this.sautEnHautActivable) {
				// this.actionToucheBas()
				this.body.checkCollision.none = true;
				// this.velociteXPause = true;
				this.scene.time.delayedCall(400, () => {
					this.body.checkCollision.none = false;
					// this.velociteXPause = false;
					this.image.flipX ?  this.actionToucheGauche() : this.actionToucheDroite()
				});

				this.body.setVelocity(0, -300)
			}

		}
		this.estSurUnePlatforme = false;
		this.platformeEnHaut = false;

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
