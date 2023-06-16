import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import Niveau1 from "./scenes/02-Niveaux/Niveau1/Niveau1";
import Niveau2 from "./scenes/02-Niveaux/Niveau2/Niveau2";
import Niveau3 from "./scenes/02-Niveaux/Niveau3/Niveau3";
import Niveau4 from "./scenes/02-Niveaux/Niveau4/Niveau4";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		width: 1920,
		height: 1080,
		backgroundColor: "#2f2f2f",
		scale: {
			mode: Phaser.Scale.ENVELOP,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {
					y: 900
				},
				debug: true
			}
		},
		scene: [Boot, Preload, Level, Niveau1, Niveau2, Niveau3, Niveau4]
	});

	game.scene.start("Boot");
});
