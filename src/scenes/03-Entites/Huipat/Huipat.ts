
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
		const detecteur_proche = scene.add.rectangle(66, -4, 128, 128);
		detecteur_proche.scaleX = 0.6879210867196743;
		detecteur_proche.scaleY = 1.1424662876249119;
		detecteur_proche.alpha = 0.5;
		detecteur_proche.isFilled = true;
		this.add(detecteur_proche);

		// colision_detecteur_proche
		const colision_detecteur_proche = scene.physics.add.collider(detecteur_proche, [], this.toucheAdversaireProche as any);

		this.image = image;
		this.detecteur_proche = detecteur_proche;
		this.colision_detecteur_proche = colision_detecteur_proche;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;
	public detecteur_proche: Phaser.GameObjects.Rectangle;
	public colision_detecteur_proche: Phaser.Physics.Arcade.Collider;

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

		const { centerX, centerY } = this.image.getBounds();
		const toile = new ToileHuipatPrefab(this.scene, centerX, centerY);
		(this.scene as any).groupe_projectile_toiles.add(toile);
		toile.body.setVelocity(this.image.flipX ? -1300 : 1300, -200);

		this.scene.time.delayedCall(500, function (this: Phaser.Scene, toile: ToileHuipatPrefab, groupe_toiles: Phaser.GameObjects.Container) {
			groupe_toiles.remove(toile, true);
		}, [toile, (this.scene as any).groupe_projectile_toiles], this.scene);	
	}

	deplaceDetecteurs(emplacement: 'Left' | 'Right')
	{
		if (this.detecteur_proche.x != this.image[`get${emplacement}Center`]().x)
			this.detecteur_proche.setPosition(this.image[`get${emplacement}Center`]().x, this.image[`get${emplacement}Center`]().y);
	}

	/** FONCTIONS DE CALLBACK AU MOMENT DU CHEVAUCHEMENT ENTRE LE RECTANGLE ET UN ADVERSAIRE */

	toucheAdversaireProche(allie: BaseEntites, _obj2: BaseEntites) {
		console.log("TOUCHE");
		
		// obj1.removeLife();
		allie.invincible = true;
		allie.body.moves = false;
		this.scene.tweens.add({
			targets: allie,
			alpha: {
				from: 0.8,
				to: 0
			},
			duration: 100,
			yoyo: true,
			repeat: 3,
			onComplete: () => {
				allie.body.moves = true;
			}
		});
		this.scene.time.delayedCall(3000, () => {
			allie.setAlpha(1);
			allie.invincible = false;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
