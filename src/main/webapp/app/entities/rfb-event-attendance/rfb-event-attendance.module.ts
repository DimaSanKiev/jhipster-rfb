import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {JhipsterSharedModule} from '../../shared';
import {
    RfbEventAttendanceComponent,
    RfbEventAttendanceDeleteDialogComponent,
    RfbEventAttendanceDeletePopupComponent,
    RfbEventAttendanceDetailComponent,
    RfbEventAttendanceDialogComponent,
    RfbEventAttendancePopupComponent,
    rfbEventAttendancePopupRoute,
    RfbEventAttendancePopupService,
    rfbEventAttendanceRoute,
    RfbEventAttendanceService,
} from './';

const ENTITY_STATES = [
    ...rfbEventAttendanceRoute,
    ...rfbEventAttendancePopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceDetailComponent,
        RfbEventAttendanceDialogComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendancePopupComponent,
        RfbEventAttendanceDeletePopupComponent,
    ],
    entryComponents: [
        RfbEventAttendanceComponent,
        RfbEventAttendanceDialogComponent,
        RfbEventAttendancePopupComponent,
        RfbEventAttendanceDeleteDialogComponent,
        RfbEventAttendanceDeletePopupComponent,
    ],
    providers: [
        RfbEventAttendanceService,
        RfbEventAttendancePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterRfbEventAttendanceModule {}
