
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import PlatformePrefab from "../../04-Platformes/PlatformePrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau2 extends BaseNiveaux {

	constructor() {
		super("Niveau2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// platformes
		const platformes = this.add.container(0, 0);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 390, 1000);
		platformePrefab.scaleX = 5;
		platformePrefab.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 1536, 1000);
		platformePrefab_1.scaleX = 6;
		platformePrefab_1.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 1560, 800);
		platformePrefab_2.scaleX = 3;
		platformePrefab_2.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_2);

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(this, 260, 600);
		platformePrefab_3.scaleX = 3;
		platformePrefab_3.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_3);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(this, 1560, 600);
		platformePrefab_4.scaleX = 5;
		platformePrefab_4.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_4);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 910, 400);
		platformePrefab_5.scaleX = 8;
		platformePrefab_5.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_5);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(this, 1600, 200);
		platformePrefab_6.scaleX = 5;
		platformePrefab_6.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_6);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(this, 576, 800);
		platformePrefab_7.scaleX = 5;
		platformePrefab_7.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_7);

		// platformePrefab_8
		const platformePrefab_8 = new PlatformePrefab(this, 260, 200);
		platformePrefab_8.scaleX = 4;
		platformePrefab_8.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_8);

		this.platformes = platformes;

		this.events.emit("scene-awake");
	}

	public platformes!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
