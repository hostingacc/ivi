import { makeAutoObservable } from 'mobx';

class DropdownStore {
    dropdowns = {
      films: false,
      profile: false,
      subscribe: false,
      alert: false,
      genres:false,
      countries:false,
      actors:false,
    };
  
    constructor() {
      makeAutoObservable(this);
    }
  
    setShowDropdown(name, value) {
      if (value) {
        this.closeAllDropdowns();
      }
      this.dropdowns[name] = value;
    }
    toggleShowDropdown(name) {
      this.dropdowns[name] = !this.dropdowns[name];
    }
  
    closeAllDropdowns() {
      for (const key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
    }
  }

export const dropdownStore = new DropdownStore();