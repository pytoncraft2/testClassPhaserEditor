import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import Niveau1 from "./scenes/02-Niveaux/Niveau1/Niveau1";

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
		width: 1280,
		height: 720,
		backgroundColor: "#2f2f2f",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
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
		scene: [Boot, Preload, Level, Niveau1]
	});

	game.scene.start("Boot");
});