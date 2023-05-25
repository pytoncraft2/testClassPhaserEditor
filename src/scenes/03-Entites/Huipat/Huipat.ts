
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
import ToileHuipatPrefab from "../../04-Projectiles/ToileHuipatPrefab";
/* END-USER-IMPORTS */

export default interface Huipat {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Huipat extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 1);

		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setOffset(-74, -81);
		this.body.setSize(148, 162, false);

		// image
		const image = scene.add.sprite(0, 0, "huipat", "huipat.png");
		this.add(image);

		// detecteur_proche
		const detecteur_proche = scene.add.rectangle(66, -4, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		detecteur_proche.scaleX = 0.6879210867196743;
		detecteur_proche.scaleY = 1.1424662876249119;
		detecteur_proche.visible = false;
		detecteur_proche.alpha = 0.5;
		scene.physics.add.existing(detecteur_proche, false);
		detecteur_proche.body.enable = false;
		detecteur_proche.body.moves = false;
		detecteur_proche.body.pushable = false;
		detecteur_proche.body.setSize(128, 128, false);
		detecteur_proche.isFilled = true;
		this.add(detecteur_proche);

		// colision_detecteur_proche
		const colision_detecteur_proche = scene.physics.add.overlap(detecteur_proche, [], this.actionSiEntiteProche as any, this.verifSiEntiteProcheEtPoussable as any, this);

		this.image = image;
		this.detecteur_proche = detecteur_proche;
		this.colision_detecteur_proche = colision_detecteur_proche;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;
	public detecteur_proche: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public colision_detecteur_proche: Phaser.Physics.Arcade.Collider;
	public entiteProcheEtPoussable: boolean = false;

	/* START-USER-CODE */

	// Write your code here.
	awake(): void {
		super.awake()
		this.colision_detecteur_proche.object2 = this.scene.groupe_adversaires.list;
	}

	actionToucheHaut(): void {
		if (!this.body.touching.down) return;
		this.body.checkCollision.none = true;
		this.body.setVelocityY(-this.velociteY);
		this.scene.time.delayedCall(500, () => (this.body.checkCollision.none = false), undefined, this);
	}

	actionToucheDroite() {
		this.body.setVelocityX(this.velociteX);
		this.FlipX(false)
		this.deplaceDetecteurs('Right')
	}
	actionToucheGauche() {
		this.body.setVelocityX(-this.velociteX)
		this.FlipX(true)
		this.deplaceDetecteurs('Left')
	}
	actionToucheBas(): any {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(this.velociteY)
		this.scene.time.delayedCall(50, () => (this.body.checkCollision.none = false), undefined, this);  // delay in ms
	}

	actionToucheEspace(): void {
		if (!this.body.moves) return;

		this.detecteur_proche.body.enable = true;
		if (this.entiteProcheEtPoussable) {
			this.entiteProcheEtPoussable = false;
			return;
		}

		this.scene.time.delayedCall(17, () => {
			this.detecteur_proche.body.enable = false;
		}, undefined, this)

		const { centerX, centerY } = this.image.getBounds();
		const toile = new ToileHuipatPrefab(this.scene, centerX, centerY);
		this.scene.groupe_projectile_toiles.add(toile);
		toile.body.setVelocity(this.image.flipX ? -1300 : 1300, -200);
	}

	deplaceDetecteurs(emplacement: 'Left' | 'Right')
	{
		if (this.detecteur_proche.x != this.image[`get${emplacement}Center`]().x)
			this.detecteur_proche.setPosition(this.image[`get${emplacement}Center`]().x, this.image[`get${emplacement}Center`]().y);
	}

	verifSiEntiteProcheEtPoussable(rectangle: Phaser.GameObjects.Rectangle, adversaire: BaseEntites) {
		if (adversaire.poussable) {
			return true;			
		} else {
			return false;
		}
	}

	actionSiEntiteProche(rectangle: Phaser.GameObjects.Rectangle, adversaire: BaseEntites) {
		console.log("ACTION SUR L'ENTITE PROCHE");

		// if (adversaire.poussable) {
		// 	console.log("POUSSABLE");

		// 	this.entiteProcheEtPoussable = true
		// adversaire.refToileImmobilisante.body.moves = true;
		// adversaire.body.moves = true;
		// adversaire.body.enable = false;
		// adversaire.refToileImmobilisante.body.setVelocityX(-500)
		// adversaire.refToileImmobilisante.attrape(adversaire)
		
		// adversaire.scene.tweens.add({
		// 	targets: adversaire,
		// 	y: "+=300",
		// 	duration: 1000
		// })
		// }
		// else {
		// 	this.entiteProcheEtPoussable = false
		// }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
