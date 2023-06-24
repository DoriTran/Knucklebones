import Phaser from "phaser";
import { useEffect, useRef } from "react";
import ImageURILoaderPlugin from "phaser3-rex-plugins/plugins/imageuriloader-plugin";
import BootScene from "./scenes/Boot.scene";

const config = {
  type: Phaser.AUTO,
  parent: "home",
  backgroundColor: "#000",
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  plugins: {
    global: [
      {
        key: "rexImageURILoader",
        plugin: ImageURILoaderPlugin,
        start: true,
      },
    ],
  },
  scene: [BootScene],
};

const usePhaser = () => {
  const phaserRef = useRef();

  useEffect(() => {
    // Create the Phaser game instance in the first render of component
    phaserRef.current = new Phaser.Game(config);

    // Cleanup the Phaser game instance when the component unmounts
    return () => {
      phaserRef.current.destroy();
    };
  }, []);

  return phaserRef.current;
};

export default usePhaser;
