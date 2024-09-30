import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const toastrAnimations = [
  trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
      animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
    ])
  ]),
  trigger('slideInRight', [
    transition(':enter', [
      animate('600ms ease-out', keyframes([
        style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(-10px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
      ]))
    ]),
    transition(':leave', [
      animate('400ms ease-in', keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(-50px)', offset: 0.7 }),
        style({ opacity: 0, transform: 'translateX(100%)', offset: 1 })
      ]))
    ])
  ])
];
