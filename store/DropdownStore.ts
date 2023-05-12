import { makeAutoObservable } from 'mobx';

class DropdownStore {
    dropdowns = {
      films: false,
      profile: false,
      subscribe: false,
      alert: false,
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
  
    closeAllDropdowns() {
      for (const key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
    }
  }

export const dropdownStore = new DropdownStore();