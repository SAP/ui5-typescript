import type { Args } from "./generateTSInterfaces";

class Preferences {
  private static instance: Preferences;
  private static prefs: Args = {
    jsdoc: "verbose",
  };

  constructor() {
    if (!Preferences.instance) {
      Preferences.instance = this;
    }
    return Preferences.instance;
  }

  set(prefs: Args) {
    Preferences.prefs = prefs;
  }

  get() {
    return Preferences.prefs;
  }
}

export default new Preferences();
