// You can write more code here

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
		detecteur_bas.visible = false;
		scene.physics.add.existing(detecteur_bas, false);
		detecteur_bas.body.moves = false;
		detecteur_bas.body.setSize(128, 128, false);
		detecteur_bas.isFilled = true;
		this.add(detecteur_bas);

		// detecteur_haut
		const detecteur_haut = scene.add.rectangle(55, -194, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		detecteur_haut.scaleX = 0.19751986297412794;
		detecteur_haut.scaleY = 0.1622402073862163;
		detecteur_haut.visible = false;
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
	public velociteX: number = 300;
	public imageTexture: {key:string,frame?:string|number} = {"key":"araigne","frame":"araigne.png"};

	/* START-USER-CODE */
	// Write your code here.

	/** MISE EN PLACE DE LA LOGIQUE DE DESCISION DU SAUT */

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

	/** FONCTIONS D'ACTION QUAND ON APPUIE SUR UNE TOUCHE */

	actionToucheEspace(): void {
		if (!this.body.touching.down) return;
		const sautHauteur = this.image.flipY ? -90 : 90;
		const sautDuration = 100;
		const sautEase = 'Exponential.easeOut';
		const landDuration = 50;
		const landEase = 'Exponential.easeIn';

		// Créer le tween de saut
		this.image.setTintFill(0x000000)
		
		const sautTween = this.scene.tweens.add({
			targets: this,
			y: '-=' + sautHauteur,
			ease: sautEase,
			duration: sautDuration,
			x: this.image.flipX ? this.x - 200 : this.x + 200,
			// yoyo: true,
			onComplete: () => {
				// Créer le tween d'atterrissage une fois que le saut est terminé
				// this.body.gravity.y += 4900;
				const landTween = this.scene.tweens.add({
					targets: this,
					y: '+=60',
					x: this.image.flipX ? this.x - 200 : this.x + 200,
					ease: landEase,
					duration: landDuration,
					onComplete: () => {
						this.image.clearTint()
						// this.body.gravity.y -= 4900;
					}
				});
			}
		});
	}

	actionToucheHaut() {
		if (!this.body.touching.down) return;
		this.body.checkCollision.none = true;
		this.scene.time.delayedCall(600, () => {
			this.body.checkCollision.none = false
			this.image.flipX ? this.actionToucheGauche() : this.actionToucheDroite()
		})

		this.body.setVelocity(0, -1000)

	}

	actionToucheBas() {
		const { touching, checkCollision } = this.body;
		if (!touching.down) return;
		checkCollision.none = true;
		this.scene.time.delayedCall(400, () => {
			checkCollision.none = false;
			this.image.flipX ? this.actionToucheGauche() : this.actionToucheDroite()
		});

		this.body.setVelocity(0, -300)
	}

	actionToucheDroite() {
		this.body.setVelocityX(this.velociteX)

		this.FlipX(false)
		this.deplaceDetecteurs('Right')
	}

	actionToucheGauche() {
		this.body.setVelocityX(-this.velociteX)

		this.FlipX(true)
		this.deplaceDetecteurs('Left')
	}

	/** AJUSTEMENT POSITION DETECTEURS AU CHANGEMENT DE DIRECTION */

	deplaceDetecteurs(emplacement: 'Left' | 'Right')
	{
		this.detecteur_bas.setPosition(this.image[`get${emplacement}Center`]().x, this.detecteur_bas.y)
		this.detecteur_haut.setX(this.image[`get${emplacement}Center`]().x);
	}

	/** FONCTIONS DE CALLBACK AU MOMENT DE LA COLISION OU CHEVAUCHEMENT */

	entiteEstSurUnePlatforme(_recRemplie: any, _platforme: any) {
		this.estSurUnePlatforme = true;
	}
	platformeEnHautAccessible() {
		this.platformeEnHaut = true;
	}

	/** FONCTIONS MIS À JOUR EN PERMANENCE */

	preUpdate(...args: any[]): void {
		this.scene.physics.world.wrap(this, 400);
		if (this.activeIA) this.deplacementIA()
	}

	deplacementIA() {
		if (!this.estSurUnePlatforme && this.body.touching.down && !this.platformeEnHaut || this.body.blocked.left || this.body.blocked.right) {
			if (!this.image.flipX) this.actionToucheGauche()
			else if (this.image.flipX) this.actionToucheDroite()
		}

		if (this.estSurUnePlatforme && this.body.touching.down && this.peutChangerDePlatforme) {
			if (this.platformeEnHaut && this.sautEnHautActivable) this.actionToucheHaut()
			else if (this.platformeEnHaut && !this.sautEnHautActivable) this.actionToucheBas()
		}
		this.estSurUnePlatforme = false;
		this.platformeEnHaut = false;
	}

	/** UTILITAIRE */

	nombreEntierAuHasard(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
