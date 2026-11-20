/**
 * SOUND ENGINE (DISABLED & PERMANENTLY REMOVED)
 */

class SoundController {
  constructor() {
    this.enabled = false;
  }
  init() {}
  toggleSound() { return false; }
  playClick() {}
  playMechanicalClick() {}
  playHover() {}
  playEagleVision() {}
  playEagleWhoosh() {}
  playDecryptTick() {}
  playBeep() {}
}

export const sounds = new SoundController();
