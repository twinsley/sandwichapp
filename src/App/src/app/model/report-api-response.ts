import {Report} from "./report";

export class ReportApiResponse {

    constructor(
        public _embedded: { reports: Report[] },
        public _links: Object[],
        public page: Object
    ) {
    }
}
