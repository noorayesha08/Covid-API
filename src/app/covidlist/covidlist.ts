export class Covidlist
{
    constructor(
                public location: String,
                public confirmedCasesIndian : number,
                public confirmedCasesForeign : number,
                public discharged : number,
                public deaths : number,
                public totalConfirmed : number
    )
    {

    };
}
