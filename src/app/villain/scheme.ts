export class Scheme {
    scheme: string;
    subScheme: string;

    constructor(scheme: string, subScheme: string) {
        this.scheme = scheme;
        this.subScheme = subScheme;
    }

    fetchRandomSubScheme(): void {}
}
