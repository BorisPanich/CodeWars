class Kata {
    getVolumeOfCuboid(length, width, height) {
        // return length * width * height
        return eval(length * width * height);
    }

    static getVolumeOfCuboid(...args) {
        return args.reduce((a, b) => a * b)
    }
};