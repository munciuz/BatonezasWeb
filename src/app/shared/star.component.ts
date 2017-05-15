import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'comp-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent {
    @Input() rating: number;

    starValues: number[] = [0, 1, 2, 3, 4];

    getStarClassName(starValue: number): string {
        let starName: string;

        let residual = this.rating % 1;
        let whole = Math.trunc(this.rating) - starValue;

        if (whole > 0){
            starName = 'glyphicon glyphicon-star';
        } else {
            starName = 'glyphicon glyphicon-star-empty';
        }

        return starName
    }
}