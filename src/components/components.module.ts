import { NgModule } from '@angular/core';
import { RedeemComponent } from './redeem/redeem';
import { HistoryComponent } from './history/history';

@NgModule({
    declarations: [RedeemComponent,
        HistoryComponent,
    ],
    imports: [],
    exports: [RedeemComponent,
        HistoryComponent,
    ]
})
export class ComponentsModule { }
