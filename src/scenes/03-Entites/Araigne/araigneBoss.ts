
// You can write more code here

/* START OF COMPILED CODE */

import Araigne from "./Araigne";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class araigneBoss extends Araigne {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// image
		const image = scene.add.sprite(0, 0, "araigneBoss", "araigneBoss.png");
		this.add(image);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		this.image.setTexture(this.imageTexture.key, this.imageTexture.frame)
		/* END-USER-CTR-CODE */
	}

	public imageTexture: {key:string,frame?:string|number} = {"key":"araigneBoss","frame":"araigneBoss.png"};

	/* START-USER-CODE */

	awake(): void {
		super.awake()
		this.body.setSize(this.image.displayWidth, this.image.displayHeight)
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
