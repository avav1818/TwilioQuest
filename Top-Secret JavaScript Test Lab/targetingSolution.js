class TargetingSolution {
    constructor (coordinates) {
        this.coordinates = coordinates;
        // x, y, z properties
        this.x = coordinates.x;
        this.y = coordinates.y;
        this.z = coordinates.z;
    }

    // returns a formatted string containing the instance's target coordinates
    target() {
        let string = (`(${this.x}, ${this.y}, ${this.z})`);
        return string; 
    }

}

const sln = new TargetingSolution({
    x: 45,
    y: 12,
    z: -1
}); 

