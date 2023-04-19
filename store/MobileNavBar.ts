import { makeAutoObservable } from "mobx"

class Navbar {
    value: string | number = 0
    constructor() {
        makeAutoObservable(this)
    }
    handleChange(event: React.SyntheticEvent, newValue: string) {
        this.value = newValue
    }
}

export default new Navbar


