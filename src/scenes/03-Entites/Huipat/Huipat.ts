
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
		const image = scene.add.image(0, 0, "huipat", "huipat.png");
		this.add(image);

		// zone_interaction_proche
		const zone_interaction_proche = scene.add.rectangle(66, -4, 128, 128);
		zone_interaction_proche.scaleX = 0.6879210867196743;
		zone_interaction_proche.scaleY = 1.1424662876249119;
		zone_interaction_proche.alpha = 0.5;
		zone_interaction_proche.isFilled = true;
		this.add(zone_interaction_proche);

		// groupe_projectile_toiles
		const groupe_projectile_toiles = scene.add.container(0, 0);
		groupe_projectile_toiles.name = "groupe_projectile_toiles";
		this.add(groupe_projectile_toiles);

		this.image = image;
		this.zone_interaction_proche = zone_interaction_proche;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.scene.add.group();
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Image;
	public zone_interaction_proche: Phaser.GameObjects.Rectangle;
	public groupe_projectile_toiles: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here.
	actionToucheHaut(): void {
		if (!this.body.touching.down) return;
		this.body.checkCollision.none = true;
		this.body.setVelocityY(-this.velociteY);
		this.scene.time.delayedCall(500, () => (this.body.checkCollision.none = false), undefined, this);
	}

	actionToucheDroite() {
		this.body.setVelocityX(this.velociteX);
		this.FlipX(false)
		this.zoneInteractionADroite()
	}
	actionToucheGauche() {
		this.body.setVelocityX(-this.velociteX)
		this.FlipX(true)
		this.ZoneInteractionAGauche()
	}
	actionToucheBas(): any {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(this.velociteY)
		this.scene.time.delayedCall(50, () => (this.body.checkCollision.none = false), undefined, this);  // delay in ms
	}

	actionToucheEspace(): void {
		// const toile = this.scene.physics.add.existing(new ToileHuipatPrefab(this.scene, centerX, centerY));
		// toile.body.setVelocity(this.image.flipX ? -1300 : 1300, -200);
		// toile.refEntite = this;

		// // (entite as any).scene.groupe_projectile_boule_toile.add(obj_entite);
		// (this as any).scene.groupe_projectile_toiles.add(toile);
		// this.scene.time.delayedCall(500, () => {
		// 	if (!toile.aUneRef) {
		// 		(this as any).scene.groupe_projectile_toiles.remove(toile, true)
		// 	}
		// }, undefined, this.scene);
		// if (!this.body.moves) return;

		const { centerX, centerY } = this.image.getBounds();
		// this.groupe_projectile_toiles.;

		// this.groupe_projectile_toiles.setPosition(centerX, centerY)
		// var matrix = this.image.getWorldTransformMatrix();
		// var x = matrix.tx;
		// var y = matrix.ty;
		const toile = this.scene.physics.add.existing(new ToileHuipatPrefab(this.scene, 0, 0));
		toile.body.setVelocity(this.image.flipX ? -1300 : 1300, -200);
		this.groupe_projectile_toiles.add(toile)
		// this.scene.add.existing(toile)

		//@ts-ignore
		// this.scene.groupe_allies.getByName('groupe_projectile_toiles');


		// this.scene.time.delayedCall(500, function (this: Phaser.Scene, toile: ToileHuipatPrefab, groupe_toiles: Phaser.GameObjects.Container) {
			// groupe_toiles.remove(toile, true);
		// }, [toile, this.groupe_projectile_toiles], this.scene);		
    // const { centerX, centerY } = entite.image_entite.getBounds();
    // const toile = entite.scene.physics.add.existing(new ToileMouvante(entite.scene, centerX, centerY));
    // toile.body.setVelocity(entite.image_entite.flipX ? -1300 : 1300, -200);
    // toile.refEntite = entite;

    // (entite as any).scene.groupe_projectile_boule_toile.add(obj_entite);
    // (entite as any).scene.groupe_projectile_toiles.add(toile);
	}

	/**
	 * @description déplace à droite de l'image, le rectangle qui permet de détecter une autre entité 
	 */
	zoneInteractionADroite() {
		if (this.zone_interaction_proche.x != this.image.getRightCenter().x)
			this.zone_interaction_proche.setPosition(this.image.getRightCenter().x, this.image.getRightCenter().y);
	}

	/**
	 * @description déplace à gauche de l'image, le rectangle qui permet de détecter une autre entité 
	 */
	ZoneInteractionAGauche() {
		if (this.zone_interaction_proche.x != this.image.getLeftCenter().x)
			this.zone_interaction_proche.setPosition(this.image.getLeftCenter().x, this.image.getLeftCenter().y);
	}

	/**
	 * @param ouiNon retourne l'image de l'entité vers la droite(false) ou vers la gauche(true)
	 */
	FlipX(ouiNon: boolean) {
		this.image.setFlipX(ouiNon);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
