import {Weekday} from "./enums";

interface IBusinessHours {
    [Weekday.Monday]?: string;
    [Weekday.Tuesday]?: string;
    [Weekday.Wednesday]?: string;
    [Weekday.Thursday]?: string;
    [Weekday.Friday]?: string;
    [Weekday.Saturday]?: string;
    [Weekday.Sunday]?: string;
}

export {
    IBusinessHours,
}