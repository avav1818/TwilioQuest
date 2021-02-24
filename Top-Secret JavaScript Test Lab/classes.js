class Materializer {

    // Learnt that default properties are placed in the constructor with the "this" keyword
    constructor(targetName) {
        this.targetName = targetName;

        // activated property that defaults to false 
       this.activated = false;
       // target property that defaults to target name 
       this.target = targetName; 
    }

    // Sets activated to true
    activate() {
        this.activated = true; 
    }

    // Returns target property if activated is equal to true 
    materialize() {
        if (this.activated === true) {
            return this.target;
        } else {}
    }
}

