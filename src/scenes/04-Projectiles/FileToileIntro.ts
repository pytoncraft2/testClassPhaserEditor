
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import BaseEntites from "../03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default class FileToileIntro extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.scaleX = 0.029609107493260928;
		this.scaleY = 2.29069951401355;
		this.setOrigin(0.5, 0);
		this.alpha = 0.8;
		this.isFilled = true;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	public ref!: BaseEntites;
	public duree: number = 1900;

	/* START-USER-CODE */
	awake() {
		this.ref.body.allowGravity = false;
		this.scene.tweens.add({
			targets: this,
			scaleY: 6,
			alpha: 0,
			onUpdate: () => this.ref.setPosition(this.getBottomCenter().x, this.getBottomCenter().y),
			duration: this.duree,
			ease: 'Exponential',
			onComplete: () => {
				this.ref.body.allowGravity = true;
				this.ref.activeIA = true;
				this.destroy(true);
			}
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
