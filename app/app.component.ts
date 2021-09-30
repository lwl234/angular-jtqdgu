import { Component } from '@angular/core';
import { contacts } from './contacts';

@Component({
    selector: 'my-app',
    template: `
        <kendo-listview
            [data]="contacts"
            containerClass="k-d-flex k-flex-col k-flex-nowrap"
        >
            <ng-template kendoListViewHeaderTemplate>
                <div class="header">
                <h3 style="text-align:center"> dashboard </h3>
                </div>
            </ng-template>
            <ng-template
                kendoListViewItemTemplate
                let-dataItem="dataItem"
                let-isFirst="isFirst"
            >
                <contact-card
                    class="contact"
                    [contact]="dataItem"
                    [borderTop]="!isFirst"
                >
                </contact-card>
            </ng-template>
            <ng-template kendoListViewFooterTemplate>
                <div class="footer">
                    25 unread messages in total
                </div>
            </ng-template>
        </kendo-listview>
    `,
    styles: [`
        .k-listview {
            font-family: sans-serif;
            width: 400px;
            margin: auto;
        }
        .header, .footer {
            color: #A0A0A0;
            font-size: 16px;
            padding: 6px 10px;
        }
        .footer {
            font-size: 14px;
        }
        .contact {
            width: 100%;
        }
    `]
})
export class AppComponent {
    public contacts: any[] = contacts;
}
