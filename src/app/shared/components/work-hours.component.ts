import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'comp-work-hours',
    templateUrl: './work-hours.component.html',
    styleUrls: ['./work-hours.component.css']
})

export class WorkHoursComponent {
    @Input() openingHours: any;

    days: number[] = [1, 2, 3, 4, 5, 6, 0]; // 0 - Sunday

    getWorkingHoursForTheDay(day: number){
        let period: any = this.openingHours.periods[day];

        var openHours = period.open.time.substr(0, 2) + ':' + period.open.time.substr(2);
        openHours = openHours.replace(/^0/, '');

        var closeHours = period.close.time.substr(0, 2) + ':' + period.close.time.substr(2);


        return openHours + ' - ' + closeHours;
    }

    getDayName(day:number): string{
        switch (day){
            case 1: return 'Pirmadienis';
            case 2: return 'Antradienis';
            case 3: return 'Trečiadienis';
            case 4: return 'Ketvirtadienis';
            case 5: return 'Penktadienis';
            case 6: return 'Šeštadienis';
            case 0: return 'Sekmadienis';
        }
    }
}