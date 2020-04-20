export class Matrix {
    constructor(raw) {
        this.rows = raw.split("\n").map((row) => row.split(" ").map((value) => +value))
        this.columns = [...Array(this.rows[0].length).keys()]
            .map((columnIndex) => this.rows
                .map((row) => row[columnIndex]))
    }
}