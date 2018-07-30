import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {JhipsterRfbLocationModule} from './rfb-location/rfb-location.module';
import {JhipsterRfbEventModule} from './rfb-event/rfb-event.module';
import {JhipsterRfbEventAttendanceModule} from './rfb-event-attendance/rfb-event-attendance.module';
import {JhipsterRfbUserModule} from './rfb-user/rfb-user.module';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterRfbLocationModule,
        JhipsterRfbEventModule,
        JhipsterRfbEventAttendanceModule,
        JhipsterRfbUserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
